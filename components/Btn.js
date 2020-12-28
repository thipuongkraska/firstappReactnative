import React from "react";
import {View, StyleSheet} from "react-native";

const Btn = props => {
    return(
        <View {...props} style= {{...styles.btn, ...props.style}}>{props.children}</View>
    );
}

const styles = StyleSheet.create({
    btn: {
        width: 90,
    }
});

export default Btn;