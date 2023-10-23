import React, { useCallback } from 'react';
import { registerRootComponent } from "expo";
import {SplashScreen} from "./src/views";
import * as Splash from "expo-splash-screen"
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";




function App() {
  const [fontsLoaded] = useFonts({
    leckerliRegular: require("./src/assets/fonts/LeckerliOne-Regular.ttf")
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await Splash.hideAsync();
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
      return null;
  }



  return (
    <SplashScreen />
  );
}

export default App;

registerRootComponent(App)
