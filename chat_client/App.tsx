import React, { useCallback, useState } from "react";
import { registerRootComponent } from "expo";
import "./src/core/fontawesome";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Provider, useSelector } from "react-redux";
import { store } from "./src/store";
import { NavigationLogic } from "./src/components/NavigationLogic";





function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./src/assets/fonts/LeckerliOne-Regular.ttf"),
    italic: require("./src/assets/fonts/LobsterTwo-Italic.ttf"),
    boldItalic: require("./src/assets/fonts/LobsterTwo-BoldItalic.ttf"),
    boldFont: require("./src/assets/fonts/LobsterTwo-BoldItalic.ttf")
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationLogic />
    </Provider>
  );
}

export default App;

registerRootComponent(App);
