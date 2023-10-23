import React, {useState} from 'react';
import {registerRootComponent} from "expo";
import {
    Home,
    Messages,
    Search,
    SignIn,
    SignUp,
    SplashScreen as Splash
} from "./src/views";
import {NavigationContainer} from "@react-navigation/native";
import {StatusBar} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./src/types";
import './src/core/fontawesome';

const Stack = createNativeStackNavigator<RootStackParamList>()


function App() {
    const [initialized, setInitialized] = useState(true);
    const [authenticated, setAuthenticated] = useState(true)
    return (
        <NavigationContainer>
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
