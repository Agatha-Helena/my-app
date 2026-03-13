import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
/* import ViewExemplo01 from './view_examples/ViewExemplo01';*/
import ViewExemplo2 from './view_examples/ViewExemplo02.js';
import ExercicioView01 from './view_exercicios/ViewExercicio01.js';
/* import { EstruturaJSX } from './jsx_examples/01_estrutura_jsx'; */
/* import { ExpressoesJSX } from './jsx_examples/02_expressoes_jsx'; */
/* import Exemplo03 from './jsx_examples/03_condicionais_jsx'; */
/* import EstruturaJSX from './jsx_examples/04_listas_map_jsx'; */
/* import  Lista01Ex01  from './jsx_examples/exercicios/lista_01_jsx' */
/* import  Lista01Ex02  from './jsx_examples/exercicios/lista_01_jsx' */
/* import Lista01 from './jsx_examples/exercicios/lista_01_jsx'; */ /* funcionou tudo */
/* import Lista02 from './jsx_examples/exercicios/lista_02_jsx'; */ /* funcionou tudo */
/* import Lista03 from './jsx_examples/exercicios/lista_03_jsx'; */ /* funcionou tudo */



export default function App() {
  return (
    <View style={styles.container}>
      <ExercicioView01/>
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