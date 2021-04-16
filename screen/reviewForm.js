import React from "react";
import { Button, View, TextInput, Text } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/button";

// formic 사용법. Formik이란 패키지 설치 후 컴포넌트 호출. 컴포넌트 안에 초기값, onSubmit 속성등을 정의한 후, 이게 렌더링해줄 jsx를 태그사이에 함수로 기록. 이때 props를 formik이 넘겨준다.
// yup 사용법. formic이랑 같이 사용(validationSchema에 obj로 넣어줌). form의 validation을 위한 schema를 작성해줌
// test('테스트이름', '에러메시지', callBack). callback의 return은 true or false인데
// true가 되어야만 validation을 통과함

const reviewSchema = yup.object().shape({
  title: yup.string().required().min(4),
  body: yup.string().required().min(4),
  rating: yup
    .string()
    .required()
    .test("Num 1-5 test", "Rating must be 1 to 5", (value) => {
      return parseInt(value) > 0 && parseInt(value) < 6;
    }),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          //values는 각 input에서 onChange한 값들
          actions.resetForm(); //2번째 파라미터로 action을 사용함. 폼을 reset하는 것.
          //submit하고 바로 지워야지, 완전히 사라진 후 지우려하면 불필요한 동작이라는 warning 뜸
          addReview(values);
        }}
      >
        {(formikProp) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="review title"
              onChangeText={formikProp.handleChange("title")}
              value={formikProp.values.title}
              onBlur={formikProp.handleBlur("title")}
              // onBlur는 해당 인풋이 블러처리될 때, 곧 input영역을 벗어날 때를 의미
              // 아래 텍스트에 의해 해당 인풋이 선택되고 에러발생시 표시되도록 되어 있지만
              // 여기에 onBlur처리를 했으므로 해당 인풋을 벗어날때 표시됨
            />
            <Text style={globalStyles.errorText}>
              {formikProp.touched.title && formikProp.errors.title}
            </Text>
            <TextInput
              multiline
              minHeight={60}
              style={globalStyles.input}
              placeholder="review body"
              onChangeText={formikProp.handleChange("body")}
              value={formikProp.values.body}
              onBlur={formikProp.handleBlur("body")}
            />
            <Text style={globalStyles.errorText}>
              {formikProp.touched.body && formikProp.errors.body}
            </Text>
            <TextInput
              keyboardType="numeric"
              style={globalStyles.input}
              placeholder="review rating(1~5)"
              onChangeText={formikProp.handleChange("rating")}
              value={formikProp.values.rating}
              onBlur={formikProp.handleBlur("rating")}
            />
            <Text style={globalStyles.errorText}>
              {formikProp.touched.rating && formikProp.errors.rating}
            </Text>
            {/* <Button
              title="submit"
              color="maroon"
              onPress={formikProp.handleSubmit}
            /> */}
            <FlatButton text="submit" onPress={formikProp.handleSubmit} />
            {/* reactNative의 기본버튼 말고 사용자 버튼을 쓰고플 때 */}
          </View>
        )}
      </Formik>
    </View>
  );
}
