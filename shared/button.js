import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function FlatButton({ onPress, text }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
