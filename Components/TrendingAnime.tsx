import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const trendingAnime = [
  { id: 1, title: 'Demon Slayer', image: 'https://api.a0.dev/assets/image?text=anime%20samurai%20with%20sword%20dramatic%20pose&seed=1' },
  { id: 2, title: 'Jujutsu Kaisen', image: 'https://api.a0.dev/assets/image?text=anime%20sorcerer%20dark%20magic%20mysterious&seed=2' },
  { id: 3, title: 'My Hero Academia', image: 'https://api.a0.dev/assets/image?text=superhero%20anime%20character%20action%20pose&seed=3' },
  { id: 4, title: 'One Piece', image: 'https://api.a0.dev/assets/image?text=pirate%20anime%20adventure%20dramatic&seed=4' },
];

export function TrendingAnime() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Trending Now</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {trendingAnime.map((anime) => (
          <TouchableOpacity key={anime.id} style={styles.animeCard}>
            <Image source={{ uri: anime.image }} style={styles.animeImage} />
            <Text style={styles.animeTitle}>{anime.title}</Text>
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
  animeCard: {
    marginRight: 16,
    width: 140,
  },
  animeImage: {
    width: 140,
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  animeTitle: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});