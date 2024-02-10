import React, { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View, Image, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Start = () => {

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true;
        })
    }, [])
    const navigate =  useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.boxLogo}>
                <Image source={require('../../assets/logo.png')} style={styles.logo}/>
            </View>

            <Image source={require('../../assets/banner.png')} style={styles.banner}/>

            <Text style={styles.title}>Planeje, {"\n"}Execute, {"\n"}Realize!</Text>

            <Pressable style={styles.buttonSiginup} onPress={() => {navigate.navigate("Signup")}}>
                {/* texto do botão */}
                <Text style={styles.textSignup}>Começe Agora</Text>
            </Pressable>

            <Pressable style={styles.buttonSiginin} onPress={() => {navigate.navigate("Signin")}}>
                {/* texto do botão */}
                <Text style={styles.textSignin}>Entrar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BCEEFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxLogo: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        width: "100%",
        height: 70,
        top: -10,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    logo: {
        width: 160,
        height: 80,
    },
    banner: {
        marginBottom: 20,
        width: 300,
        height: 300,
    },
    title:{
        marginBottom: 20,
        fontSize: 45,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonSiginup: {
        width: 190,
        height: 45,
        backgroundColor: "#0CB7F2",
        borderRadius: 19,
        borderWidth: 1,
        borderColor: '#0CB7F2',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    textSignup: {
        fontWeight: "bold",
        color: "white",
        fontSize: 20,
    },
    buttonSiginin: {
        width: 190,
        height: 45,
        backgroundColor: "white",
        borderRadius: 19,
        borderWidth: 2,
        borderColor: '#0CB7F2',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    textSignin: {
        fontWeight: "bold",
        color: "#0CB7F2",
        fontSize: 20,
    },
});


export default Start;