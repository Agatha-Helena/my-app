import { View, Text, StyleSheet } from "react-native";

export default function ViewExercicio06() {
  return (
    <View style={styles.container}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textBox}>Header</Text>
            </View>
            <View style={{flexDirection: "row", flex: 1, gap: 8}}>
                <View style={styles.sidebar}>
                    <Text style={styles.textBox}>Side Bar</Text>
                </View>
                <View style={styles.areaPrincipal}>
                        <View style={styles.superior}>
                            <View style={styles.cardA}>
                                <Text style={styles.textBox}>Card A</Text>
                            </View>
                            <View style={styles.cardB}>
                                <Text style={styles.textBox}>Card B</Text>
                            </View>
                        </View>
                        <View style={styles.divisor}></View> {/* não consegui fazer aparecer */}
                        <View style={styles.inferior}>
                            <View style={styles.cardC}>
                                <Text style={styles.textBox}>C</Text>
                            </View>
                            <View style={styles.cardD}>
                                <Text style={styles.textBox}>Card D</Text>
                            </View>
                            <View style={styles.cardE}>
                                <Text style={styles.textBox}>E</Text>
                            </View>
                        </View>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.textBox}>Footer</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    padding: 8,
    backgroundColor: "#1a1a1a",
    borderRadius: 8 
  },
  header: {
    height:60,
    backgroundColor: "#2c3e50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8 
  },
  sidebar: {
    width: 80,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8 
  },
  areaPrincipal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  superior: {
    flexDirection: "row",
    flex: 1,
    gap: 8
  },
  cardA: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 8 
  },
  cardB: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 8 
  },
  cardC: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 8 
  },
  cardD: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 8 
  },
  cardE: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
    borderRadius: 8 
  },
  divisor: {
    height: 8,
    backgroundColor: "#34495e",
    gap: 8,
    borderRadius: 8 
  },
  inferior: {
        flexDirection: "row",
        flex: 1,
        gap: 8,
        borderRadius: 8 
  },
  footer: {
    height:50,
    backgroundColor: "#2c3e50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8   
  },
  textBox: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
});