import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeIcon } from "../components/Icons";

export default function About() {
  return (
    <ScrollView className="pt-24">
      <Link asChild href={"/"}>
        <Pressable>
          <HomeIcon />
        </Pressable>
      </Link>
      <Text className="text-white font-bold mb-8 text-2xl">About</Text>

      <Text className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, justo nec rhoncus tincidunt, nunc metus tincidunt nisl,
        eget auctor turpis justo nec libero. Sed id nunc nec nunc lacinia
        ultricies. Ut in nunc nec nunc lacinia ultricies. Ut in nunc nec nunce
      </Text>

      <Text className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, justo nec rhoncus tincidunt, nunc metus tincidunt nisl,
        eget auctor turpis justo nec libero. Sed id nunc nec nunc lacinia
        ultricies. Ut in nunc nec nunc lacinia ultricies. Ut in nunc nec nunce
      </Text>

      <Text className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, justo nec rhoncus tincidunt, nunc metus tincidunt nisl,
        eget auctor turpis justo nec libero. Sed id nunc nec nunc lacinia
        ultricies. Ut in nunc nec nunc lacinia ultricies. Ut in nunc nec nunce
      </Text>

      <Text className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, justo nec rhoncus tincidunt, nunc metus tincidunt nisl,
        eget auctor turpis justo nec libero. Sed id nunc nec nunc lacinia
        ultricies. Ut in nunc nec nunc lacinia ultricies. Ut in nunc nec nunce
      </Text>

      <Text className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, justo nec rhoncus tincidunt, nunc metus tincidunt nisl,
        eget auctor turpis justo nec libero. Sed id nunc nec nunc lacinia
        ultricies. Ut in nunc nec nunc lacinia ultricies. Ut in nunc nec nunce
      </Text>

      <Text className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consectetur, justo nec rhoncus tincidunt, nunc metus tincidunt nisl,
        eget auctor turpis justo nec libero. Sed id nunc nec nunc lacinia
        ultricies. Ut in nunc nec nunc lacinia ultricies. Ut in nunc nec nunce
      </Text>
    </ScrollView>
  );
}
