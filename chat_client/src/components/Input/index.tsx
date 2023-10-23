import {Text, TextInput, View} from "react-native";
import React from "react";
import {styles} from "./input.style";

interface IInputProps {
    title: string;
}

export const Input: React.FC<IInputProps> = ({ title }) => {
  return (
      <View>
          <Text style={styles.titleText}>{title}</Text>
          <TextInput style={styles.textInput} />
      </View>
  )
}