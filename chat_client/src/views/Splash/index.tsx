import {
    Animated,
    SafeAreaView,
    StatusBar,
    View
} from "react-native";
import {Title} from "../../components";
import React, {useEffect, useLayoutEffect} from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../types";

type SplashScreenProps = NativeStackScreenProps<RootStackParamList, "Splash">

export const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    const translateY = new Animated.Value(0);
    const duration = 800;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(translateY, {
                    toValue: 20,
                    duration: duration,
                    useNativeDriver: true
                }),
                Animated.timing(translateY, {
                    toValue: 0,
                    duration: duration,
                    useNativeDriver: true
                })
            ])).start()
    }, [])
    return (
        <SafeAreaView
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: 'center',
                backgroundColor: 'black'
            }}
        >
            <StatusBar barStyle="light-content"/>
            <Animated.View style={{transform: [{translateY}]}}>
                <Title text="RealtimeChat" color="white"/>
            </Animated.View>
        </SafeAreaView>
    )
}