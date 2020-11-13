import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { colors } from "../utils/index";

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;

export default function WeatherInfo({ currentWeather }) {
  const {
    main: { temp },
    weather: [details],
    name,
  } = currentWeather;
  const { icon, description, main } = details;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Image style={styles.ImageStyle} source={{ uri: iconUrl }} />
      <Text style={styles.textPrimary}>{temp}°</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.textSecondary}>{main}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  ImageStyle: {
    width: 100,
    height: 100,
  },
  description: {
    textTransform: "capitalize",
  },
  textPrimary: {
    fontSize: 40,
    color: PRIMARY_COLOR,
  },
  textSecondary: {
    fontSize: 20,
    fontWeight: "bold",
    color: SECONDARY_COLOR,
    marginTop: 10,
  },
});
