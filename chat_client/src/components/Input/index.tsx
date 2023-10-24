import {Text, TextInput, View} from "react-native";
import React from "react";
import {styles} from "./input.style";

interface IInputProps {
    title: string;
    value: string;
    setValue: (text: string) => void;
    error: string;
    setError: (error: string) => void;
}

export const Input: React.FC<IInputProps> = ({
                                                 title,
                                                 value,
                                                 setValue,
                                                 error,
                                                 setError
                                             }) => {
    return (
        <View>
            <Text style={error ? [styles.titleText, styles.errorText] : styles.titleText}>
                {error ? error : title}
            </Text>
            <TextInput
                style={error ? [styles.textInput, styles.errorInput] : styles.textInput}
                value={value}
                onChangeText={text => {
                    setValue(text);
                    setError("")
                    if (!error) {
                        setError("")
                    }
                }}
            />
        </View>
    )
}