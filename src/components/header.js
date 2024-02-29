import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

export  default function Header({text}) {
    const navigate = useNavigation();


    return(
        <View style={styles.header}>
            <View style={styles.boxBtnBack}>
                <TouchableOpacity style={styles.btnBack} onPress={() => navigate.goBack()} >
                    <Image source={require("../assets/icons/icon-arrow-back.png")} style={styles.iconBack}/>
                </TouchableOpacity>
            </View>

            <View style={styles.boxTitle}>
                <Text style={styles.titleHeader}>{text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 100,
        borderBottomColor: "#53D4FF",
        borderBottomWidth: 2,
        flexDirection: "row",
    },  
    boxBtnBack: {
        height: "100%",
        // paddingTop: 50
        justifyContent: "center",
    },
    btnBack:{
        width: 30,
        height: 30,
    },
    iconBack: {
        width: "100%",
        height: "100%"
    },
    boxTitle: {
        width: "80%",
        justifyContent: "center",
        alignContent: "center",

    },
    titleHeader: {
        fontSize: 30,
        fontWeight: "600",
        textAlign: "center"
    },

})