import {SafeAreaView, Text, View} from "react-native";
import React, {useLayoutEffect, useState} from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../types";
import {styles} from "./signin.style";
import {Button, Input, Title} from "../../components";

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, "SignIn">

export const SignIn: React.FC<SignInScreenProps> = ({navigation}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");



    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    const onSignIn = () => {
        console.log("Pressed!", username, password);

        const failUsername = !username;
        const failPassword = !password;
        if (failUsername) {
            setUsernameError("Username not provided")
        }

        if (failPassword) {
            setPasswordError("Password not provided")
        }
    }

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.signinWrapper}>
            <Title text="RealtimeChat" color="#202020" />
            <Input
                title="Username"
                value={username}
                error={usernameError}
                setValue={setUsername}
                setError={setUsernameError}
            />
            <Input
                title="password"
                value={password}
                error={passwordError}
                setValue={setPassword}
                setError={setPasswordError}
            />
            <Button text="Sign In" onPress={onSignIn} />

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