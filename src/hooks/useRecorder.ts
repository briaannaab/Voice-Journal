import { useState, useRef } from 'react';
import { Audio } from 'expo-av';

export function useRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [duration, setDuration] = useState(0);
  const [audioUri, setAudioUri] = useState(null);
  const recordingRef = useRef(null);
  const timerRef = useRef(null);

  const startRecording = async () => {
    await Audio.requestPermissionsAsync();
    await Audio.setAudioModeAsync({ allowsRecordingIOS: true, playsInSilentModeIOS: true });

    const { recording } = await Audio.Recording.createAsync(
      Audio.RecordingOptionsPresets.HIGH_QUALITY
    );

    recordingRef.current = recording;
    setIsRecording(true);
    setDuration(0);

    timerRef.current = setInterval(() => {
      setDuration((d) => d + 1000);
    }, 1000);
  };

  const stopRecording = async () => {
    clearInterval(timerRef.current);
    setIsRecording(false);

    await recordingRef.current.stopAndUnloadAsync();
    const uri = recordingRef.current.getURI();
    setAudioUri(uri);
    return uri;
  };

  return { isRecording, duration, audioUri, startRecording, stopRecording };
}