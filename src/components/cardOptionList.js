import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Animated, { Easing, useSharedValue, withSpring, withTiming, useAnimatedStyle } from 'react-native-reanimated';

export default function OptionList({ text, date, onDelete, onCheck, onInfo, priority }){
    const expanded = useSharedValue(false);

    const toggleExpanded = () => {
      expanded.value = !expanded.value;
    };
  
    const containerTranslateX = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: expanded.value ? -200 : 0 }],
      };
    });
  
    const optionsOpacity = useAnimatedStyle(() => {
      return {
        opacity: expanded.value ? 1 : 0,
      };
    });

    function activatePriority(){
        let backgroundColor;
    
        if (priority === "Alta"){
            backgroundColor = "#F20C0C";
        }
        else if (priority === "Média"){
            backgroundColor = "#0CB7F2"
        }
        else if (priority === "Baixa"){
            backgroundColor = "#14FF00"
        }
    
        return backgroundColor;
    }
  
    return (
      <Animated.View style={[styles.cardList, containerTranslateX]}>
        <TouchableOpacity style={styles.cardListTouchable} onPress={toggleExpanded}>
          <View style={[styles.boxPriority, { backgroundColor: activatePriority() }]}></View>
          <View style={styles.boxTitleDate}>
            <Text style={styles.titleTask}>{text}</Text>
            <Text style={styles.dateTask}>{date}</Text>
          </View>
        <Image source={require("../assets/icons/seta-para-a-direita.png")} style={styles.icon}/>
        </TouchableOpacity>
  
        <Animated.View style={[optionsOpacity, styles.boxButtonOptions]}>
          <TouchableOpacity onPress={onCheck} style={[styles.buttonOptions, {backgroundColor: "#A5FF9D"}]}>
            <Image source={require("../assets/icons/done.png")} style={styles.icon}/>
            <Text>Feito</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onInfo} style={[styles.buttonOptions, {backgroundColor: "#8FE3FF"}]}>
            <Image source={require("../assets/icons/editar.png")} style={styles.icon}/>
            <Text>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete} style={[styles.buttonOptions, {backgroundColor: "#FF8282"}]}>
            <Image source={require("../assets/icons/excluir.png")} style={styles.icon}/>
            <Text>Excluir</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    );
  };

const styles = StyleSheet.create({
    cardList: {
        width: "100%",
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardListTouchable:{
        width: "95%",
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
        marginLeft: 10,
    },
    boxTitleDate: {
        width: '75%',
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
    icon:{
        width: 40,
        height: 40,
    },
    boxButtonOptions:{
        width: "auto",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center",
        marginLeft: 10,
    },
    buttonOptions:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 55,
        height: 70,
        borderRadius: 15,
        marginHorizontal: 5, 
    },
})


