import { View, Text, StyleSheet } from "react-native";

export default function ViewExercicio04() {
  return (
    <View style={styles.container}>
        <View style={{flexDirection: "column", gap: 8, height: 350, width: 350, justifyContent: "center", alignItems: "center"}}>
          <View style={styles.box1}>
            <Text style={styles.textBox}>Centro</Text>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
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
  box1: {
    width: 120,
    height: 120,
    backgroundColor: "#ffaa00",
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
});