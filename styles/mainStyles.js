import { StyleSheet } from "react-native";
import { colors } from "./colors";

const mainStyles = StyleSheet.create({
  mainBlockStyle: {
    backgroundColor: colors.secondary,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    padding: 8,
  },

  mainTitle: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "RalewayExtraBold",
    letterSpacing: 1,
    color: colors.title,
  },
});

export default mainStyles;
