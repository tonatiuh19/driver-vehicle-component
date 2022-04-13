import React from "react";
import { View, Text } from "react-native";
import styles from "./Title.style";

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Driver Vehicle Component</Text>
    </View>
  );
};

export default Title;
