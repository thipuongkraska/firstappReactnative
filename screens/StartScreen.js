import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableWithoutFeedback, Button, Keyboard, Alert} from "react-native";
import CardStyle from "../components/CardStyle";
import CardBtn from "../components/CardBtn";
import Colors from "../constant/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import Btn from "../components/Btn";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import Background from "../components/Background";

const StartScreen = props => {
    const [inputValue, setInputValue] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [number, setNumber] = useState();
    const changeTextHandler = textInput => {
        setInputValue(textInput.replace(/[^0-9]/g, ""));
    }
    const resetHandler = () => {
        setInputValue("");
        setConfirmed(false);
    }
    const confirmHandler = () => {
        const selectedNumber = parseInt(inputValue);
        if ( isNaN(selectedNumber) || selectedNumber <= 0 || selectedNumber > 99) {
            setInputValue("");
            Alert.alert("Invalid number", "the number must be from 1 to 99", [{text: "Ok", style: "destructive", onPress: resetHandler}])
            return;
        } 
        setConfirmed(true);
        setNumber(selectedNumber);
        setInputValue("");
        Keyboard.dismiss();
    }
    let output;
    if (confirmed) {
        // output = (
        // <CardStyle style={styles.numberContain}>
        //     <BodyText style={styles.font}>Your number is</BodyText>
        //     <NumberContainer>{number}</NumberContainer>
        //     <TitleText style={styles.text}>Remember Your Number before Started!</TitleText>
        //     <Btn><Button color={Colors.theme} title="Start" onPress={() => props.onStartGame(number)}/></Btn>
        // </CardStyle>
        // );
        
        output = Alert.alert(
            "Your number is " + number, 
            "remember it before started", 
            [{text:"start", style: "destructive", onPress: () => {props.onStartGame(number)} }] 
            )
    }
    return(
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.appScreen}>
            <TitleText style={styles.title}>Let's Start!</TitleText>
            <CardStyle style={styles.container}>
                <BodyText>Choose a Number</BodyText>
                <Input blurOnSubmit keyboardType="numeric" maxLength={2} style={styles.input} onChangeText={changeTextHandler} value={inputValue}/>
                <CardBtn>
                    <Btn><Button color={Colors.font} title="reset" onPress={resetHandler}/></Btn>
                    <Btn><Button color={Colors.theme} title="confirm" onPress={confirmHandler}/></Btn>
                </CardBtn>
            </CardStyle>
            {output}
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    appScreen: {
        flex: 1,
        alignItems: "center",
        padding: 10,
        backgroundColor: "transparent"
    },
    title: {
        fontSize: 18,
        marginVertical: 10,
    },
    container: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
    },
    input: {
        width: 50,
        textAlign: "center"
    },
    numberContain: {
        backgroundColor: Colors.contrast,
        padding: 10,
        margin: 20,
        alignItems: "center"
    },
    text: {
        marginBottom: 20,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#000"
    },
})

export default StartScreen;