// Importa a biblioteca React e os componentes StyleSheet e TextInput do React Native
import React from "react";
import { StyleSheet, TextInput } from "react-native";

// Cria e exporta a função do componente InputBlue, que recebe as props placeholder e onChangeText
export default function InputBlue({ placeholder, onChangeText, type }) {
  let keyboardType = 'default';
  let secureTextEntry = false;
  let multiline = false;

  // Configurações com base no tipo
  switch (type) {
    case 'email':
      keyboardType = 'email-address';
      break;
    case 'password':
      secureTextEntry = true;
      break;
    case 'multiline':
      multiline = true;
      break;
    
    case 'text':
    default:
      keyboardType = 'default';
      break;
  }

  return (
    // Retorna o componente TextInput com as props fornecidas
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#0CB7F2"
      // onChangeText é uma função que será chamada sempre que o texto dentro do componente for alterado pelo usuário
      onChangeText={onChangeText}
      style={styles.input}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
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
