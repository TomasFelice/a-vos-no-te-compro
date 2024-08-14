import { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Animated,
  Pressable,
} from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export function PostCard({ post }) {
  return (
    <Link href={`/${post.slug}`} asChild>
      <StyledPressable
        className={`active:opacity-70 border border-black active:white/50 mb-2 bg-gray-500/10 rounded-xl p-4`}
      >
        <View className="flex-row gap-4" key={post.slug}>
          <Image source={{ uri: post.image }} style={styles.image} />
          <Image source={{ uri: post.image }} style={styles.image} />
          <Image source={{ uri: post.image }} style={styles.image} />
          <View className="flex-shrink">
            <Text className="mb-1" style={styles.title}>
              {post.title}
            </Text>
            <Score score={post.score} maxScore={100} />
            <Text className="mt-2 flex-shrink" style={styles.description}>
              {post.description.slice(0, 100)}...
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
}

export function AnimatedPostCard({ post, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <PostCard post={post} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
});
