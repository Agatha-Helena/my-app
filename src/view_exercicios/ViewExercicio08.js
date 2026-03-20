import { View, Text, StyleSheet } from "react-native";

export default function ViewExercicio08() {
  return (
    <View style={styles.container}>
            <View style={styles.sidebar}>
                <Text style={styles.textBox}>Sidebar</Text>
            </View>
            <View style={{flexDirection: "column", flex: 1, padding: 10, gap: 10}}>
                <View style={styles.card1}>
                    <Text style={styles.textBox}>Card 1</Text>
                </View>
                <View style={styles.card2}>
                    <Text style={styles.textBox}>Card 2</Text>
                </View>
                <View style={styles.card3}>
                    <Text style={styles.textBox}>Card 3</Text>
                </View>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    flexDirection: "row"
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4285f4",
    marginBottom: 8,
  },
  card1: {
    height: 100,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  card2: {
    height: 100,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  card3: {
    height: 100,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  sidebar: {
    width: 80,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
  },
});