import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useRecorder } from ./src/hooks/useRecorder';
export default function RecordScreen() {
  const router = useRouter();
  const { isRecording, duration, startRecording, stopRecording } = useRecorder();
  const [processing, setProcessing] = useState(false);

  const handleStop = async () => {
    setProcessing(true);
    const uri = await stopRecording();
    if (!uri) return;

    const formData = new FormData();
    formData.append('file', { uri, name: 'entry.m4a', type: 'audio/m4a' } as any);

    const response = await api.post('/transcribe', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });

    console.log('Transcript:', response.data.transcript);
    setProcessing(false);
    router.back();
  };

  if (processing) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#6366f1" />
        <Text style={styles.processingText}>Transcribing your thoughts...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.duration}>{formatDuration(duration)}</Text>
      <Text style={styles.hint}>{isRecording ? 'Listening...' : 'Tap to start'}</Text>

      <TouchableOpacity
        style={[styles.button, isRecording ? styles.stopButton : styles.startButton]}
        onPress={isRecording ? handleStop : startRecording}
      >
        <Text style={styles.buttonText}>{isRecording ? '⏹ Stop' : '🎙 Start'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancel} onPress={() => router.back()}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const formatDuration = (ms: number) => {
  const s = Math.floor(ms / 1000);
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f', alignItems: 'center', justifyContent: 'center' },
  duration: { fontSize: 64, fontWeight: '200', color: '#fff', fontVariant: ['tabular-nums'] },
  hint: { color: '#888', fontSize: 16, marginTop: 12, marginBottom: 48 },
  button: { paddingHorizontal: 48, paddingVertical: 18, borderRadius: 50 },
  startButton: { backgroundColor: '#6366f1' },
  stopButton: { backgroundColor: '#ef4444' },
  buttonText: { color: '#fff', fontSize: 20, fontWeight: '600' },
  cancel: { marginTop: 32 },
  cancelText: { color: '#555', fontSize: 16 },
  processingText: { color: '#888', marginTop: 16, fontSize: 16 }
})