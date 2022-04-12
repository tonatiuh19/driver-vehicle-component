import React, { useEffect } from "react";
import { Text, View, Animated, Easing, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./Loading.stye";

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
      duration: 600,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotateFunction());
  };

  useEffect(() => {
    startImageRotateFunction();
  }, []);

  return (
    <View>
      <Image
        source={{
          uri: "https://media.giphy.com/media/ZcXPePhE8h3GrdHRcP/giphy.gif",
        }}
        style={{ width: "50%", height: "50%" }}
      />
    </View>
  );
};

export default Loading;
