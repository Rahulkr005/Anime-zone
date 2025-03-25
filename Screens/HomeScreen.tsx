import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { TrendingAnime } from '../components/TrendingAnime';
import { AnimeCategories } from '../components/AnimeCategories';
import { RecentlyWatched } from '../components/RecentlyWatched';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>アニメ</Text>
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Featured Anime */}
        <View style={styles.featuredContainer}>
          <Image
            source={{ uri: 'https://api.a0.dev/assets/image?text=anime%20character%20dramatic%20pose%20cinematic%20lighting&aspect=16:9' }}
            style={styles.featuredImage}
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.9)']}
            style={styles.gradient}
          >
            <View style={styles.featuredContent}>
              <Text style={styles.featuredTitle}>Attack on Titan</Text>
              <Text style={styles.featuredSubtitle}>Final Season</Text>
              <TouchableOpacity style={styles.watchButton}>
                <Text style={styles.watchButtonText}>Watch Now</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>

        {/* Trending Section */}
        <TrendingAnime />

        {/* Categories */}
        <AnimeCategories />

        {/* Recently Watched */}
        <RecentlyWatched />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 48,
  },
  logo: {
    fontSize: 28,
    color: '#FF5F6D',
    fontWeight: 'bold',
  },
  featuredContainer: {
    height: 300,
    width: '100%',
    position: 'relative',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '70%',
    justifyContent: 'flex-end',
    padding: 16,
  },
  featuredContent: {
    marginBottom: 20,
  },
  featuredTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  featuredSubtitle: {
    color: '#FF5F6D',
    fontSize: 16,
    marginBottom: 12,
  },
  watchButton: {
    backgroundColor: '#FF5F6D',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  watchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
