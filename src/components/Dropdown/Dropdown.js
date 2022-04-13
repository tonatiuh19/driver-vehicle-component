import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Text, View, Keyboard } from "react-native";
import SearchableDropdown from "react-native-searchable-dropdown";
import styles from "./Dropdown.style";
import queries from "../../apollo/queries";
import ResponseToObject from "../../utils/ResponseToObject";
import Loading from "../Loading/Loading";

const Dropdown = ({
  placeholder = "",
  query = "",
  input = {},
  disable = false,
  handleDropdownOutput,
}) => {
  const [placeHolder, setPlaceHolder] = useState(placeholder);
  const [reset, setReset] = useState(false);
  const [items, setItems] = useState([]);
  const { loading, error, data } = useQuery(queries(query), {
    variables: input,
  });

  useEffect(() => {
    if (loading === false && data) {
      setItems(ResponseToObject(data, query));
    }
    if (query === "vehicleTrims") {
      Keyboard.dismiss();
    }
    if (!disable) {
      setPlaceHolder(placeholder);
    }
  }, [loading, data]);

  if (disable) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {loading || error ? (
          <View style={styles.containerLoading}>
            <Loading />
          </View>
        ) : (
          <View style={styles.containerInput}>
            <Text style={styles.text}>{placeholder}:</Text>
            <SearchableDropdown
              onItemSelect={(item) => {
                handleDropdownOutput(item.name, query);
                setPlaceHolder(item.name);
              }}
              containerStyle={{ padding: 5 }}
              textInputStyle={styles.textInputStyle}
              itemStyle={styles.itemStyle}
              itemTextStyle={styles.itemTextStyle}
              itemsContainerStyle={styles.itemsContainerStyle}
              items={items}
              defaultIndex={2}
              placeholder={placeHolder}
              placeholderTextColor={"#222"}
              resetValue={reset}
              underlineColorAndroid="transparent"
            />
          </View>
        )}
      </View>
    );
  }
};

export default Dropdown;
