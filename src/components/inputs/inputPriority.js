// Importando as bibliotecas necessárias do React Native
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Definindo o componente InputPriority
const InputPriority = ({ label, value, onSelect, selected, priority }) => {
  const handlePress = () => {
    onSelect(value);
  };

  const containerStyle = {
    backgroundColor: selected ? getPriorityColor(priority) : "#fff",
    borderColor: getPriorityColor(priority),
  };

  const textStyle = {
    color: selected ? "#fff" : getPriorityColor(priority),
    ...styles.label,
  };

  return (
    <TouchableOpacity onPress={handlePress} disabled={selected}>
      <View style={[styles.container, containerStyle]}>
        <Text style={textStyle}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Função auxiliar para obter a cor com base na prioridade
const getPriorityColor = (priority) => {
  switch (priority) {
    case "Alta":
      return "#F20C0C";
    case "Média":
      return "#0CB7F2";
    case "Baixa":
      return "#2EC221";
    default:
      return "#000"; // Cor padrão, se necessário
  }
};

// Estilos para o componente
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    padding: 10,
    margin: 5,
    borderRadius: 30,
    width: 100,
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default InputPriority;
