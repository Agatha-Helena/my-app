/* import { View, Text, StyleSheet } from "react-native";

export default function ViewExercicio1() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>View e Flexbox</Text>
      <View style={styles.exemplo}>
        <View style={{flexDirection: "row", gap: 8}}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
      </View>
      <View style={styles.exemplo}>
        <View style={{flexDirection: "column", gap: 8, height: 350, width: 350, justifyContent: "center", alignItems: "center"}}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 18,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  redBox: {
    height: 80,
    width: 80,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    height: 80,
    width: 80,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: 80,
    width: 80,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
}); */

import { View, Text, StyleSheet } from "react-native";

export default function ViewExercicio1() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>View e Flexbox</Text>
      <View style={styles.exemplo}>
        <View style={{flexDirection: "row", gap: 8}}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
      </View>
      <View style={styles.exemplo}>
        <View style={{flexDirection: "column", gap: 8, height: 350, width: 350, justifyContent: "center", alignItems: "center"}}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
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
    backgroundColor: "#f5f5f5",
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
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "#4285f4",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});