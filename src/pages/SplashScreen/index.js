import React from "react";
import LottieView from 'lottie-react-native';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const Splash = () => {
    const navigate = useNavigation();

    return(
        <LottieView 
            source={require('../../assets/splashAnimation/splash.json')}
            autoPlay
            loop={false}
            onAnimationFinish={() => navigate.navigate("Start")}
        />
    );
}

const styles = StyleSheet.create({
    splash: {
        backgroundColor: "white",
        width: '100%',
        height: '100%'
    }
})


export default Splash;