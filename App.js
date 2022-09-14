import { StyleSheet, Text, View } from 'react-native';
import  HomePage  from './navigate'
import LoginPage from './navigate'

export default function App() {
  return (
      <View style={styles.container}>
        <LoginPage/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});
