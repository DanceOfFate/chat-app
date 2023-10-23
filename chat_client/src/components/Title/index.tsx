import React from "react";
import {Text} from "react-native";

interface ITitleProps {
    text: string,
    color: string
}
export const Title: React.FC<ITitleProps> = ({ text, color }) => {
    return (
        <Text
            style={{
                color: color,
                textAlign: 'center',
                fontSize: 48,
                fontFamily: "regular",
                marginBottom: 30
            }}
        >
            { text }
        </Text>
    )
}