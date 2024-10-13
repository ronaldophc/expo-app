import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from'expo-image';

export default function App() {

  const pet = {
    animal: 'Cat',
    name: "Buddy",
    age: 21
  };
  if (pet.animal == 'Dog') {
    return (
      <View style={styles.container}>
        <Text>Who let the dogs out: {pet.name}, {pet.age}</Text>
        <Image source={{ uri: 'https://picsum.photos/200/300' }} style={{ width: 150, height: 150 }} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>Are we in Jumanji {pet.animal} {pet.name}?</Text>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
