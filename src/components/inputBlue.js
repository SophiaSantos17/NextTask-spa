// Importa a biblioteca React e os componentes StyleSheet e TextInput do React Native
import React from "react";
import { StyleSheet, TextInput } from "react-native";

// Cria e exporta a função do componente InputBlue, que recebe as props placeholder e onChangeText
export default function InputBlue({ placeholder, onChangeText }) {
  return (
    // Retorna o componente TextInput com as props fornecidas
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#0CB7F2"
      // onChangeText é uma função que será chamada sempre que o texto dentro do componente for alterado pelo usuário
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
}

// Cria um objeto de estilos usando a função StyleSheet.create do React Native
const styles = StyleSheet.create({
  // Define os estilos para o componente TextInput
  input: {
    width: 300,
    height: 70,
    color: "#0CB7F2",
    backgroundColor: "#DEF7FF",
    borderRadius: 19,
    borderWidth: 2,
    borderColor: '#0CB7F2',
    paddingHorizontal: 20,
    fontSize: 25,
    marginVertical: 5,
  }
});
