import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScrenn from './src/screens/login-screen';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScrenn></LoginScrenn>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: "1",
    backgroundColor: '#D1D1D1',
    flexDirection:'column',
    justifyContent:'center',
    // alignItems:'center'
    
  },
});
