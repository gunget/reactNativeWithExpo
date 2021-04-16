// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

// font loading
// react NT는 index.html같은게 없으므로 폰트를 직접 로딩해야 함
// 설치하고 로딩해야 하는데, 그걸 쉽게 하려고 나온게 useFonts.
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

// component
import HomeStack from "./routes/homeStack";
import AboutStack from "./routes/aboutStack";

// navigator
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function App() {
  let [fontLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });
  //font가 로딩되면 true반환

  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home Stack" component={HomeStack} />
        <Drawer.Screen name="About Stack" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
