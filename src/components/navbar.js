import React from "react";

import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Navbar(){
    const navigate = useNavigation();

    return(
        <View  style={styles.navbar}>
            <TouchableOpacity style={styles.btnHome }  onPress={() => navigate.navigate("Home")} >
                <Image source={require("../assets/icons/icon-home.png")} style={styles.iconHome } />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnAdd } onPress={() => navigate.navigate("NovaTarefa")}>
                <Image source={require("../assets/icons/icon-add.png")} style={styles.iconAdd } />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLists } onPress={() => navigate.navigate("Listas")}>
                <Image source={require("../assets/icons/icon-checklist.png")} style={styles.iconLists } />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        width: 220,
        backgroundColor: "#0CB7F2",
        display: "flex",
        flexDirection: "row",
        height: 55,
        justifyContent: "space-around",
        gap: 5,
        alignItems: "center",
        paddingHorizontal: 20,
        borderRadius: 35,
        bottom: 0,

    },
    btnHome:{
        width: 40,
        height: 40,
    },
    iconHome:{
        width: "100%",
        height: "100%",
    },
    btnAdd:{
        width: 50,
        height: 50,
    },
    iconAdd:{
        width: "100%",
        height: "100%",
    },
    btnLists:{
        width: 40,
        height: 40,
    },
    iconLists:{
        width: "100%",
        height: "100%",
    },
})