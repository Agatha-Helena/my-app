import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Lista02() {
    const loja_aberta = true;
    const tem_promoçao = true;
    const nota = 7.5;
    function resultado(){
        if (nota >= 7){
            return "Aprovado"
        } else if (nota >= 5 || nota < 7){
            return "Recuperação"
        } else if (nota < 5 || nota >= 0){
            return "Reprovado"
        } else {
            return "Erro"
        }
    }

  return (
    <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Lista 02 - Agatha</Text>
        <View style={styles.card}>
            <Text style={styles.label}>Exercício 1 - Operador Ternário</Text>
            <View>
                <Text>Status: {loja_aberta ? "Aberto" : "Fechado"}</Text>
            </View>
        </View>
        <View style={styles.card}>
            <Text style={styles.label}>Exercício 2 - Operador &&</Text>
            <View>
                {tem_promoçao &&
                    <Text>Promoção ativa! Aproveite os descontos.</Text>}
            </View>
        </View>
        <View style={styles.card}>
            <Text style={styles.label}>Exercício 3 - Condicional com Múltiplas Condições</Text>
            <View>
                <Text>{resultado()}</Text>
            </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", paddingTop: 60 },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#212121",
  },
  card: {
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 8,
  },
  texto: { fontSize: 14, color: "#424242", lineHeight: 22 },
});