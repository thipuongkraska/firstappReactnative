import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";
import StartScreen from "./screens/StartScreen";
import GuessScreen from "./screens/GuessScreen";
import GameOverScreen from "./screens/GameOverScreen";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Background from "./components/Background";
import Footer from "./components/Footer";

const fetchFont = () => {
  return Font.loadAsync({
    "open-sans" : require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold" : require("./assets/fonts/OpenSans-Bold.ttf")
  });
}

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [numOfRound, setNumofRound] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isLoaded) {
    return(
      <AppLoading startAsync={fetchFont} onFinish={() => setIsLoaded(true)} onError={(error) => console.log(error)} />
    );
  }

  const gameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setNumofRound(0);
  }
  const gameOverHandler = number => {
    setNumofRound(number);
  }
  const playAgainHandler = () => {
    setNumofRound(0);
    setUserNumber();
  }
  let content = <StartScreen onStartGame={gameHandler}/>
  if (userNumber && numOfRound <= 0) {
    console.log(userNumber);
    content = <GuessScreen userNumber={userNumber} gameEnd = {gameOverHandler}/>
  } else if (numOfRound > 0) 
  {content = <GameOverScreen round={numOfRound} userNumber={userNumber} onPlayAgain={playAgainHandler} />}
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <Background>
      {content}
      </Background>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
