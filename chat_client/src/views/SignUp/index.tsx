import {SafeAreaView, Text, View} from "react-native";
import React, {useLayoutEffect} from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../types";
import {styles} from "./signup.style";
import {Button, Input} from "../../components";

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, "SignUp">

export const SignUp: React.FC<SignUpScreenProps> = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.signupWrapper}>
                <Text style={styles.header}>
                    Sign Up
                </Text>
                <Input title="Username" />
                <Input title="First Name" />
                <Input title="Last Name" />
                <Input title="Password" />
                <Input title="Confirm Password" />
                <Button text="Sign Up" />

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