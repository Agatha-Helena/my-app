import { View, Text, StyleSheet } from "react-native";

export default function ViewExercicio03() {
  return (
    <View style={styles.container}>
        <View style={{flexDirection: "row", gap: 6, height: 550, width: 410, justifyContent: "space-between", alignItems: "center"}}>
          <View style={styles.box1}>
            <Text style={styles.textBox}>R</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.textBox}>G</Text>
          </View>
          <View style={styles.box3}>
            <Text style={styles.textBox}>B</Text>
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
    width: 70,
    height: 70,
    backgroundColor: "#ff0000",
    justifyContent: "center",
    alignItems: "center",
  },
  box2: {
    width: 70,
    height: 70,
    backgroundColor: "#0000ff",
    justifyContent: "center",
    alignItems: "center",
  },
  box3: {
    width: 70,
    height: 70,
    backgroundColor: "#1b9f00",
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
});