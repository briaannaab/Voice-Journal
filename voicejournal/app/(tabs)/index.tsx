import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journal</Text>
      <Text style={styles.subtitle}>Your thoughts, transcribed.</Text>

      <TouchableOpacity
        style={styles.recordButton}
        onPress={() => router.push('/record')}
      >
        <Text style={styles.recordIcon}>🎙️</Text>
        <Text style={styles.recordText}>New Entry</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 42, fontWeight: '700', color: '#fff', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#888', marginBottom: 60 },
  recordButton: { backgroundColor: '#6366f1', padding: 24, borderRadius: 50, alignItems: 'center', width: 160 },
  recordIcon: { fontSize: 36 },
  recordText: { color: '#fff', fontWeight: '600', marginTop: 8 }
});