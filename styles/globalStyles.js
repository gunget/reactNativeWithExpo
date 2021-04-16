// 웹의 index.css처럼 전체 컴포넌트의 스타일을 통합 관리하기 위해 만듦
// 이렇게 만들고 개별 컴포넌트에서는 globalstyles을 import

import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#f01d71",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "red",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    padding: 30,
  },
  errorText: {
    color: "crimson",
    fontWeight: "700",
    marginBottom: 6,
    marginTop: 10,
    textAlign: "center",
  },
  header: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "gold",
  },
  headerLogo: {
    width: 27,
    height: 27,
    marginHorizontal: 10,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  headerTitle: {
    flexDirection: "row",
  },
  icon: {
    position: "absolute",
    left: 0,
  },
  input: {
    marginTop: 2,
    marginBottom: 2,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 10,
    fontSize: 18,
    textAlign: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  title: {
    fontFamily: "Nunito_400Regular",
    fontSize: 18,
    color: "#333",
  },
});
