import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Text, View, SafeAreaView } from "react-native";
import SearchableDropdown from "react-native-searchable-dropdown";
import styles from "./Dropdown.style";
import queries, { GET_VEHICLE_YEARS } from "../../apollo/queries";
import ResponseToObject from "../../utils/ResponseToObject";

const Dropdown = ({
  placeholder = "",
  query = "",
  input = {},
  disable = false,
  handleDropdownOutput,
}) => {
  const [placeHolder, setPlaceHolder] = useState(placeholder);
  const [items, setItems] = useState([]);
  const { loading, error, data } = useQuery(queries(query), {
    variables: input,
  });

  useEffect(() => {
    if (loading === false && data) {
      setItems(ResponseToObject(data, query));
    }
  }, [loading, data]);

  if (disable) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {loading || error ? (
          <Text>Loading</Text>
        ) : (
          <View style={styles.containerInput}>
            <Text>{placeholder}:</Text>
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
              resetValue={false}
              underlineColorAndroid="transparent"
            />
          </View>
        )}
      </View>
    );
  }
};

export default Dropdown;
