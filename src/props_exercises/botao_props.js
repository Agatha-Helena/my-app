import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, {useState} from "react";

export default function PerfilAluno (props){

  return (
        <View>
            <TouchableOpacity style={styles.button}>
                <Text>{props.titulo}</Text>
            </TouchableOpacity>
        </View>
     
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  }
});