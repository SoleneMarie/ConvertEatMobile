import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../styles/colors";

const AddIngredientButton = ({
  text,
  onPress,
  addIngredientButtonStyle,
  addIngredientTextStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        addIngredientButtonStyle,
        {
          backgroundColor: colors.primary,
        },
      ]}
    >
      <View>
        <Text style={addIngredientTextStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddIngredientButton;
