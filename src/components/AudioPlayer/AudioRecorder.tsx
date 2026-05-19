import { useEffect, useCallback, useRef } from 'react';
import { useSpeakingStore } from '../../stores/useSpeakingStore';
import styles from './AudioRecorder.module.css';

interface AudioRecorderProps {
  phraseId: string;
  lessonId: string;
}

export default function AudioRecorder({ phraseId, lessonId }: AudioRecorderProps) {
  const { isRecording, startRecording, stopRecording, discardRecording, markPhrasePracticed } =
    useSpeakingStore();

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const startTimeRef = useRef<number>(0);

  const handleStart = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];
      startTimeRef.current = Date.now();

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        const duration = (Date.now() - startTimeRef.current) / 1000;
        stopRecording(blob, phraseId, lessonId, duration);
        markPhrasePracticed(lessonId, phraseId);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      startRecording();
    } catch {
      console.error('无法访问麦克风');
    }
  }, [phraseId, lessonId, startRecording, stopRecording, markPhrasePracticed]);

  const handleStop = useCallback(() => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
    }
  }, [isRecording]);

  const handleDiscard = useCallback(() => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
    }
    discardRecording();
  }, [isRecording, discardRecording]);

  useEffect(() => {
    return () => {
      if (mediaRecorderRef.current && isRecording) {
        mediaRecorderRef.current.stop();
      }
    };
  }, [isRecording]);

  return (
    <div className={styles.recorder}>
      {isRecording ? (
        <div className={styles.recordingControls}>
          <div className={styles.recordingIndicator}>
            <span className={styles.recordingDot} />
            <span className={styles.recordingText}>录音中...</span>
          </div>
          <div className={styles.waveform}>
            {[...Array(12)].map((_, i) => (
              <span
                key={i}
                className={styles.waveformBar}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <div className={styles.buttons}>
            <button className={styles.stopBtn} onClick={handleStop}>
              ■ 停止
            </button>
            <button className={styles.discardBtn} onClick={handleDiscard}>
              ✕ 取消
            </button>
          </div>
        </div>
      ) : (
        <button className={styles.recordBtn} onClick={handleStart}>
          <span className={styles.recordIcon}>🎙</span>
          <span>开始录音</span>
        </button>
      )}
    </div>
  );
}
