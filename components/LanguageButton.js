import { Text, TouchableHighlight, View, Image } from "react-native";
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
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[
        pressableStyle,
        {
          backgroundColor: selected ? colors.selectedButton : colors.button,
        },
      ]}
    >
      <View style={languageViewStyle}>
        <Image style={languageImageStyle} source={image}></Image>

        <Text
          style={[
            languageLangStyle,
            {
              color: selected ? colors.secondary : colors.darkText,
            },
          ]}
        >
          {language}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default LanguageButton;
