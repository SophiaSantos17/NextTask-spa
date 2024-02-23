import React, {useState, useEffect} from 'react';

// chamando os componentes criados
import InputBlue from '../../components/inputBlue';
import Button from '../../components/button';
import ErrorInput from '../../components/errorInput';

// importando as funções que serão usados
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller  } from 'react-hook-form';
import { Image, StyleSheet, View, Text, TouchableOpacity , KeyboardAvoidingView, Platform, Keyboard} from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '../../schemas/signupSchema';
import { signup } from '../../services/user';

//
export default function Signup() {
  const [showBanner, setShowBanner] = useState(true);

  
  const [apiErrors, setApiErrors] = useState(""); // variavel para receber os erros da api

  const navigate = useNavigation(); // cria uma variavel que recebe a função useNavigate que é usada para navejar entre telas

  const { control, handleSubmit, formState: {errors} } = useForm({resolver: zodResolver(signupSchema)}); 
  // zodResolver é onde esta sendo chamado os tratamento de erro
  // variaveis que vão inicializar o useForm para gerenciar o estado do formulário
  
  async function onSubmit(data){ // função que será chamada ao clicar no botão de enviar os dados
    try{
      
      await signup(data);
      navigate.navigate("Signin"); // redireciona para a tela Home após o cadastro
      // return(<ErrorInput text="Faça o Login"/>)

    }catch(error){
      setApiErrors("Erro ao fazer cadastro. Por favor, tente novamente.");
    }

  }

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setShowBanner(false)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setShowBanner(true)
    );

    // Remove os listeners quando o componente é desmontado
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.boxLogo}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>

      {showBanner && (
          <View style={styles.boxBanner}>
            <Image source={require('../../assets/banner.png')} style={styles.banner} />
          </View>
        )}

      <View style={styles.boxInfos}>
      {apiErrors && <ErrorInput text={apiErrors} />}
        <Controller 
          control={control}
          name='name'
          render={({ field: { onChange, value } }) => (
            <InputBlue
              style={styles.input}
              placeholder="Primeiro Nome"
              onChangeText={(text) => onChange(text)}
              type="text"
            />
        )}/>
        {errors.name && <ErrorInput text={errors.name.message}/>}

        <Controller 
          control={control}
          name='email'
          render={({ field: { onChange, value } }) => (
            <InputBlue
              style={styles.input}
              placeholder="Email"
              onChangeText={(text) => onChange(text)}
              type="email"
            />
        )}/>
        {errors.email && <ErrorInput text={errors.email.message}/>}

        <Controller 
          control={control}
          name='password'
          render={({ field: { onChange, value } }) => (
            <InputBlue
              style={styles.input}
              placeholder="Senha"
              onChangeText={(text) => onChange(text)}
              type="password"
            />
        )}/>
        {errors.password && <ErrorInput text={errors.password.message}/>}
      
      <Button title="Criar" onPress={handleSubmit(onSubmit)} width={300} />

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
    </KeyboardAvoidingView>
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
    height: "auto",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'spa',
    paddingVertical: 20,
    alignItems: 'center',
  },
  boxDivision: {
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: -5,
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
    height: 20,
  },
  text: {
    fontSize: 20,
  },
  textLink: {
    fontSize: 20,
    color: "#0CB7F2",
  },
});
