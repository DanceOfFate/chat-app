import {SafeAreaView, Text, View} from "react-native";
import React, {useLayoutEffect, useState} from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../types";
import {styles} from "./signup.style";
import {Button, Input} from "../../components";

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, "SignUp">

export const SignUp: React.FC<SignUpScreenProps> = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const [usernameError, setUsernameError] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfirmationError, setPasswordConfirmationError] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    const onSignIn = () => {
        console.log("Pressed");

        if (!username) {
            setUsernameError("Username not provided")
        }

        if (!firstname) {
            setFirstnameError("Firstname not provided")
        }

        if (!lastname) {
            setLastnameError("Lastname not provided")
        }

        if (!password) {
            setPasswordError("Password not provided")
        }

        if (!passwordConfirmation) {
            setPasswordConfirmationError("Password confirmation not provided")
        }

        if (password !== passwordConfirmation) {
            setPasswordError("Passwords don't match");
            setPasswordConfirmationError("Passwords don't match");
        }


    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.signupWrapper}>
                <Text style={styles.header}>
                    Sign Up
                </Text>
                <Input
                    title="Username"
                    value={username}
                    setValue={setUsername}
                    error={usernameError}
                    setError={setUsernameError}
                />
                <Input
                    title="First Name"
                    value={firstname}
                    setValue={setFirstname}
                    error={firstnameError}
                    setError={setFirstnameError}
                />
                <Input
                    title="Last Name"
                    value={lastname}
                    setValue={setLastname}
                    error={lastnameError}
                    setError={setLastnameError}
                />
                <Input
                    title="Password"
                    setValue={setPassword}
                    value={password}
                    error={passwordError}
                    setError={setPasswordError}
                />
                <Input
                    title="Confirm Password"
                    setValue={setPasswordConfirmation}
                    value={passwordConfirmation}
                    error={passwordConfirmationError}
                    setError={setPasswordConfirmationError}
                />
                <Button
                    text="Sign Up"
                    onPress={onSignIn}
                />

                <Text style={styles.textStyle}>
                    Already have an account? {' '}
                    <Text
                        onPress={() => navigation.goBack()}
                        style={{ color: 'blue' }}
                    >
                        Sign in.
                    </Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}