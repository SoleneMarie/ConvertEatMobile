import { StyleSheet } from "react-native";
import { colors } from "./colors";

const headerStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 100,
    width: "100%",
    alignItems: "center",
    margin: 8,
  },
  banner: {
    height: "90%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  bannerImage: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },

  buttonsView: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    height: 40,
  },

  pressableStyle: {
    width: 80,
    height: "100%",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },

  languageViewStyle: {
    width: "40%",
    height: "70%",
  },

  languageImageStyle: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },

  languageLangStyle: {
    fontWeight: 700,
    fontSize: 20,
  },
});

export default headerStyles;
