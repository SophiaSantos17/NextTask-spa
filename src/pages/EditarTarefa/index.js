import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputTarefa from '../../components/inputs/inputTarefa';
import InputDate from '../../components/inputs/inputData';
import InputPriority from '../../components/inputs/inputPriority';
import OptionType from '../../components/inputs/optionType';
import Button from '../../components/button';
import { Controller, useForm } from 'react-hook-form';
import { getbyIdTarefas, editTask } from '../../services/tarefas';
import { useAuth } from '../../context/AuthContext';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../../components/header';

export default function EditarTarefa() {
  const [selectedItem, setSelectedItem] = useState(null);
  const { token } = useAuth();
  const { tarefaId } = useRoute().params || {};
  const navigate = useNavigation();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const options = [
    { label: 'Pessoal', value: 'Pessoal' },
    { label: 'Comercial', value: 'Comercial' },
    { label: 'Lazer', value: 'Lazer' },
    { label: 'Saúde', value: 'Saúde' },
    { label: 'Casa', value: 'Casa' },
    { label: 'Outro', value: 'Outro' },
  ];

  useEffect(() => {
    getTarefaDetails();
  }, []);

  async function getTarefaDetails() {
    try {
      const tarefaResponse = await getbyIdTarefas(token, tarefaId);

      const { titulo, data, prioridade, tipo_tarefa, descricao } = tarefaResponse.data;

      // Utiliza o setValue para definir os valores dos campos do formulário
      setValue('titulo', titulo);
      setValue('descricao', descricao);
      setValue('tipo_tarefa', tipo_tarefa);
      setValue('data', new Date(data));
      setValue('prioridade', prioridade);
      setSelectedItem(prioridade);
    } catch (error) {
      console.log(error);
    }
  }

  async function onSubmit(data) {
    try {
      await editTask(tarefaId, data, token);
      navigate.navigate('Home');
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.containerCreate}>
      <Header text='Editar Tarefa' />

      <View style={styles.boxInputs}>
        <Controller
          control={control}
          name='titulo'
          render={({ field: { onChange, value } }) => (
            <InputTarefa
              placeholder='Titulo'
              height={70}
              align='center'
              onChangeText={(text) => onChange(text)}
              value={value}
            />
          )}
        />

        <Controller
          control={control}
          name='data'
          render={({ field: { onChange, value } }) => (
            <InputDate
              onChange={onChange}
              value={value} // Use o valor diretamente do campo do react-hook-form
            />
          )}
        />

        <View>
          <Text style={styles.textPriority}>Prioridade:</Text>
          <View style={styles.boxPriority}>
            <Controller
              control={control}
              name='prioridade'
              render={({ field: { onChange, value } }) => (
                <InputPriority
                  label='Alta'
                  value='Alta'
                  onSelect={() => {
                    onChange('Alta');
                    setSelectedItem('Alta');
                  }}
                  selected={selectedItem === 'Alta'}
                  priority='Alta'
                />
              )}
            />
            <Controller
              control={control}
              name='prioridade'
              render={({ field: { onChange, value } }) => (
                <InputPriority
                  label='Média'
                  value='Média'
                  onSelect={() => {
                    onChange('Média');
                    setSelectedItem('Média');
                  }}
                  selected={selectedItem === 'Média'}
                  priority='Média'
                />
              )}
            />
            <Controller
              control={control}
              name='prioridade'
              render={({ field: { onChange, value } }) => (
                <InputPriority
                  label='Baixa'
                  value='Baixa'
                  onSelect={() => {
                    onChange('Baixa');
                    setSelectedItem('Baixa');
                  }}
                  selected={selectedItem === 'Baixa'}
                  priority='Baixa'
                />
              )}
            />
          </View>
        </View>

        <Controller
          control={control}
          name='tipo_tarefa'
          render={({ field: { onChange, value } }) => (
            <OptionType
              options={options}
              onChange={onChange}
              value={value}
            />
          )}
        />

        <Controller
          control={control}
          name='descricao'
          render={({ field: { onChange, value } }) => (
            <InputTarefa
              placeholder='Descrição'
              height={150}
              align='top'
              onChangeText={(text) => onChange(text)}
              value={value}
            />
          )}
        />

        <Button
          title='Editar'
          width={340}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCreate: {
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  boxInputs: {
    height: '75%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxPriority: {
    flexDirection: 'row',
  },
  textPriority: {
    textAlign: 'left',
    fontSize: 24,
    color: '#0CB7F2',
    fontWeight: '500',
    width: '100%',
    alignItems: 'flex-start',
  },
});
