import { View, Text } from "react-native";

export default function CartaoUsuario({nome, email}){
    return(
        <View>
            <Text>{nome}</Text>
            <Text>{email}</Text>
        </View>
    )
}