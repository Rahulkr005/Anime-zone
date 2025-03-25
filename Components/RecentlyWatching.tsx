import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const recentlyWatched = [
  { id: 1, title: 'Naruto', progress: '75%', image: 'https://api.a0.dev/assets/image?text=ninja%20anime%20character%20dramatic&seed=5' },
  { id: 2, title: 'Death Note', progress: '45%', image: 'https://api.a0.dev/assets/image?text=dark%20mystery%20anime%20character&seed=6' },
  { id: 3, title: 'Dragon Ball', progress: '90%', image: 'https://api.a0.dev/assets/image?text=martial%20arts%20anime%20action&seed=7' },
];

export function RecentlyWatched() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Continue Watching</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {recentlyWatched.map((anime) => (
          <TouchableOpacity key={anime.id} style={styles.watchCard}>
            <Image source={{ uri: anime.image }} style={styles.watchImage} />
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: anime.progress }]} />
            </View>
            <View style={styles.watchInfo}>
              <Text style={styles.watchTitle}>{anime.title}</Text>
              <MaterialIcons name="play-circle-filled" size={24} color="#FF5F6D" />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 16,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  watchCard: {
    marginRight: 16,
    width: 200,
  },
  watchImage: {
    width: 200,
    height: 120,
    borderRadius: 8,
  },
  progressBar: {
    height: 3,
    backgroundColor: '#333',
    borderRadius: 2,
    marginVertical: 8,
  },
  progress: {
    height: '100%',
    backgroundColor: '#FF5F6D',
    borderRadius: 2,
  },
  watchInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  watchTitle: {
    color: 'white',
    fontSize: 14,
  },
});