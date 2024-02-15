import React from "react";
import { Text, StyleSheet} from "react-native";

export default function ErrorInput({text}){
    return(
        <Text style={styles.errorInput}>
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    errorInput: {
        backgroundColor: "#0CB7F2",
        color: "#fff",
        width: 300,
        borderRadius: 6,
        paddingVertical: 2,
        paddingHorizontal: 5,
        fontSize: 15,
    }
})