import { Text, View } from "react-native";

export function EstruturaJSX() {
    return (
        //retorno único
        <View>
            <Text>Exemplo de Retorno único</Text>
            {/*retorno único com fragment <></> */}
            <View>
                <>
                    <Text></Text>

                    {/*exemplo SelfClose*/}
                    <View/>
                </>
            </View>
        </View>
    )
}