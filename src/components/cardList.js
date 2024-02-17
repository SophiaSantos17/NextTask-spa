import { useNavigation } from "@react-navigation/native";
import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function CardList({priority}){
    const navigate = useNavigation();

    function activatePriority(){
        let backgroundColor;

        if (priority === "Alta"){
            backgroundColor = "#F20C0C";
        }
        else if (priority === "Media"){
            backgroundColor = "#0CB7F2"
        }
        else if (priority === "Baixa"){
            backgroundColor = "#14FF00"
        }

        return backgroundColor;
    }

    return(
        <TouchableOpacity style={styles.cardList} onPress={() => navigate.navigate("InfoTarefa")}> 
            <View style={[styles.boxPriority, {backgroundColor: activatePriority()}]}></View>
            <View style={styles.boxTitleDate}>
                <Text style={styles.titleTask}>Ir para academia</Text>
                <Text style={styles.dateTask}>22/01/2023</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardList: {
        width: "90%",
        height: 70,
        backgroundColor: "white",
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#2B3031",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.9,
        shadowRadius: 3.05,
        elevation: 7,
        marginVertical: 5,
    },
    boxTitleDate: {
        width: '85%',
        paddingHorizontal: 13,
    },
    titleTask: {
        fontSize: 23,
    },
    dateTask: {
        fontSize: 13,
        color: "#B0B0B0",
    },
    boxPriority: {
        width: '15%',
        height: "100%",        
        backgroundColor: "red",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },

})