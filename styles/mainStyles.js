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

  mainTitleBlock: {
    marginBottom: 16,
  },

  mainTitle: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "RalewayExtraBold",
    letterSpacing: 1,
    color: colors.title,
    lineHeight: 28,
  },

  secondTitleBlock: {
    marginBottom: 14,
  },

  secondTitleOne: {
    fontSize: 16,
    fontFamily: "RalewayExtraBold",
    color: colors.darkerText,
    textAlign: "center",
    lineHeight: 24,
  },

  secondTitleTwo: {
    fontFamily: "RalewaySemiBold",
    fontSize: 16,
    color: colors.darkerText,
    textAlign: "center",
    lineHeight: 24,
  },

  choiceButtonView: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 20,
  },

  choiceButtonStyle: {
    width: 120,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  choiceViewStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },

  choiceTextStyle: {
    fontFamily: "RalewayBold",
    fontSize: 16,
    color: colors.secondary,
  },

  formView: {
    marginHorizontal: 12,
    justifyContent: "center",
  },

  formLine: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 4,
  },

  formNumberInput: {
    backgroundColor: "white",
    height: 30,
    width: 60,
    padding: 2,
    textAlign: "center",
    fontSize: 15,
    borderRadius: 8,
  },

  formTextInput: {
    backgroundColor: "white",
    height: 30,
    width: "65%",
    padding: 2,
    fontSize: 15,
    borderRadius: 8,
  },

  ingredientButtonView: {
    alignItems: "center",
    marginVertical: 16,
  },

  addIngredientButtonStyle: {
    width: 200,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  addIngredientTextStyle: {
    fontFamily: "RalewayBold",
    fontSize: 16,
    color: colors.secondary,
  },

});

export default mainStyles;
