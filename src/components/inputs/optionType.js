import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const OptionType = ({ options, onChange  }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleValueChange = (itemValue, itemIndex) => {
    setSelectedValue(itemValue);
    onChange(itemValue); 
  };

  return (
    <View style={styles.containerOption}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={handleValueChange}
        style={styles.optionGroup}
        value={selectedValue} 
      >
        <Picker.Item label="Tipo da Tarefa" value={null} style={styles.option} />
          {options.map((option, index) => (
            <Picker.Item key={index} label={option.label} value={option.value} style={styles.option} />
          ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  containerOption: {
    borderRadius: 19,
    overflow: 'hidden',
    width: 340,
    height: 70,
    shadowColor: "#2B3031",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:  0.9,
    shadowRadius: 3.05,
    elevation: 7,
    fontSize: 25,
  },
  
  optionGroup:{
    width: "100%",
    height: 70,
    color: "#0CB7F2",
    backgroundColor: "#fff",
    borderRadius: 19,
    paddingHorizontal: 20,
    fontSize: 25,
  },
  option:{
    fontSize: 25,
  },
})

export default OptionType;
