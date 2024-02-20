import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import Header from "../../components/header";

export default function InfoTarefa(){

    function getPriorityColor(priority){
        switch (priority) {
          case "Alta":
            return "#F20C0C"; // vermelho
          case "Media":
            return "#0CB7F2"; // azul principal do aplicativo
          case "Baixa":
            return "#2EC221"; //verde
          default:
            return "#000"; // Cor padrão, se necessário
        }
      };

    return(
        <View style={styles.container}>
            <Header text="Informação da Tarefa"/>

            <View style={styles.boxTotalInfo}>

                <View style={[styles.priority, {backgroundColor: getPriorityColor("Media")}]}></View>

                <View  style={[styles.boxInfoTarefa, {borderColor: getPriorityColor("Media")}]}>
                    <Text  style={styles.title}>Fazer bolo de cenoura</Text>
                    <Text  style={styles.subtitle}>Descrição:</Text>
                    <Text style={styles.text}>lakdnlakdjlakdjkd</Text>
                    <View style={styles.boxTipos}>
                        <View style={styles.boxTT}>
                            <Text style={styles.subtitle}>Prioridade</Text>
                            <Text style={styles.text}>asasa</Text>
                        </View>
                        <View style={styles.boxTT}>
                            <Text style={styles.subtitle}>Tipo</Text>
                            <Text style={styles.text}>sasas</Text>
                        </View>
                    </View>
                    <Text style={styles.subtitle}>Data</Text>
                    <Text style={styles.text}>adsadasda</Text>
                </View>
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
    boxTotalInfo:{
        width: "100%",
        alignItems: "center",
    },
    boxInfoTarefa:{
        width: "90%",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        height: 350,
        borderWidth: 2,
        // borderColor: "red", //
        padding: 20,
        margin: 0,
    },
    priority: {
        margin: 0,
        width: "90%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 50,
        // backgroundColor: "red", //
    },
    title: {
        fontSize: 40,
        fontWeight: "600"
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "500",
        marginTop: 12,
    },
    text: {
        fontSize: 17,
        fontWeight: "300",
    },
    boxTipos:{
        flexDirection:"row",
    },
    boxTT:{
        width: "55%"
    },
    image:{
        width: 230,
        height: 90,
        margin: 30,
    },
})