const EDGE_TTS_VOICE = 'ja-JP-NanamiNeural';
const EDGE_TTS_URL = 'wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1';
const TRUSTED_CLIENT_TOKEN = '6A5AA1D4EAFF4E9FB37E23D68491D6F4';

let currentAudio: HTMLAudioElement | null = null;

function stopCurrentAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}

function formatSSML(text: string, rate: number): string {
  const ratePercent = Math.round((rate - 1) * 100);
  const rateStr = ratePercent >= 0 ? `+${ratePercent}%` : `${ratePercent}%`;
  return `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='ja-JP'>` +
    `<voice name='${EDGE_TTS_VOICE}'>` +
    `<prosody pitch='+0Hz' rate='${rateStr}' volume='+0%'>` +
    escapeXml(text) +
    `</prosody>` +
    `</voice>` +
    `</speak>`;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateRequestId(): string {
  const hex = '0123456789abcdef';
  let id = '';
  for (let i = 0; i < 32; i++) {
    id += hex[Math.floor(Math.random() * 16)];
  }
  return id;
}

function assembleAudioChunks(chunks: Uint8Array[]): ArrayBuffer {
  let totalLen = 0;
  for (const c of chunks) totalLen += c.length;
  const buf = new Uint8Array(totalLen);
  let offset = 0;
  for (const c of chunks) {
    buf.set(c, offset);
    offset += c.length;
  }
  return buf.buffer;
}

function parseAudioFromMessage(data: ArrayBuffer): Uint8Array | null {
  const view = new DataView(data);
  const headerLen = view.getUint16(0);
  if (headerLen > data.byteLength) return null;

  const headerBytes = new Uint8Array(data, 2, headerLen - 2);
  const headerStr = new TextDecoder().decode(headerBytes);

  if (!headerStr.includes('Path:audio')) return null;

  const audioStart = 2 + headerLen;
  if (audioStart >= data.byteLength) return null;

  return new Uint8Array(data, audioStart);
}

export function speakWithEdgeTTS(text: string, rate: number = 0.8): Promise<void> {
  return new Promise((resolve) => {
    stopCurrentAudio();

    let resolved = false;
    const done = () => {
      if (resolved) return;
      resolved = true;
      resolve();
    };

    const wsUrl = `${EDGE_TTS_URL}?TrustedClientToken=${TRUSTED_CLIENT_TOKEN}&ConnectionId=${generateRequestId()}`;
    let ws: WebSocket;

    try {
      ws = new WebSocket(wsUrl);
    } catch {
      done();
      return;
    }

    const audioChunks: Uint8Array[] = [];
    const requestId = generateRequestId();

    ws.onopen = () => {
      const configMsg =
        `X-Timestamp:${new Date().toUTCString()}\r\n` +
        `Content-Type:application/json; charset=utf-8\r\n` +
        `Path:speech.config\r\n\r\n` +
        `{"context":{"synthesis":{"audio":{"metadataoptions":{"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"true"},"outputFormat":"audio-24khz-48kbitrate-mono-mp3"}}}}`;

      ws.send(configMsg);

      const ssml = formatSSML(text, rate);
      const synthMsg =
        `X-RequestId:${requestId}\r\n` +
        `Content-Type:application/ssml+xml\r\n` +
        `X-Timestamp:${new Date().toUTCString()}\r\n` +
        `Path:ssml\r\n\r\n` +
        ssml;

      ws.send(synthMsg);
    };

    ws.onmessage = (event) => {
      if (event.data instanceof ArrayBuffer) {
        const audioData = parseAudioFromMessage(event.data);
        if (audioData) {
          audioChunks.push(audioData);
        }
      } else if (typeof event.data === 'string') {
        if (event.data.includes('Path:turn.end')) {
          ws.close();
          if (audioChunks.length === 0) {
            done();
            return;
          }

          const audioBuffer = assembleAudioChunks(audioChunks);
          const blob = new Blob([audioBuffer], { type: 'audio/mp3' });
          const url = URL.createObjectURL(blob);

          const audio = new Audio(url);
          currentAudio = audio;

          audio.onended = () => {
            URL.revokeObjectURL(url);
            if (currentAudio === audio) currentAudio = null;
            done();
          };

          audio.onerror = () => {
            URL.revokeObjectURL(url);
            if (currentAudio === audio) currentAudio = null;
            console.warn('[EdgeTTS] Audio playback error');
            done();
          };

          audio.play().catch(() => {
            URL.revokeObjectURL(url);
            if (currentAudio === audio) currentAudio = null;
            done();
          });
        }
      }
    };

    ws.onerror = () => {
      console.warn('[EdgeTTS] WebSocket error');
      done();
    };

    ws.onclose = () => {
      if (!resolved && audioChunks.length > 0) {
        const audioBuffer = assembleAudioChunks(audioChunks);
        const blob = new Blob([audioBuffer], { type: 'audio/mp3' });
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        currentAudio = audio;

        audio.onended = () => {
          URL.revokeObjectURL(url);
          if (currentAudio === audio) currentAudio = null;
          done();
        };
        audio.onerror = () => {
          URL.revokeObjectURL(url);
          if (currentAudio === audio) currentAudio = null;
          done();
        };
        audio.play().catch(() => {
          URL.revokeObjectURL(url);
          if (currentAudio === audio) currentAudio = null;
          done();
        });
      }
    };

    setTimeout(() => {
      if (!resolved) {
        try { ws.close(); } catch { /* ignore */ }
        done();
      }
    }, 30000);
  });
}

export function stopEdgeTTS() {
  stopCurrentAudio();
}

export function isEdgeTTSAvailable(): boolean {
  return typeof WebSocket !== 'undefined';
}
