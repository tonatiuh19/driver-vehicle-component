import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import styles from "./Home.style";
import Dropdown from "../../components/Dropdown/Dropdown";

const Home = () => {
  const [vehicleYearsData, setVehicleYearsData] = useState({
    placeholder: "Chosse a Year",
    disable: false,
    query: "vehicleYears",
  });
  const [vehicleMakesData, setVehicleMakesData] = useState({
    placeholder: "Chosse a Vehicle",
    disable: true,
    query: "vehicleMakes",
    data: { year: 0 },
  });
  const [vehicleModelsData, setVehicleModelsData] = useState({
    placeholder: "Chosse a Model",
    disable: true,
    query: "vehicleModels",
    data: { year: 0, make: "" },
  });
  const [vehicleTrimsData, setVehicleTrimsData] = useState({
    placeholder: "Chosse Trim",
    disable: true,
    query: "vehicleTrims",
    data: { year: 0, make: "", model: "" },
  });

  const handleDropdownOutput = (data, query) => {
    if (query === "vehicleYears") {
      setVehicleMakesData({
        placeholder: "Chosse a Vehicle",
        disable: false,
        query: "vehicleMakes",
        data: { year: parseInt(data) },
      });
      setVehicleModelsData({
        placeholder: "Chosse a Model",
        disable: true,
        query: "vehicleModels",
        data: { year: 0, make: "" },
      });
      setVehicleTrimsData({
        placeholder: "Chosse Trim",
        disable: true,
        query: "vehicleTrims",
        data: { year: 0, make: "", model: "" },
      });
    } else if (query === "vehicleMakes") {
      setVehicleModelsData({
        placeholder: "Chosse a Model",
        disable: false,
        query: "vehicleModels",
        data: { year: vehicleMakesData.data.year, make: data },
      });
      setVehicleTrimsData({
        placeholder: "Chosse Trim",
        disable: true,
        query: "vehicleTrims",
        data: { year: 0, make: "", model: "" },
      });
    } else if (query === "vehicleModels") {
      setVehicleTrimsData({
        placeholder: "Chosse Trim",
        disable: false,
        query: "vehicleTrims",
        data: {
          year: vehicleMakesData.data.year,
          make: vehicleModelsData.data.make,
          model: data,
        },
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Dropdown
        placeholder={vehicleYearsData.placeholder}
        disable={vehicleYearsData.disable}
        query={vehicleYearsData.query}
        handleDropdownOutput={handleDropdownOutput}
      />
      <Dropdown
        placeholder={vehicleMakesData.placeholder}
        disable={vehicleMakesData.disable}
        query={vehicleMakesData.query}
        input={vehicleMakesData.data}
        handleDropdownOutput={handleDropdownOutput}
      />
      <Dropdown
        placeholder={vehicleModelsData.placeholder}
        disable={vehicleModelsData.disable}
        query={vehicleModelsData.query}
        input={vehicleModelsData.data}
        handleDropdownOutput={handleDropdownOutput}
      />
      <Dropdown
        placeholder={vehicleTrimsData.placeholder}
        disable={vehicleTrimsData.disable}
        query={vehicleTrimsData.query}
        input={vehicleTrimsData.data}
        handleDropdownOutput={handleDropdownOutput}
      />
    </SafeAreaView>
  );
};

export default Home;
