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
import { translations } from "./Utils/translations.js";
// Components
import LanguageButton from "./components/LanguageButton.js";

// console.log(appStyles);

export default function App() {
  const [language, setLanguage] = useState("fr");
  // Décomposition du tableau retourné par le hook useFonts()
  // fontsLoaded : true/false, fontError: message/undefined
  const { fontsLoaded, fontError } = useCustomFonts();

  const changeLanguage = (language) => {
    setLanguage(language);
  };

  if (!fontsLoaded) {
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" color="#0000ff" />
        {/* Ou tu peux afficher un message de chargement */}
        <Text>Chargement des polices...</Text>
      </SafeAreaView>
    );
  } else {
    console.log(fontError);
  }

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
                selected={language === "fr"} // renvoie true ou false
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
            <Text style={appStyles.mainTitle}>
              {translations[language].mainTitleOne}
            </Text>
            <Text style={appStyles.mainTitle}>
              {translations[language].mainTitleTwo}
            </Text>
          </View>
          {/* Footer */}
          <View></View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
