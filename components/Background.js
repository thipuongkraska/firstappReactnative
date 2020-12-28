import React from "react";
import {ImageBackground, StyleSheet} from "react-native";

const Background = props => {
    return(
        <ImageBackground source={require("../assets/sheep.jpg")} style={styles.background}>
            {props.children}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        alignItems: "center",
        width: "100%",
        height: "100%"
    }
})

export default Background;