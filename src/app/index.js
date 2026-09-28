import { Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { useApp } from "../context/AppContext";
export default function Index() {
  const { ready, loggedIn } = useApp();
  if (!ready)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator color="#1E6B57" />
      </View>
    );
  return <Redirect href={loggedIn ? "/explore" : "/login"} />;
}
