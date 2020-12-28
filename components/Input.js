import React from "react";
import {TextInput, StyleSheet} from "react-native";

const Input = props => {
    return <TextInput {...props} style={{...styles.input, ...props.style}} />
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginVertical: 20,
    }
})

export default Input;