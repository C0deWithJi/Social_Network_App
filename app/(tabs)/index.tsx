import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "teal"
      }}
    >
      <Text style={{
        color: "indigo"
      }}>Welcome to your Social Networking App!</Text>
    </View>
  );
}
