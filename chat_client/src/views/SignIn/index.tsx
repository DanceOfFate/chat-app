import {SafeAreaView, Text, View} from "react-native";
import React, {useLayoutEffect} from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../types";
import {styles} from "./signin.style";
import {Button, Input, Title} from "../../components";

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, "SignIn">

export const SignIn: React.FC<SignInScreenProps> = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.signinWrapper}>
            <Title text="RealtimeChat" color="#202020" />
            <Input title="Username" />
            <Input title="password" />
            <Button text="Sign In" />

            <Text style={styles.textStyle}>
                Don't have an account?{' '}
                <Text
                    style={{ color: "blue" }}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    Sign Up
                </Text>
            </Text>
        </View>
      </SafeAreaView>
  )
}