import { Text, View } from "react-native";
export default function Saudacao (props){
    return(
        <View>
            <Text>Olá, {props.nome}! Bem-vindo(a)</Text>
        </View>
    )
}