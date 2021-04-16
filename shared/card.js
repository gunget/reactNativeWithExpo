import React from "react";
import { View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

function Card(props) {
  return (
    <View style={globalStyles.card}>
      <View style={globalStyles.cardContent}>{props.children}</View>
      {/* card를 재활용하기 위해 hard coding대신에 chindren을 사용 */}
    </View>
  );
}

export default Card;
