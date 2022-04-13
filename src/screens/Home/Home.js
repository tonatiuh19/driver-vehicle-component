import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import styles from "./Home.style";
import Dropdown from "../../components/Dropdown/Dropdown";
import Title from "../../components/Title/Title";
import Truck from "../../components/Truck/Truck";
import Button from "../../components/Button/Button";

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
  const [statusDataTruck, setStatusDataTruck] = useState({
    visible: false,
    vehicleYears: {
      text: "",
    },
    vehicleMakes: {
      text: "",
    },
    vehicleModels: {
      text: "",
    },
    vehicleTrims: {
      text: "",
    },
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
    } else if (query === "vehicleTrims") {
      setStatusDataTruck({
        visible: true,
        vehicleYears: {
          text: vehicleTrimsData.data.year,
        },
        vehicleMakes: {
          text: vehicleTrimsData.data.make,
        },
        vehicleModels: {
          text: vehicleTrimsData.data.model,
        },
        vehicleTrims: {
          text: data,
        },
      });
    }
  };

  const handleOnclick = () => {
    setVehicleYearsData({
      placeholder: "Chosse a Year",
      disable: false,
      query: "vehicleYears",
    });
    setVehicleMakesData({
      placeholder: "Chosse a Vehicle",
      disable: true,
      query: "vehicleMakes",
      data: { year: 0 },
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

    setStatusDataTruck({
      visible: false,
      vehicleYears: {
        text: "",
      },
      vehicleMakes: {
        text: "",
      },
      vehicleModels: {
        text: "",
      },
      vehicleTrims: {
        text: "",
      },
    });
  };

  return (
    <SafeAreaView style={styles.container} overScrollMode>
      <View style={styles.containerTitle}>
        <Title />
      </View>
      <View style={styles.containerDrops}>
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
      </View>
      <View style={styles.containerTruck}>
        <Truck statusData={statusDataTruck} />
      </View>
      <View style={styles.containerButton}>
        <Button text="Reset" handleOnclick={handleOnclick} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
