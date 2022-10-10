import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";

export default function App() {
  
  const [userNumber, setUserNumber] = useState()

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber)
  }


  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>
  
  if(userNumber){
    screen = <GameScreen/>
  }

  return (
    <View>
      <LinearGradient colors={["#ddb52f", "#4e0329"]} style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          imageStyle={styles.backgroundImage}
        >
          {screen}
        </ImageBackground>
      </LinearGradient>
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: "#ddb52f",
    // flex: 1,
  },
  backgroundImage: {
    opacity: 0.4,
  },
});
