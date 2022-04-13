import React, { useEffect } from "react";
import { View, Animated, Easing } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "react-native-tags/Tags/styles";

const Loading = () => {
  const rotateValueHolder = new Animated.Value(0);
  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 800,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotateFunction());
  };

  useEffect(() => {
    startImageRotateFunction();
  }, []);

  return (
    <View data-testid="Loading" style={styles.container}>
      <Animated.View
        style={{
          transform: [{ rotate: RotateData }],
        }}
      >
        <FontAwesome5 name="truck-moving" size={24} color="black" />
      </Animated.View>
    </View>
  );
};

export default Loading;
