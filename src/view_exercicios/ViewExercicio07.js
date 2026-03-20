import { View, Text, StyleSheet } from "react-native";

export default function ViewExercicio07() {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.verde}></View>
          <View style={styles.vermelho}></View>
        </View>
        <View style={styles.row}>
          <View style={styles.azul}></View>
          <View style={styles.laranja}></View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 20
  },
  row: {
    flex: 1,
    flexDirection: "row",
    gap: 10
  },
  verde: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  vermelho: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  azul: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  laranja: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  }
});