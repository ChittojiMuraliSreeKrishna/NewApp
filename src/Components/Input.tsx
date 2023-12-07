import { View, Text, TextInput, TextInputProps } from "react-native";
import React from "react";

interface InputProps extends TextInputProps {
  secureTextEntry?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  const { onChangeText, onBlur, value } = props;
  return (
    <View>
      <TextInput
        autoCapitalize="none"
        style={[inputField]}
        secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
      />
    </View>
  );
};

export const inputField: any = {
  justifyContent: "center",
  marginLeft: 20,
  marginRight: 20,
  marginTop: 5,
  marginBottom: 5,
  backgroundColor: "#ddd",
  paddingLeft: 15,
  width: 350,
  height: 50,
  fontSize: 14,
};

export default Input;
