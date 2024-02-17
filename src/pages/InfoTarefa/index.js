import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import Header from "../../components/header";

export default function InfoTarefa(){
    return(
        <View style={styles.container}>
            <Header text="Informação da Tarefa"/>
            <View  style={styles.boxInfoTarefa}>
                <View style={styles.priority}></View>
                <Text  style={styles.title}>Fazer bolo de cenoura</Text>
                <Text  style={styles.subtitle}>Descrição:</Text>
                <Text style={styles.text}>lakdnlakdjlakdjkd</Text>
                <View style={styles.boxTipos}>
                    <View>
                        <Text style={styles.subtitle}>Prioridade</Text>
                        <Text style={styles.text}>asasa</Text>
                    </View>
                    <View>
                        <Text style={styles.subtitle}>Tipo</Text>
                        <Text style={styles.text}>sasas</Text>
                    </View>
                </View>
                <Text style={styles.subtitle}>Data</Text>
                <Text style={styles.text}>adsadasda</Text>
            </View>
            <Image source={require("../../assets/logo.png")} style={styles.image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        justifyContent: "space-between",
        alignItems: "center",
    },
    boxInfoTarefa:{
        width: "90%",

    },
    title: {},
    subtitle: {},
    text: {},
    boxTipos:{
        flexDirection:"row",
    },
    image:{
        width: 230,
        height: 90,
        margin: 30,
    },
})