import React, { useState } from 'react';
import Header from "../../components/header";
import { View, Text, TextInput, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';

export default function NovaTarefa(){
    const [nomeTarefa, setNomeTarefa] = useState('');
  const [dataTarefa, setDataTarefa] = useState('');
  const [prioridade, setPrioridade] = useState('');
  const [tipoTarefa, setTipoTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');

  const handleAdicionarTarefa = () => {
    // Implemente a lógica para adicionar a tarefa aqui
    console.log('Tarefa adicionada:', {
      nomeTarefa,
      dataTarefa,
      prioridade,
      tipoTarefa,
      descricaoTarefa,
    });
  };

  return (
    <View>
        <Header text="Criar nova tarefa"/>
      <Text>Nome da Tarefa:</Text>
      <TextInput
        placeholder="Digite o nome da tarefa"
        value={nomeTarefa}
        onChangeText={(text) => setNomeTarefa(text)}
      />

      <Text>Data da Tarefa:</Text>
      <DateTimePicker mode="time" />

      <Text>Prioridade:</Text>
      <Picker
        selectedValue={prioridade}
        onValueChange={(itemValue) => setPrioridade(itemValue)}
      >
        <Picker.Item label="Alta" value="Alta" />
        <Picker.Item label="Média" value="Media" />
        <Picker.Item label="Baixa" value="Baixa" />
      </Picker>

      <Text>Tipo de Tarefa:</Text>
      <RNPickerSelect
        onValueChange={(value) => setTipoTarefa(value)}
        items={[
          { label: 'Lazer', value: 'lazer' },
          { label: 'Pessoal', value: 'pessoal' },
          { label: 'Comercial', value: 'comercial' },
          { label: 'Rotina', value: 'rotina' },
          { label: 'Financeira', value: 'financeira' },
          { label: 'Outros', value: 'outros' },
          { label: 'Saúde', value: 'saude' },
          { label: 'Aprendizado', value: 'aprendizado' },
          { label: 'Planejamento', value: 'planejamento' },
        ]}
      />

      <Text>Descrição da Tarefa:</Text>
      <TextInput
        placeholder="Digite a descrição da tarefa"
        value={descricaoTarefa}
        onChangeText={(text) => setDescricaoTarefa(text)}
      />

      <Button title="Adicionar Tarefa" onPress={handleAdicionarTarefa} />
    </View>
  );
}