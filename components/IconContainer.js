import React from "react";
import {View, StyleSheet} from "react-native";

const IconContainer = props => {
    return(
        <View {...props} style={{...styles.icon, ...props.style}}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: "hidden",
    }
})

export default IconContainer;