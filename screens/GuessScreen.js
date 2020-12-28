import React, {useState, useRef, useEffect} from "react";
import {View, Text, StyleSheet, Alert, Image,TouchableOpacity} from "react-native";
import CardStyle from "../components/CardStyle";
import CardBtn from "../components/CardBtn";
import NumberContainer from "../components/NumberContainer";
import Btn from "../components/Btn";
import Colors from "../constant/colors";
import TitleText from "../components/TitleText";
import IconContainer from "../components/IconContainer";
import Footer from "../components/Footer";
import Background from "../components/Background";

const generateNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max= Math.floor(max);
    const random = Math.floor(Math.random()*(max-min)) + min;
    if (random === exclude) {
        return generateNumber(min, max, exclude);
    } else {
        return random;
    }
}

const GuessScreen = props => {
    const {userNumber, gameEnd, playAgainHandler} = props;
    const [guessNumber, setGuessNumber] = useState(generateNumber(1,100, userNumber));
    const [round, setRound] = useState(0);
    const minNum = useRef(1);
    const maxNum = useRef(100);
    useEffect(() =>{
        if (guessNumber === userNumber) {
            gameEnd(round);
        }
    }, [guessNumber, userNumber, gameEnd]);
    const nextGenerate = direction => {
        if ((direction === "lower" && guessNumber < userNumber) || 
        (direction === "higher" && guessNumber > userNumber)) {
            Alert.alert("Don't cheat", "You know it is not right", [{text: "Try again", style: "cancel"}]);
            return;
        }
        if (direction === "lower") {
            maxNum.current = guessNumber;
        } else {
            minNum.current = guessNumber;
        }
        const nextNum = generateNumber(minNum.current, maxNum.current, guessNumber);
        setGuessNumber(nextNum);
        setRound(curRound => curRound + 1);
    }
   
    return(
        <View style={styles.screen}>
        <CardStyle style={styles.main}>
            <TitleText>Computer's Guess</TitleText>
            <NumberContainer>{guessNumber}</NumberContainer>
            <View style={styles.btnContain}>
            <TouchableOpacity onPress={nextGenerate.bind(this, "higher")}>
                <IconContainer><Image style={styles.iconPng} source={require("../assets/plus.jpg")} /></IconContainer>
            </TouchableOpacity>
            <TouchableOpacity onPress={nextGenerate.bind(this, "lower")}>
                <IconContainer><Image style={styles.iconPng} source={require("../assets/minus.jpg")}/></IconContainer>
            </TouchableOpacity>

                {/* <Btn><Button color={Colors.theme} title="Higher" onPress={nextGenerate.bind(this, "higher")} /></Btn>
                <Btn><Button color={Colors.theme} title="Lower" onPress={nextGenerate.bind(this, "lower")} /></Btn> */}
            </View>
        </CardStyle>
        </View>
    )
// }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "transparent",
    },
    main: {
        width: 300,
        marginTop: 50,
        maxWidth: "100%",
        alignItems: "center",
        justifyContent: "space-around",
    },
    finish: {
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.font,
    },
    iconPng: {
        backgroundColor: "white",
        width: 50,
        height: 50,
    },
    btnContain: {
        marginTop: 10,
        width: "60%",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    // background: {
    //     alignItems: "center",
    //     width: "100%",
    //     height: "100%"
    // }
})

export default GuessScreen;