import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Colors from "../constant/colors";

const Footer = props => {
    return(
        <View style={styles.screen}>
            <Text style={styles.font}>@Thi Phuong Kraska</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: "100%",
        height: 50,
        marginBottom: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.theme,
        position: 'absolute',
        bottom: 0,
    },
    font: {
        fontFamily: "open-sans"
    }
})

export default Footer;