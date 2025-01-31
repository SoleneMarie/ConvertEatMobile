import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../styles/colors";

const MethodChoiceButton = ({
  text,
  onPress,
  selected,
  choiceButtonStyle,
  choiceViewStyle,
  choiceTextStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        choiceButtonStyle,
        {
          backgroundColor: selected ? colors.selectedButton : colors.primary,
        },
      ]}
    >
      <View style={choiceViewStyle}>
        <Text style={choiceTextStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MethodChoiceButton;
