import { Stack } from "expo-router";
import { View } from "react-native";
import { Logo } from "../components/Logo";

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerTintColor: "yellow",
          headerStyle: { backgroundColor: "black" },
          headerTitle: "",
          headerLeft: () => <Logo />,
        }}
      />
    </View>
  );
}
