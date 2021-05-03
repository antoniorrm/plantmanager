import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import StackRoutes from "./stack.routes";
interface RouteProps {
  prefix: string;
}
const Routes = ({ prefix }: RouteProps) => {
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Welcome: "welcome",
        Confirmation: "confirmation",
      },
    },
  };
  return (
    <NavigationContainer linking={linking}>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default Routes;
