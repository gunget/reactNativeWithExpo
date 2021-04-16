import React from "react";
import { View, Text, Image } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { globalImages } from "../shared/globalImages";
import Card from "../shared/card";

function ReviewDetail({ navigation, route }) {
  const { title, rating, body } = route.params;
  const image = globalImages.ratings[rating];
  // 이미지를 객체형태로 불러와서 뿌려주는 방식
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.title}>Title: {title}</Text>
        <Text style={globalStyles.title}>Body: {body}</Text>
        <View style={globalStyles.rating}>
          <Text style={globalStyles.title}>Rating: </Text>
          <Image source={image} />
          {/* <Image source={require(`../assets/rating-2.png`)} /> */}
          {/* require()의 인자로 템플릿 리터럴 사용불가 */}
        </View>
      </Card>
    </View>

    // 단순히 버튼으로 돌아가는 방식
    // return (
    //   <View style={globalStyles.container}>
    //     <Text>ReviewDetail Screen</Text>
    //     <Button
    //       title="Back to Home"
    //       onPress={() => navigation.navigate("Home Page")}
    //       // onPress={() => navigation.goBack()}
    //       // onPress={() => navigation.popToTop()}
    //     />
    //   </View>
  );
}

export default ReviewDetail;
