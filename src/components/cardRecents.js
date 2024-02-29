import React from "react";

import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function CardRecent({priority, text, date, onPress}){
    const navigate = useNavigation();

    function activePriority(){
        let backgroundColor;

        if (priority === "Alta"){
            backgroundColor = "#F20C0C";
        }
        else if (priority === "Média"){
            backgroundColor = "#0CB7F2";
        }
        else if (priority === "Baixa"){
            backgroundColor = "#14FF00";
        }

        return backgroundColor;
    }

    return(
        <TouchableOpacity style={styles.cardRecent} onPress={onPress}>
            <View style={styles.boxTitleDate}>
                <Text style={styles.titleTask} numberOfLines={1} ellipsizeMode="tail">{text}</Text>
                <Text style={styles.dateTask}>{date}</Text>

            </View>
            <View style={styles.boxPriority}>
                <View style={[styles.priorityTask, {backgroundColor: activePriority()}]}></View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardRecent: {
        width: 200,
        height: 70,
        backgroundColor: "white",
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 10,
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
        marginHorizontal: 5,
    },
    boxTitleDate: {
        width: '85%',
    },
    titleTask: {
        fontSize: 20,
    },
    dateTask: {
        fontSize: 10,
        color: "#B0B0B0",
    },
    boxPriority: {
        width: '15%',
        display: "flex",
        alignItems: "flex-end",
    },
    priorityTask: {
        width: 2,
        height: "70%",
        backgroundColor: "red",
    },

});