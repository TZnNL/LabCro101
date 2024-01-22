import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Bai1 from './screens/lab3/bai1.js';
import L3B1 from './screens/lab3/bai2.js'
import L3B2 from './screens/lab3/modal.js'
import L4B1 from './screens/lab4/bai1.js'
import L4B2 from './screens/lab4/bai2.js'
import L4B3 from './screens/lab4/bai3.js'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Bai1 /> */}
      {/* <Text> xin chao</Text> */}
      <SafeAreaView>
      {/* <L3B1/> */}
      {/* <L3B2/> */}
      {/* <L4B1 /> */}
      {/* <L4B2 /> */}
      <L4B3 />
      </SafeAreaView>
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
