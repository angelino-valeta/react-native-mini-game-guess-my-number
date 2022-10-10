import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <View>
      <LinearGradient colors={["#ddb52f", "#4e0329"]} style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          imageStyle={styles.backgroundImage}
        >
          <StartGameScreen />
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
