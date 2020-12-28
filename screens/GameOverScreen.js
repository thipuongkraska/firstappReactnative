import React from "react";
import {View, Text, StyleSheet, Button, Image} from "react-native";
import Colors from "../constant/colors";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import CardStyle from "../components/CardStyle";

const GameOverScreen = props => {
    const {onPlayAgain, round, userNumber} = props;
    return (
        <View style={styles.screen}>
        <CardStyle style= {styles.view}>
            <TitleText style={styles.title}>Game Over!</TitleText>
            <Image source={require("../assets/cup.png")} style={styles.img} resizeMode="contain"/>
            <BodyText>Number of Round: {round}</BodyText>
            <BodyText style={styles.textBottom}>User's Number: {userNumber}</BodyText>
            <Button color={Colors.font} title="Play Again" onPress={onPlayAgain} />
        </CardStyle>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: "100%",
        marginTop: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    title: {
        fontSize: 30,
        color: Colors.font,
        paddingVertical: 15,
    },
    textBottom: {
        marginBottom: 15,
    },
    view: {
        width: "80%",
        alignItems: "center",
        marginTop: 0,
        padding: 25,
    },
    img: {
        height: 50,
        marginBottom: 10,
    }
})

export default GameOverScreen;