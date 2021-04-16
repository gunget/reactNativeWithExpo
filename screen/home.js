import React, { useState } from "react";
import { View, Text, FlatList, Modal, Keyboard } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { globalStyles } from "../styles/globalStyles";
import { MaterialIcons } from "@expo/vector-icons";

import Card from "../shared/card";
import ReviewForm from "./reviewForm";

function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString(); //임의의 키값 더해주기. 좋은 방법은 아님.
    setReviews((currentReviews) => {
      return [...currentReviews, review];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={globalStyles.modalContent}>
          <MaterialIcons
            name="close"
            style={{
              ...globalStyles.modalToggle,
              ...globalStyles.modalClose,
            }}
            size={24}
            onPress={() => setModalOpen(false)}
          />
          <ReviewForm addReview={addReview} />
        </View>
      </Modal>

      <MaterialIcons
        style={globalStyles.modalToggle}
        name="add"
        size={24}
        onPress={() => setModalOpen(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetail", item)}
          >
            <Card>
              <Text style={globalStyles.title}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// 네비게이션용 버튼 사용방법
//   return (
//     <View style={globalStyles.container}>
//       <Text style={globalStyles.title}>Home Screen</Text>
//       <Button
//         title="go to review"
//         onPress={() => navigation.navigate("ReviewDetail")}
//         // onPress={() => navigation.push("ReviewDetail")}
//       />
//     </View>
//   );
// }

export default Home;
