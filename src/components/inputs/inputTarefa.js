// Importa a biblioteca React e os componentes StyleSheet e TextInput do React Native
import React from "react";
import { StyleSheet, TextInput } from "react-native";

// Cria e exporta a função do componente InputBlue, que recebe as props placeholder e onChangeText
export default function InputTarefa({ placeholder, onChangeText, height, align, value }) {
  return (
    // Retorna o componente TextInput com as props fornecidas
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#0CB7F2"
      // onChangeText é uma função que será chamada sempre que o texto dentro do componente for alterado pelo usuário
      onChangeText={onChangeText}
      style={[styles.input, {height: height, textAlignVertical: align}]}
      multiline
      value={value}
    />
  );
}

// Cria um objeto de estilos usando a função StyleSheet.create do React Native
const styles = StyleSheet.create({
  // Define os estilos para o componente TextInput
  input: {
    width: 340,
    // height: 70,
    color: "#0CB7F2",
    backgroundColor: "#fff",
    borderRadius: 19,
    paddingHorizontal: 20,
    fontSize: 25,
    marginVertical: 5,
    shadowColor: "#2B3031",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:  0.9,
    shadowRadius: 3.05,
    elevation: 7,
    paddingVertical: 10,
  }
});
