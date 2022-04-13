import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    elevation: 8,
    backgroundColor: "#222",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 37,
    width: 100,
    alignItems: "center",
  },
  containerDark: {
    elevation: 8,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 37,
    width: 100,
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
  },
  textDark: {
    fontSize: 15,
    color: "#222",
    fontWeight: "bold",
  },
});

export default styles;
