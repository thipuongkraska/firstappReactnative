import React from "react";
import {View, StyleSheet} from "react-native";

const CardBtn = props => {
    return(
        <View {...props} style= {{...styles.btn, ...props.style}}>{props.children}</View>
    );
}

const styles = StyleSheet.create({
    btn: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-around",
    }
});

export default CardBtn;