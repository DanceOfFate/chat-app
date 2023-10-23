import {Text, TouchableOpacity} from "react-native";
import React from "react";
import {styles} from "./button.style";

interface IButtonProps {
    text: string
}
export const Button: React.FC<IButtonProps> = ({ text }) => {
  return(
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textStyle}>
            { text }
        </Text>
      </TouchableOpacity>
  )
}