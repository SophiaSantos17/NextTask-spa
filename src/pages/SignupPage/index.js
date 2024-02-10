import React from 'react';
// chamando os componentes ja pronto
import InputBlue from '../../components/inputBlue';
import Button from '../../components/button';

// importando as funções que serão usados
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller  } from 'react-hook-form';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Signup() {
  const navigate = useNavigation(); // cria uma variavel que recebe a função useNavigate que é usada para navejar entre telas
  const { control, handleSubmit, formState: {errors} } = useForm({}); // variaveis que vão inicializar o useForm para gerenciar o estado do formulário

  function onSubmit(data){ // função que será chamada ao clicar no botão de enviar os dados
    console.log(data);
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.boxLogo}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.boxBanner}>
        <Image source={require('../../assets/banner.png')} style={styles.banner} />
      </View>

      <View style={styles.boxInfos}>
        <Controller 
          control={control}
          name='nome'
          render={({ field: { onChange, value } }) => (
            <InputBlue
              style={styles.input}
              placeholder="Nome"
              onChangeText={(text) => onChange(text)}
            />
        )}/>
        <Controller 
          control={control}
          name='email'
          render={({ field: { onChange, value } }) => (
            <InputBlue
              style={styles.input}
              placeholder="Email"
              onChangeText={(text) => onChange(text)}
            />
        )}/>

        <Controller 
          control={control}
          name='senha'
          render={({ field: { onChange, value } }) => (
            <InputBlue
              style={styles.input}
              placeholder="Senha"
              onChangeText={(text) => onChange(text)}
            />
        )}/>


      
      <Button title="Entrar" onPress={handleSubmit(onSubmit)} />

        <View style={styles.boxDivision}>
          <View style={styles.line}/>
          <Text style={styles.textDivision}>ou</Text>
          <View style={styles.line}/>
        </View>
        <View style={styles.boxLink}>
          <Text style={styles.text}>Já tem login? </Text>
          <TouchableOpacity onPress={() => navigate.navigate("Signin")}>
            <Text style={styles.textLink}>Faça login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BCEEFF',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  title:{
    fontSize:28
  },
  boxLogo: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    width: "100%",
    height: "8%",
    top: 60,
    paddingHorizontal: 20,
    marginBottom: 0,
  },
  logo: {
    width: 120,
    height: 50,
  },
  boxBanner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "30%",
    marginBottom: 0,
  },
  banner: {
    marginTop: 20,
    width: 190,
    height: 190,
  },
  boxInfos: {
    width: "100%",
    height: "57%",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxDivision: {
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  line: {
    width: "35%",
    height: 2,
    backgroundColor: "#0CB7F2",
    marginHorizontal: 10,
  },
  textDivision: {
    color: "#0CB7F2",
    fontSize: 35,
    // fontWeight: "normal",
  },
  boxLink: {
    display: 'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height: 30,
  },
  text: {
    fontSize: 20,
  },
  textLink: {
    fontSize: 20,
    color: "#0CB7F2",
  },
});
