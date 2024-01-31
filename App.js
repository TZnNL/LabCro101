import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Bai1 from './screens/lab3/bai1.js';
import L3B1 from './screens/lab3/bai2.js'
import L3B2 from './screens/lab3/modal.js'
import L4B1 from './screens/lab4/bai1.js'
import L4B2 from './screens/lab4/bai2.js'
import L4B3 from './screens/lab4/bai3.js'
import L5B1 from './screens/lab5/bai1.js'
import L5B2 from './screens/lab5/bai2.js'
import L5B3 from './screens/lab5/bai3.js'

export default function App() {
  return (
    <View style={styles.container}>
           <L5B3 />

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
