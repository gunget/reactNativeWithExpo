import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { globalImages } from "../shared/globalImages";
import { MaterialIcons } from "@expo/vector-icons";

function Header({ navigation }) {
  const handlePress = () => {
    navigation.openDrawer();
    // console.log("navigation 상태", navigation);
  };

  return (
    <ImageBackground
      source={globalImages.headerBackground}
      style={globalStyles.header}
    >
      <MaterialIcons
        name="menu"
        size={28}
        onPress={handlePress}
        style={globalStyles.icon}
      />
      <View style={globalStyles.headerTitle}>
        <Image
          source={globalImages.headerLogo}
          style={globalStyles.headerLogo}
        />
        <Text style={globalStyles.headerText}>GameZone</Text>
      </View>
    </ImageBackground>
  );
}

export default Header;
