import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./Button.style";

const Button = ({ text = "", handleOnclick, style }) => {
  return (
    <TouchableOpacity
      style={style ? styles.container : styles.containerDark}
      onPress={handleOnclick}
    >
      <Text style={style ? styles.text : styles.textDark}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
