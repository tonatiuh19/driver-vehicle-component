import React from "react";
import { View, Text } from "react-native";
import styles from "./Title.style";

const Title = ({ style = false }) => {
  return (
    <View style={styles.container}>
      <Text style={style ? styles.text : styles.textDark}>
        Driver Vehicle Component
      </Text>
    </View>
  );
};

export default Title;
