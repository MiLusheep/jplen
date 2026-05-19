import { useState, useRef, useCallback } from 'react';
import { speakingData } from '../../data/reading/speaking';
import { useSpeakingStore } from '../../stores/useSpeakingStore';
import type { SpeakingLesson } from '../../types/speaking';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import SpeakButton from '../../components/SpeakButton/SpeakButton';
import styles from './Speaking.module.css';

const speakingLevels = ['N5', 'N4', 'N3', 'N2', 'N1'] as const;
type SpeakingLevel = (typeof speakingLevels)[number];

export default function Speaking() {
  const { recordings, isRecording, startRecording, stopRecording, discardRecording, markPhrasePracticed } =
    useSpeakingStore();
  const [selectedLevel, setSelectedLevel] = useState<SpeakingLevel>('N5');
  const [selectedLesson, setSelectedLesson] = useState<SpeakingLesson | null>(null);
  const [activePhraseId, setActivePhraseId] = useState<string | null>(null);
  const [playingRecordingId, setPlayingRecordingId] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const startTimeRef = useRef<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStartRecording = useCallback(async (phraseId: string, lessonId: string) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];
      startTimeRef.current = Date.now();
      setActivePhraseId(phraseId);

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
        setActivePhraseId(null);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      startRecording();
    } catch {
      console.error('无法访问麦克风');
    }
  }, [startRecording, stopRecording, markPhrasePracticed]);

  const handleStopRecording = useCallback(() => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
    }
  }, [isRecording]);

  const handleDiscardRecording = useCallback(() => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
    }
    discardRecording();
    setActivePhraseId(null);
  }, [isRecording, discardRecording]);

  const handlePlayRecording = useCallback((recordingId: string, blob: Blob) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    audioRef.current = audio;
    setPlayingRecordingId(recordingId);
    audio.onended = () => {
      setPlayingRecordingId(null);
      URL.revokeObjectURL(url);
    };
    audio.play();
  }, []);

  const getRecordingsForPhrase = (phraseId: string) => {
    return recordings.filter((r) => r.phraseId === phraseId);
  };

  return (
    <div className={styles.speaking}>
      <header className={styles.header}>
        <h1 className={styles.title}>跟读练习</h1>
        <p className={styles.subtitle}>跟读日语短语，提升口语能力</p>
      </header>

      {!selectedLesson ? (
        <>
          <div className={styles.levelTabs}>
            {speakingLevels.map((level) => (
              <button
                key={level}
                className={`${styles.levelTab} ${selectedLevel === level ? styles.levelActive : ''}`}
                onClick={() => setSelectedLevel(level)}
              >
                {level}
              </button>
            ))}
          </div>
          <div className={styles.lessonGrid}>
            {speakingData.filter((l) => l.level === selectedLevel).map((lesson) => {
            const practicedCount = useSpeakingStore.getState().lessonProgress[lesson.id]?.practicedPhrases.length || 0;
            return (
              <Card
                key={lesson.id}
                variant="interactive"
                padding="lg"
                onClick={() => setSelectedLesson(lesson)}
              >
                <div className={styles.lessonCard}>
                  <div className={styles.lessonIcon}>🎤</div>
                  <h3 className={styles.lessonTitle}>{lesson.title}</h3>
                  <p className={styles.lessonTitleJp}>{lesson.titleJp}</p>
                  <div className={styles.lessonMeta}>
                    <span className={styles.lessonLevel}>{lesson.level}</span>
                    <span className={styles.lessonCount}>
                      {lesson.phrases.length} 个短语
                    </span>
                  </div>
                  <div className={styles.lessonProgress}>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${(practicedCount / lesson.phrases.length) * 100}%` }}
                      />
                    </div>
                    <span className={styles.progressText}>
                      {practicedCount}/{lesson.phrases.length}
                    </span>
                  </div>
                </div>
              </Card>
            );
          })}
          </div>
        </>
      ) : (
        <div className={styles.lessonDetail}>
          <button
            className={styles.backBtn}
            onClick={() => setSelectedLesson(null)}
          >
            ← 返回课程列表
          </button>

          <div className={styles.lessonHeader}>
            <h2 className={styles.lessonDetailTitle}>{selectedLesson.title}</h2>
            <p className={styles.lessonDetailJp}>{selectedLesson.titleJp}</p>
          </div>

          <div className={styles.phrasesList}>
            {selectedLesson.phrases.map((phrase) => {
              const isActive = activePhraseId === phrase.id;
              const phraseRecordings = getRecordingsForPhrase(phrase.id);
              const isPracticed = useSpeakingStore.getState().lessonProgress[selectedLesson.id]?.practicedPhrases.includes(phrase.id);

              return (
                <Card key={phrase.id} variant="default" padding="lg">
                  <div className={styles.phraseCard}>
                    <div className={styles.phraseContent}>
                      <div className={styles.phraseStatus}>
                        {isPracticed ? (
                          <span className={styles.practiced}>✓</span>
                        ) : (
                          <span className={styles.notPracticed}>○</span>
                        )}
                      </div>
                      <div className={styles.phraseInfo}>
                        <div className={styles.phraseJpRow}>
                          <p className={styles.phraseJp}>{phrase.japanese}</p>
                          <SpeakButton text={phrase.japanese} />
                        </div>
                        <p className={styles.phraseReading}>{phrase.reading}</p>
                        <p className={styles.phraseCn}>{phrase.chinese}</p>
                      </div>
                    </div>

                    <div className={styles.phraseActions}>
                      {isActive ? (
                        <div className={styles.recordingControls}>
                          <div className={styles.recordingIndicator}>
                            <span className={styles.recordingDot} />
                            <span>录音中...</span>
                          </div>
                          <div className={styles.waveform}>
                            {[...Array(16)].map((_, i) => (
                              <span
                                key={i}
                                className={styles.waveformBar}
                                style={{ animationDelay: `${i * 0.08}s` }}
                              />
                            ))}
                          </div>
                          <div className={styles.recordingBtns}>
                            <Button
                              variant="primary"
                              size="sm"
                              onClick={handleStopRecording}
                            >
                              ■ 停止录音
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={handleDiscardRecording}
                            >
                              ✕ 取消
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <Button
                          variant="accent"
                          size="sm"
                          onClick={() => handleStartRecording(phrase.id, selectedLesson.id)}
                        >
                          🎙 开始跟读
                        </Button>
                      )}
                    </div>

                    {phraseRecordings.length > 0 && (
                      <div className={styles.recordingsList}>
                        <h4 className={styles.recordingsTitle}>我的录音</h4>
                        {phraseRecordings.map((rec) => (
                          <div key={rec.id} className={styles.recordingItem}>
                            <button
                              className={`${styles.playBtn} ${playingRecordingId === rec.id ? styles.playing : ''}`}
                              onClick={() => handlePlayRecording(rec.id, rec.blob)}
                            >
                              {playingRecordingId === rec.id ? '⏸' : '▶'}
                            </button>
                            <div className={styles.recordingInfo}>
                              <span className={styles.recordingDuration}>
                                {rec.duration.toFixed(1)}s
                              </span>
                              <span className={styles.recordingTime}>
                                {new Date(rec.timestamp).toLocaleTimeString()}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
