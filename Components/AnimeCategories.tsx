import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const categories = [
  { id: 1, name: 'Action', color: ['#FF416C', '#FF4B2B'] },
  { id: 2, name: 'Romance', color: ['#FF5F6D', '#FFC371'] },
  { id: 3, name: 'Fantasy', color: ['#4E65FF', '#92EFFD'] },
  { id: 4, name: 'Horror', color: ['#6157FF', '#EE49FD'] },
];

export function AnimeCategories() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categoryGrid}>
        {categories.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryCard}>
            <LinearGradient
              colors={category.color}
              style={styles.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.categoryText}>{category.name}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
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
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    marginBottom: 16,
  },
  gradient: {
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
