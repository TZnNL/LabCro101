import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from 'expo-font';

const App = () => {
  // Load the custom font
  const [loaded] = useFonts({
    SingleFont: require('../../fonts/SingleDay-Regular.ttf'),
  });

  if (!loaded) {
    return null; // You might want to render a loading component or something else while the font is loading
  }

  return (
    <View style={styles.container}>
      <Text style={styles.fonttext}>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letra</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fonttext: {
    fontFamily: 'SingleFont', // This should match the font name you used in useFonts
    fontSize: 35,
    padding: 10,
    color: 'black',
  }
});

export default App;
