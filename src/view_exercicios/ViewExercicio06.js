import { View, Text, StyleSheet } from "react-native";

export default function ViewExercicio06() {
  return (
    <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.box1}>
            <Text style={styles.textBox}>Header</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.textBox}>Main Content</Text>
          </View>
          <View style={styles.box3}>
            <Text style={styles.textBox}>Footer</Text>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height:60,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  box2: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  box3: {
    height: 50,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
});