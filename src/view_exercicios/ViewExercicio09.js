import { View, Text, StyleSheet } from "react-native";

export default function ViewExercicio09() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>View e Flexbox</Text>
      <View style={styles.retangulo}>
        <View style={{flexDirection: "row", height: 60, gap: 8}}>
          <View style={[styles.circler, {flex: 1}]}></View>
          <View style={[styles.circley, {flex: 1}]}></View>
          <View style={[styles.circleg, {flex: 1}]}></View>
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
  retangulo: {
    width: "80%",
    padding: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#000000",
    borderRadius: 8,
  },
  circler: {
    width: 80,
    height: 80,
    backgroundColor: "red",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  circley: {
    width: 80,
    height: 80,
    backgroundColor: "yellow",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  circleg: {
    width: 80,
    height: 80,
    backgroundColor: "green",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});