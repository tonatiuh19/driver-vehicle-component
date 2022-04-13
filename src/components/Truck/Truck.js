import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import ButtonTruck from "../ButtonTruck/ButtonTruck";
import styles from "./Truck.style";

const Truck = ({ statusData, style }) => {
  const [vehicleData, setVehicleData] = useState(statusData);

  useEffect(() => {
    setVehicleData(statusData);
  }, [statusData]);

  if (vehicleData.visible) {
    return (
      <View style={styles.container}>
        <View style={styles.yearsContainer}>
          <ButtonTruck text={vehicleData.vehicleYears.text} />
        </View>
        <View style={styles.truckContainer}>
          <View style={styles.truckMakes}>
            <ButtonTruck text={vehicleData.vehicleMakes.text} />
          </View>
          <View style={styles.truckIcon}>
            {style ? (
              <FontAwesome5 name="truck-moving" size={50} color="black" />
            ) : (
              <FontAwesome5 name="truck-moving" size={50} color="white" />
            )}
          </View>
          <View style={styles.truckModel}>
            <ButtonTruck text={vehicleData.vehicleModels.text} />
          </View>
        </View>
        <View style={styles.trimContainer}>
          <ButtonTruck text={vehicleData.vehicleTrims.text} />
        </View>
      </View>
    );
  } else {
    return null;
  }
};

export default Truck;
