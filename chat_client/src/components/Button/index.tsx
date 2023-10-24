import {Text, TouchableOpacity} from "react-native";
import React from "react";
import {styles} from "./button.style";

interface IButtonProps {
    text: string;
    onPress: () => void;
}

export const Button: React.FC<IButtonProps> = ({text, onPress}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
        >
            <Text style={styles.textStyle}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}