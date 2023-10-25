import {
    Keyboard, KeyboardAvoidingView,
    SafeAreaView,
    Text,
    TouchableWithoutFeedback,
    View
} from "react-native";
import React, {useLayoutEffect, useState} from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../types";
import {styles} from "./signin.style";
import {Button, Input, Title} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { signInUserWithCredentials } from "../../store/auth/actions";
import { AppDispatch, RootState } from "../../store";

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, "SignIn">

export const SignIn: React.FC<SignInScreenProps> = ({navigation}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const user = useSelector<RootState>(state => state.auth.user);

    const dispatch = useDispatch<AppDispatch>();


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    const onSignIn = async (username: string, password: string) => {
        const data = {
            username,
            password
        }

        const failUsername = !username;
        const failPassword = !password;
        if (failUsername) {
            setUsernameError("Username not provided")
        }

        if (failPassword) {
            setPasswordError("Password not provided")
        }

        const response = await dispatch(signInUserWithCredentials(data))

    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior="height"
                style={{ flex: 1 }}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.signinWrapper}>
                        <Title text="RealtimeChat" color="#202020"/>
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
                            hideText
                        />
                        <Button text="Sign In" onPress={() => onSignIn(username, password)}/>

                        <Text style={styles.textStyle}>
                            Don't have an account?{' '}
                            <Text
                                style={{color: "blue"}}
                                onPress={() => navigation.navigate('SignUp')}
                            >
                                Sign Up
                            </Text>
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}