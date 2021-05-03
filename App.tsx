import React from "react";
import { Jost_400Regular, Jost_600SemiBold } from "@expo-google-fonts/jost";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Routes from "./src/routes";

import * as Linking from "expo-linking";

const prefix = Linking.createURL("/");

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Routes prefix={prefix} />;
}
