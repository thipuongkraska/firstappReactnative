import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Colors from "../constant/colors";

const NumberContainer = props => {
    return (
        <View style={{...styles.container, ...props.style}}>
        <Text style={{...styles.number, ...props.style}}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: "black",
        borderWidth: 1,
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        backgroundColor: Colors.subTheme,
        borderRadius: 5,

    },
    number: {
        fontSize: 18,
        color: Colors.font,
    }
});


export default NumberContainer;