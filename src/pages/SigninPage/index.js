import React, {useState, useEffect} from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { useForm, Controller  } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { zodResolver } from '@hookform/resolvers/zod';
import {signinSchema} from "../../schemas/signinSchema.js"
import ErrorInput from '../../components/errorInput';
import Button from '../../components/button';
import InputBlue from '../../components/inputBlue';


export default function Signin() {
  const navigate = useNavigation();
  const [showBanner, setShowBanner] = useState(true);
  const { control, handleSubmit, formState: {errors} } = useForm({resolver: zodResolver(signinSchema)});

  function onSubmit(data){
    navigate.navigate("Home"); // redireciona para a tela Home após o cadastro
    console.log(data);
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
          <Controller 
            control={control}
            name='email'
            render={({ field: { onChange, value } }) => (
              <InputBlue
                placeholder="Email"
                onChangeText={(text) => onChange(text)}
              />
          )}/>
          {errors.email && <ErrorInput text={errors.email.message} />}

          <Controller 
            control={control}
            name='password'
            render={({ field: { onChange, value } }) => (
              <InputBlue
                placeholder="Senha"
                onChangeText={(text) => onChange(text)}
              />
          )}/>
          {errors.password  && <ErrorInput text={errors.password.message} />}

        
        <Button title="Entrar" onPress={handleSubmit(onSubmit)} />

          <View style={styles.boxDivision}>
            <View style={styles.line}/>
            <Text style={styles.textDivision}>ou</Text>
            <View style={styles.line}/>
          </View>
          <View style={styles.boxLink}>
            <Text style={styles.text}>É novo por aqui? </Text>
            <TouchableOpacity onPress={() => navigate.navigate("Signup")}>
              <Text style={styles.textLink}>Faça cadastro</Text>
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
    margin: 0,
    padding: 0,
  },
  title:{
    fontSize:28
  },
  boxLogo: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    width: "100%",
    height: "10%",
    top: 60,
    paddingHorizontal: 20,
    marginBottom: 0,
  },
  logo: {
    width: 150,
    height: 50,
  },
  boxBanner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "65%",
    height: "30%",
    // marginBottom: 0,
  },
  banner: {
    marginTop: 20,
    width: "100%",
    height: "100%",
  },
  boxInfos: {
    width: "100%",
    height: "auto",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
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
