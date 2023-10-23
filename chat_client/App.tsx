import React, {useCallback, useState} from 'react';
import {registerRootComponent} from "expo";
import {
    Home,
    Messages,
    Search,
    SignIn,
    SignUp,
    SplashScreen as Splash
} from "./src/views";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import {StatusBar} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./src/types";
import './src/core/fontawesome';
import * as SplashScreen from "expo-splash-screen";
import {useFonts} from "expo-font";

const Stack = createNativeStackNavigator<RootStackParamList>()

const LightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "white"
    }
}

function App() {
    const [initialized, setInitialized] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    const [fontsLoaded] = useFonts({
        regular: require("./src/assets/fonts/LeckerliOne-Regular.ttf"),
        italic: require("./src/assets/fonts/LobsterTwo-Italic.ttf"),
        boldItalic: require("./src/assets/fonts/LobsterTwo-BoldItalic.ttf"),
        boldFont: require("./src/assets/fonts/LobsterTwo-BoldItalic.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if (!fontsLoaded) {
        return null;
    }

    return (
        <NavigationContainer theme={LightTheme}>
            <StatusBar barStyle='dark-content' />
            <Stack.Navigator>
                <>
                    {!initialized ? (
                        <Stack.Screen name="Splash" component={Splash}/>
                    ) : !authenticated ? (
                        <>
                            <Stack.Screen name="SignIn" component={SignIn}/>
                            <Stack.Screen name="SignUp" component={SignUp}/>
                        </>
                    ) : (
                        <>
                            <Stack.Screen name="Home" component={Home}/>
                            <Stack.Screen name="Search" component={Search}/>
                            <Stack.Screen name="Messages" component={Messages}/>
                        </>
                    )}
                </>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

registerRootComponent(App)
