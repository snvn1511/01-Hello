import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HelloComp from './components/HelloComp';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={ styles.tieuDe }>Thực hành React 001 </Text>
      <StatusBar style="auto" />


      <HelloComp />
      <HelloComp />
      <HelloComp />

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
  tieuDe:{
    fontSize:40,
    color:"blue",
    backgroundColor:"yellow",
    padding:20
  }
});
