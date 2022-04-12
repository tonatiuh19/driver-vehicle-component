const ResponseToObject = (data, query) => {
  let objIdArr = [];

  switch (query) {
    case "vehicleYears":
      data.vehicleYears.map((item, index) => {
        objIdArr.push({
          id: index,
          name: item.toString(),
        });
      });

      return objIdArr;
    case "vehicleMakes":
      data.vehicleMakes.map((item, index) => {
        objIdArr.push({
          id: index,
          name: item.toString(),
        });
      });

      return objIdArr;
    case "vehicleModels":
      data.vehicleModels.map((item, index) => {
        objIdArr.push({
          id: index,
          name: item.toString(),
        });
      });

      return objIdArr;
    case "vehicleTrims":
      data.vehicleTrims.map((item, index) => {
        objIdArr.push({
          id: index,
          name: item.trim.toString(),
        });
      });

      return objIdArr;
    default:
      return null;
  }
};

export default ResponseToObject;
