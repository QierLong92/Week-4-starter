import { useState } from "react";
import {
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useApp } from "../context/AppContext";

export default function Login() {
  const { setLoggedIn } = useApp();
  const [username] = useState("hiker@trailhead.com");
  const [password] = useState("trailhead");
  const login = () => {
    setLoggedIn(true);
    router.replace("/explore");
  };
  const unavailable = () =>
    Alert.alert("Coming soon", "This option is not available in the demo.");
  return (
    <ImageBackground
      source={{
        uri: [
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
          "?auto=format&fit=crop&w=1200&q=85",
        ].join(""),
      }}
      style={styles.image}
    >
      <View style={styles.shade} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.content}
      >
        <View style={styles.brand}>
          <MaterialCommunityIcons name="terrain" size={38} color="#F8F6EC" />
          <Text style={styles.title}>trailhead</Text>
          <Text style={styles.subtitle}>Find your next wild place</Text>
        </View>
        <View style={styles.panel}>
          <Text style={styles.welcome}>Welcome back</Text>
          <Text style={styles.hint}>Sign in to keep exploring.</Text>
          <Text style={styles.label}>EMAIL</Text>
          <TextInput value={username} editable={false} style={styles.input} />
          <Text style={styles.label}>PASSWORD</Text>
          <TextInput
            value={password}
            editable={false}
            secureTextEntry
            style={styles.input}
          />
          <Pressable onPress={unavailable}>
            <Text style={styles.forgot}>Forgot password?</Text>
          </Pressable>
          <Pressable onPress={login} style={styles.button}>
            <Text style={styles.buttonText}>Log in</Text>
          </Pressable>
          <Text style={styles.create}>
            New to Trailhead?{" "}
            <Text onPress={unavailable} style={styles.createLink}>
              Create account
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  image: { flex: 1 },
  shade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(11,40,31,.38)",
  },
  content: { flex: 1, justifyContent: "flex-end" },
  brand: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 65,
  },
  logo: { color: "#F8F6EC", fontSize: 36 },
  title: { color: "white", fontSize: 38, fontWeight: "800", letterSpacing: -1 },
  subtitle: { color: "#F0F4EC", fontSize: 15, marginTop: 6 },
  panel: {
    backgroundColor: "#FEFDF9",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 26,
    paddingBottom: 38,
  },
  welcome: { fontSize: 25, fontWeight: "800", color: "#17342D" },
  hint: { color: "#6D7974", marginTop: 4, marginBottom: 22 },
  label: {
    fontSize: 11,
    color: "#61706B",
    fontWeight: "800",
    marginBottom: 7,
    letterSpacing: 0.6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDE1DA",
    borderRadius: 10,
    height: 48,
    paddingHorizontal: 13,
    color: "#52625B",
    backgroundColor: "#F8F8F5",
    marginBottom: 15,
  },
  forgot: {
    textAlign: "right",
    color: "#216F5B",
    fontWeight: "700",
    fontSize: 13,
    marginBottom: 21,
  },
  button: {
    backgroundColor: "#176B56",
    borderRadius: 12,
    alignItems: "center",
    paddingVertical: 15,
  },
  buttonText: { color: "white", fontWeight: "800", fontSize: 16 },
  create: { textAlign: "center", color: "#66736D", marginTop: 19 },
  createLink: { color: "#176B56", fontWeight: "800" },
});
