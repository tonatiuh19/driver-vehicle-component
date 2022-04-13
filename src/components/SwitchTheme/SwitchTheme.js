import React, { useState } from "react";
import { View, Switch } from "react-native";
import styles from "./SwitchTheme.style";

const SwitchTheme = ({ handleSwitch }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    handleSwitch(isEnabled);
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#f2e6e7" }}
        thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      />
    </View>
  );
};

export default SwitchTheme;
