import React from "react";
import {Text} from "react-native";

interface ITitleProps {
    text: string
}
export const Title: React.FC<ITitleProps> = ({ text }) => {
    return (
        <Text
            style={{
                color: "white",
                textAlign: 'center',
                fontSize: 48,
            }}
        >
            { text }
        </Text>
    )
}