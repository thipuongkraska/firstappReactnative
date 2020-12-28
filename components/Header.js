import React from "react";
import {View, Text, StyleSheet} from "react-native";

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        paddingTop:36,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ff9b93"
    },
    headerTitle: {
        color: "#41584b",
        fontSize:20,
        fontFamily: "open-sans-bold",
    }
})

export default Header;

