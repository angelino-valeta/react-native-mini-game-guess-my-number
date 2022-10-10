import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, View, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <View>
      <LinearGradient colors={[Colors.accent500, Colors.primary700]} style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    // flex: 1,
  },
  backgroundImage: {
    opacity: 0.4,
    // backgroundColor: "#ddb52f",
  },
});
