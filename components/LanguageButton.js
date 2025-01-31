import React, { useState } from "react";
import { View, Text, Pressable, Image, Animated } from "react-native";
import { colors } from "../styles/colors";

const LanguageButton = ({
  image,
  language,
  onPress,
  selected,
  pressableStyle,
  languageViewStyle,
  languageImageStyle,
  languageLangStyle,
}) => {
  // setOpacity n'est pas nécessaire ici car la valeur est manipulée directement dans l'animation.
  const [opacity] = useState(new Animated.Value(1));
  // Animations lorsque le bouton est pressé puis relâché.
  const pressIn = () => {
    Animated.timing(opacity, {
      toValue: 0.7,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const pressOut = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={pressIn}
      onPressOut={pressOut}
      style={[
        pressableStyle,
        {
          backgroundColor: selected ? colors.selectedButton : colors.button,
        },
      ]}
    >
      <Animated.View style={[languageViewStyle, { opacity }]}>
        <Image style={languageImageStyle} source={image}></Image>
      </Animated.View>
      <Text style={languageLangStyle}>{language}</Text>
    </Pressable>
  );
};

export default LanguageButton;
