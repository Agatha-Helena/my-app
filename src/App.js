import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
/* import { ExpressoesJSX } from './jsx_examples/02_expressoes_jsx'; */
/* import Exemplo03 from './jsx_examples/03_condicionais_jsx'; */
import Exemplo04 from './jsx_examples/04_listas_map_jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo04/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c5c5c5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 50,
    color: "white"
  }
});