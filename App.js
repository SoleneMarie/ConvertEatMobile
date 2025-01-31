import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import useCustomFonts from "./Utils/fonts.js";
import appStyles from "./styles/appStyles.js";
import UUID from "react-native-uuid";
import { translations } from "./Utils/translations.js";

// Components
import LanguageButton from "./components/LanguageButton.js";
import MethodChoiceButton from "./components/MethodChoiceButton.js";
import AddIngredientButton from "./components/AddIngredientButton.js";
import FormLine from "./components/FormLine.js";

export default function App() {
  // States
  const [language, setLanguage] = useState("fr");
  const [methodChoice, setMethodChoice] = useState("servings");
  const [lines, setLines] = useState([]);
  // Décomposition du tableau retourné par le hook useFonts(); fontsLoaded : true/false, fontError: message/undefined
  const { fontsLoaded, fontError } = useCustomFonts();

  //Functions
  const changeLanguage = (language) => {
    setLanguage(language);
  };

  const changeMethod = (method) => {
    setMethodChoice(method);
  };

  const addLine = () => {
    const previousLines = lines;
    const newLine = {
      id: UUID.v4(),
    };
    const updatedLines = [...previousLines, newLine];
    setLines(updatedLines);
  };

  const deleteLine = (id) => {
    const currentLines = lines;
    const filteredLines = [];

    for (let i = 0; i < currentLines.length; i++) {
      const line = currentLines[i];
      if (line.id !== id) {
        filteredLines.push(line);
      }
    }
    setLines(filteredLines);
  };

  //Loader placeholder
  if (!fontsLoaded) {
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" color="#0000ff" />
        {/* Ou tu peux afficher un message de chargement */}
        <Text>Chargement des polices...</Text>
      </SafeAreaView>
    );
  }

  // Main view
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={appStyles.safeArea}>
        <ScrollView style={appStyles.body}>
          {/* Header */}
          <View style={appStyles.header}>
            <View style={appStyles.banner}>
              <Image
                style={appStyles.bannerImage}
                source={require("./assets/images/headerPic.png")}
              ></Image>
            </View>
            <View style={appStyles.buttonsView}>
              <LanguageButton
                image={require("./assets/images/french.png")}
                language="FR"
                onPress={() => changeLanguage("fr")}
                selected={language === "fr"}
                pressableStyle={appStyles.pressableStyle}
                languageViewStyle={appStyles.languageViewStyle}
                languageImageStyle={appStyles.languageImageStyle}
                languageLangStyle={appStyles.languageLangStyle}
              ></LanguageButton>

              <LanguageButton
                image={require("./assets/images/english.png")}
                language="EN"
                onPress={() => changeLanguage("en")}
                selected={language === "en"}
                pressableStyle={appStyles.pressableStyle}
                languageViewStyle={appStyles.languageViewStyle}
                languageImageStyle={appStyles.languageImageStyle}
                languageLangStyle={appStyles.languageLangStyle}
              ></LanguageButton>
            </View>
          </View>
          {/* Main */}
          <View style={appStyles.mainBlockStyle}>
            <View style={appStyles.mainTitleBlock}>
              <Text style={appStyles.mainTitle}>
                {translations[language].mainTitleOne}
              </Text>
              <Text style={appStyles.mainTitle}>
                {translations[language].mainTitleTwo}
              </Text>
            </View>
            <View style={appStyles.secondTitleBlock}>
              <Text style={appStyles.secondTitleOne}>
                {translations[language].methodTitleOne}
              </Text>
              <Text style={appStyles.secondTitleTwo}>
                {translations[language].methodTitleTwo}
              </Text>
            </View>
            {/* Method choice buttons */}
            <View style={appStyles.choiceButtonView}>
              <MethodChoiceButton
                text={translations[language].methodButtonOne}
                onPress={() => changeMethod("servings")}
                selected={methodChoice === "servings"}
                choiceButtonStyle={appStyles.choiceButtonStyle}
                choiceViewStyle={appStyles.choiceViewStyle}
                choiceTextStyle={appStyles.choiceTextStyle}
              ></MethodChoiceButton>

              <MethodChoiceButton
                text={translations[language].methodButtonTwo}
                onPress={() => changeMethod("ingredient")}
                selected={methodChoice === "ingredient"}
                choiceButtonStyle={appStyles.choiceButtonStyle}
                choiceViewStyle={appStyles.choiceViewStyle}
                choiceTextStyle={appStyles.choiceTextStyle}
              ></MethodChoiceButton>
            </View>
            <View style={appStyles.secondTitleBlock}>
              <Text style={appStyles.secondTitleOne}>
                {translations[language].recipeTitleOne}
              </Text>
              <Text style={appStyles.secondTitleTwo}>
                {translations[language].recipeTitleTwo}
              </Text>
            </View>
            {/* Formulaire */}
            <View style={appStyles.formView}>
              <FormLine language={language}></FormLine>
              {lines.map((line) => (
                <FormLine key={line.id} id={line.id}language={language} deletable={true} deleteLine={deleteLine} />
              ))}
            </View>
            <View style={appStyles.ingredientButtonView}>
              <AddIngredientButton
                text={translations[language].addIngredientButton}
                onPress={() => addLine()}
                addIngredientButtonStyle={appStyles.addIngredientButtonStyle}
                addIngredientTextStyle={appStyles.addIngredientTextStyle}
              ></AddIngredientButton>
            </View>
          </View>

          {/* Footer */}
          <View></View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
