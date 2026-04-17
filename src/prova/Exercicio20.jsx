import { View, Text, StyleSheet } from "react-native";

export default function Exercicio20() {
  return (
    <View style={styles.container}>
        <View style={styles.container}>
            <View style={styles.banner}>
                <Text style={styles.textBox}>Promoção</Text>
            </View>
            <View style={{flexDirection: "row", gap: 8}}>
                <View style={styles.cardA}>
                    <Text style={styles.textBox}>Card A</Text>
                </View>
                <View style={styles.cardB}>
                    <Text style={styles.textBox}>Card B</Text>
                </View>
                <View style={styles.cardC}>
                    <Text style={styles.textBox}>Card C</Text>
                </View>
            </View>
            <View style={styles.destaque}>
                <Text style={styles.textBox}>Destaque</Text>
            </View>
            <View style={{flexDirection: "row", gap: 8}}>
                <View style={styles.cat1}>
                    <Text style={styles.textBox}>Cat 1</Text>
                </View>
                <View style={styles.cat2}>
                    <Text style={styles.textBox}>Cat 2</Text>
                </View>
                <View style={styles.cat3}>
                    <Text style={styles.textBox}>Cat 3</Text>
                </View>
            </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    flex: 1,
    backgroundColor: "#ecf0f1",
    gap: 8,
    padding: 8,
    flexDirection: "column"
  },
  banner: {
    height:80,
    borderRadius: 8,
    backgroundColor: "#e74c3c",
    justifyContent: "center",
    alignItems: "center",
  },
  cardA: {
    height: 150,
    borderRadius: 8,
    backgroundColor: "#2ecc71",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  cardB: {
    height: 150,
    borderRadius: 8,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  cardC: {
    height: 150,
    borderRadius: 8,
    backgroundColor: "#f39c12",
    justifyContent: "center",
    alignItems: "center",
    flex: 2
  },
  destaque: {
    borderRadius: 8,
    backgroundColor: "#2c3e50",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  cat1: {
    height: 100,
    borderRadius: 8,
    backgroundColor: "#9b59b6",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  cat2: {
    height: 100,
    borderRadius: 8,
    backgroundColor: "#1abc9c",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  cat3: {
    height: 100,
    borderRadius: 8,
    backgroundColor: "#e67e22",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  textBox: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  }
});