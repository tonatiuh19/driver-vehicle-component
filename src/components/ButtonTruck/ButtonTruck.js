import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./ButtonTruck.style";

const ButtonTruck = ({ text = "" }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonTruck;
