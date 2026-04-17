import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
/* import CardProduto from './props_exercises/produto_props'; */
/* import Saudacao from './props_exercises/repetir_props'; */
import PerfilAluno from './props_exercises/botao_props';
/* import CartaoUsuario from './props_exercises/cartao_user'; */
/* import ViewExercicio09 from './view_exercicios/ViewExercicio09';*/
/* import ViewExercicio08 from './view_exercicios/ViewExercicio08'; */
/* import ViewExercicio07 from './view_exercicios/ViewExercicio07'; */
/* import ViewExercicio06 from './view_exercicios/ViewExercicio06'; */
/* import ViewExercicio05 from './view_exercicios/ViewExercicio05'; */
/* import ViewExercicio04 from './view_exercicios/ViewExercicio04'; */
/* import ViewExercicio03 from './view_exercicios/ViewExercicio03'; */
/* import ViewExercicio02 from './view_exercicios/ViewExercicio02'; */
/* import ViewExemplo01 from './view_examples/ViewExemplo01';*/
/* import ViewExemplo2 from './view_examples/ViewExemplo02.js'; */
/* import ExercicioView01 from './view_exercicios/ViewExercicio01.js'; */
/* import ViewExercicio01 from './view_exercicios/ViewExercicio01.js'; */
/* import { EstruturaJSX } from './jsx_examples/01_estrutura_jsx'; */
/* import { ExpressoesJSX } from './jsx_examples/02_expressoes_jsx'; */
/* import Exemplo03 from './jsx_examples/03_condicionais_jsx'; */
/* import EstruturaJSX from './jsx_examples/04_listas_map_jsx'; */
/* import  Lista01Ex01  from './jsx_examples/exercicios/lista_01_jsx' */
/* import  Lista01Ex02  from './jsx_examples/exercicios/lista_01_jsx' */
/* import Lista01 from './jsx_examples/exercicios/lista_01_jsx'; */ /* funcionou tudo */
/* import Lista02 from './jsx_examples/exercicios/lista_02_jsx'; */ /* funcionou tudo */
/* import Lista03 from './jsx_examples/exercicios/lista_03_jsx'; */ /* funcionou tudo */
/* import Exercicio20 from './prova/Exercicio20'; */
/* import Exercicio21 from './prova/Exercicio21'; */
/* import CartaoPerfil from './props_examples/cartao_perfil'; */



export default function App() {
  return (
    <View style={styles.container}>
      <PerfilAluno titulo="Entrar"/>
      <PerfilAluno titulo="Sair"/>
      <PerfilAluno titulo="Cadastrar"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  }
})