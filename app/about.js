import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeIcon } from "../components/Icons";

import { styled } from "nativewind";
import { Screen } from "../components/Screen";

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href={"/"}>
          <StyledPressable className={`active:opacity-20`}>
            <HomeIcon />
          </StyledPressable>
        </Link>

        <Text className="text-white font-bold mb-8 text-2xl">
          About the project
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

        <Text className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consectetur, justo nec rhoncus tincidunt, nunc metus tincidunt nisl,
          eget auctor turpis justo nec libero. Sed id nunc nec nunc lacinia
          ultricies. Ut in nunc nec nunc lacinia ultricies. Ut in nunc nec nunce
        </Text>
      </ScrollView>
    </Screen>
  );
}
