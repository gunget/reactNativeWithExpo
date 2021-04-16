import React from "react";
import Home from "../screen/home";
import ReviewDetail from "../screen/reviewDetail";
import Header from "../shared/header";
import { StyleSheet } from "react-native";

// navigator
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {
  // console.log("drawerNavigation", navigation);
  // 여기서 받은 navigation은 Drawer Nav의 navigation

  return (
    <Stack.Navigator
      screenOptions={
        {
          // headerStyle: {
          //   backgroundColor: "#f4511e",
          //   height: 80,
          // },
          // headerTitleAlign: `center`,
          // headerTintColor: "#fff",
          // headerTitleStyle: {
          //   fontWeight: "bold",
          //   fontFamily: "serif",
          // },
        }
      }
    >
      {/* Navigator에 screenOption은 각스크린의 네비게이터에 공통으로 스타일 적용시 사용 */}
      <Stack.Screen
        name="Home Page"
        component={Home}
        options={{
          headerTitle: () => {
            return <Header navigation={navigation} />;
          }, //헤더를 컴포넌트로 집어넣을 수 있게 해줌
          // DrawNavigation의 Navigation prop을 헤더로 전달해주려면 위처럼 해야함
          // (navigation)처럼 매게변수로 넣어주면 props로 받은게 아닌 엉뚱한 값이 전달됨
        }}
      />
      {/* navigation.navigate('~~')할때 name값을 넣어줘야 라우팅 됨 */}
      {/* Screen에서는 option을 통해 네비게이터의 스타일 적용 가능 */}
      <Stack.Screen name="ReviewDetail" component={ReviewDetail} />
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
