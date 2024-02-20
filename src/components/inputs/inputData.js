import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons'; // Certifique-se de ter instalado a biblioteca de ícones

export default function InputDate(){
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setShowPicker(false);
      setSelectedDate(date);
      // Faça algo com a data selecionada, se necessário
    } else {
      setShowPicker(false);
    }
  };

  const handleInputPress = () => {
    setShowPicker(true);
  };

  const formattedDate = selectedDate.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
      <TouchableOpacity onPress={handleInputPress}>
        <View style={styles.input}>
          <Icon name="calendar-outline" size={20} color="#000" style={styles.icon} />
          <Text style={styles.dateText}>{selectedDate ? formattedDate : 'Data'}</Text>
        </View>

        {showPicker && (
        <DateTimePicker
          mode="date"
          display="calendar"
          value={selectedDate}
          onChange={handleDateChange}
          locale="pt-BR"
        />
      )}
      </TouchableOpacity>

      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: "#fff",
    width: 340,
    height: 70,
    paddingHorizontal: 20,
    borderRadius: 25,
    shadowColor: "#2B3031",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.9,
        shadowRadius: 3.05,
        elevation: 7,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    color: "#0CB7F2"
  },
  icon: {
    marginRight: 8,
    color: "#0CB7F2",
    fontSize: 25,
  },
  dateText: {
    flex: 1,
    color: "#0CB7F2",
    fontSize: 25,
  },
});

