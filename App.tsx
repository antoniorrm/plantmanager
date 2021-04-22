import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Welcome } from "./src/pages/Welcome";
import { Jost_400Regular, Jost_600SemiBold } from "@expo-google-fonts/jost";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Welcome />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
