import { View, Text, StyleSheet } from "react-native";

export default function ViewExercicio05() {
  return (
    <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.coluna1}>
            <Text style={styles.textBox}>Coluna 1</Text>
          </View>
          <View style={styles.coluna2}>
            <Text style={styles.textBox}>Coluna 2</Text>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    gap: 8
  },
  coluna1: {
    flex: 1,
    backgroundColor: "#0015ff",
    justifyContent: "center",
    alignItems: "center",
  },
  coluna2: {
    flex: 1,
    backgroundColor: "#059500",
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
});