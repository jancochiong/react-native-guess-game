import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from '../constants/colors'
import MainButtom from '../components/MainButton'

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          // source={{uri: 'https://cdn.sidlee.com/-/media/sidlee/work/the-north-face/summit-series/thumbnail_tnf_summit.jpg?mw=1420&hash=2AD352B1B82A3F71A53DAC2E8F2836473D9481D4'}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the
          number <Text style={styles.highlight}>{props.userNumber}</Text>.
        </BodyText>
      </View>
      <MainButtom onPress={props.onRestart}> NEW GAME </MainButtom>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20
  }
});

export default GameOverScreen;
