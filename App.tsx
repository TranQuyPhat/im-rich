import { StatusBar } from "expo-status-bar";
import { Pressable, Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={onPressFunction}>
        <Image
          source={require("./Red-diamonds-scaled.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </Pressable>
    </View>
  );
}
const onPressFunction = function () {
  alert("Hehehee");
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pressable: {
    flex: 1,
    width: "100%",
    height: 300, // Đảm bảo có không gian cho hình ảnh
  },
  image: {
    flex: 1,
    width: "100%",
    height: "auto",
  },
});
