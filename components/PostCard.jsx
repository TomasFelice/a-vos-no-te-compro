import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import icon from "../assets/icon.png";

export function PostCard({ post }) {
  return (
    <View style={styles.card}>
      <Image
        source={icon}
        style={{
          width: 64,
          height: 64,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.score}>Stars: {post.score}</Text>
      <Text style={styles.description}>{post.description}</Text>
      <Pressable
        style={{
          backgroundColor: "green",
          padding: 12,
          borderRadius: 10,
          marginTop: 12,
        }}
      >
        <Text style={{ color: "#fff" }}>Press me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 12,
  },
  description: {
    fontSize: 16,
    color: "#fff",
  },
  score: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginBottom: 12,
  },
});
