import { Link, Stack } from "expo-router";
import { ActivityIndicator, Text, View, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";

export default function Detail() {
  const { slug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (slug) {
      getGameDetails(slug).then(setGameInfo);
    }
  }, [slug]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: "Detalles",
          headerRight: () => {},
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <ScrollView>
            <Text className="text-white font-bold mb-8 text-2xl">
              Game Detail {slug}
            </Text>
            <Link href={"/"} className="text-blue-500">
              <Text>Volver Atrás</Text>
            </Link>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
