import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import appStyles from "../styles/appStyles";
import { translations } from "../Utils/translations";
import { colors } from "../styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";

const FormLine = ({ id, language, deletable, deleteLine }) => {
  //States
  const [numberValue, setNumberValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const handleDelete = () => {
    deleteLine(id);
  };

  return (
    <View style={appStyles.formLine}>
      <TextInput
        style={appStyles.formNumberInput}
        keyboardType="numeric"
        value={numberValue}
        onChangeText={(text) => {
          const numericText = text.replace(/[^0-9]/g, ""); // Remplace tout sauf les chiffres
          setNumberValue(numericText);
        }}
        placeholder="100"
        placeholderTextColor={colors.formContent}
      />
      <TextInput
        style={appStyles.formTextInput}
        autoCapitalize="none"
        value={textValue}
        onChangeText={setTextValue}
        placeholder={translations[language].inputText}
        placeholderTextColor={colors.formContent}
      />
      {deletable && (
        <TouchableOpacity onPress={handleDelete}>
          <Icon name="times" size={30} color="red" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FormLine;
