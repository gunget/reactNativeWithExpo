import React from "react";
import About from "../screen/about";
import { StyleSheet } from "react-native";
import Header from "../shared/header";

// navigator
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function AboutStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerStyle: {
        //   backgroundColor: "#f4511e",
        //   height: 80,
        // },
        // headerTitleAlign: `center`,
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontFamily: "serif",
        },
      }}
    >
      {/* Navigator에 screenOption은 각스크린의 네비게이터에 공통으로 스타일 적용시 사용 */}
      <Stack.Screen
        name="About Page"
        component={About}
        options={{
          // title: "About GameZone",
          headerTitle: () => {
            return <Header navigation={navigation} />;
          }, //헤더에 컴포넌트를 넣을 수 있도록 해줌
        }}
      />
      {/* navigation.navigate('~~')할때 name값을 넣어줘야 라우팅 됨 */}
      {/* Screen에서는 option을 통해 네비게이터의 스타일 적용 가능 */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

// expo 4.x방식. 5.x는 react js의 router와 비슷해짐
// import { createStackNavigator } from "@react-navigation/stack";
// import { createAppContainer } from "@react-navigation/native";
// import Home from "../screen/home";
// import ReviewDetail from "../screen/reviewDetail";

// const screens = {
//   Home: {
//     screen: Home,
//   },
//   ReviewDetail: {
//     screen: ReviewDetail,
//   },
// };

// const Homestack = createStackNavigator(screens);

// export default createAppContainer(Homestack);
