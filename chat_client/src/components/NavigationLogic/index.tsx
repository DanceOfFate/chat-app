import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Home, Messages, Search, SignIn, SignUp, SplashScreen as Splash } from "../../views";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white"
  }
};
export const NavigationLogic = () => {
  const [initialized, setInitialized] = useState(true);
  const authenticated = useSelector((state: RootState) => state.auth.authenticated);
  return (
    <NavigationContainer theme={LightTheme}>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator>
        <>
          {!initialized ? (
            <Stack.Screen name="Splash" component={Splash} />
          ) : !authenticated ? (
            <>
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="SignUp" component={SignUp} />
            </>
          ) : (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Search" component={Search} />
              <Stack.Screen name="Messages" component={Messages} />
            </>
          )}
        </>
      </Stack.Navigator>
    </NavigationContainer>
  )
}