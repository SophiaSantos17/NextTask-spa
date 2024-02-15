import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function CardRecent(){
    return(
        <TouchableOpacity style={styles.cardRecent}>
            <View style={styles.boxTitleDate}>
                <Text style={styles.titleTask}>Ir para academia</Text>
                <Text style={styles.dateTask}>22/01/2023</Text>

            </View>
            <View style={styles.boxPriority}>
                <View style={styles.priorityTask}></View>
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

})