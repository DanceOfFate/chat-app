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
import {styles} from "./signup.style";
import {Button, Input} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { signInUserWithCredentials, signUpUser } from "../../store/auth/actions";
import { AppDispatch, RootState } from "../../store";
import utils from "../../core/utils";

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, "SignUp">

export const SignUp: React.FC<SignUpScreenProps> = ({navigation}) => {
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
    const user = useSelector<RootState>(state => state.auth.user);

    const dispatch = useDispatch<AppDispatch>()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    const onSignUp = (
                                username: string,
                                firstname: string,
                                lastname: string,
                                password: string
    ) => {
        console.log("Pressed");

        const data = {
            username,
            firstname,
            lastname,
            password
        }

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
        dispatch(signUpUser(data)).then(response => {
            dispatch(signInUserWithCredentials({username, password}));
            console.log(response);
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                            hideText
                        />
                        <Input
                            title="Confirm Password"
                            setValue={setPasswordConfirmation}
                            value={passwordConfirmation}
                            error={passwordConfirmationError}
                            setError={setPasswordConfirmationError}
                            hideText
                        />
                        <Button
                            text="Sign Up"
                            onPress={() => onSignUp(username, firstname, lastname, password)}
                        />

                        <Text style={styles.textStyle}>
                            Already have an account? {' '}
                            <Text
                                onPress={() => navigation.goBack()}
                                style={{color: 'blue'}}
                            >
                                Sign in.
                            </Text>
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}