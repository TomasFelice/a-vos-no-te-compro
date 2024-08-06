
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

import icon from "./assets/icon.png";

export function Main() {
  return (
    <>
      <ScrollView>
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
          <Text style={styles.title}>This is a title</Text>
          <Text style={styles.score}>Stars: 2</Text>
          <Text style={styles.description}>
            sanjlsbaksbajhvsjhavskas a sabskabksbaks ashkabksba sabskabks
            asknabkhsbas asaksbaksba skaska skna sk ask askakns asa saska s as a
            sa ska ska s ah ska skhabsaljsnajsa sabksbaksbasabsabs saibskas
            asjas assksabsbak
          </Text>
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
          <Text style={styles.title}>This is a title</Text>
          <Text style={styles.score}>Stars: 2</Text>
          <Text style={styles.description}>
            sanjlsbaksbajhvsjhavskas a sabskabksbaks ashkabksba sabskabks
            asknabkhsbas asaksbaksba skaska skna sk ask askakns asa saska s as a
            sa ska ska s ah ska skhabsaljsnajsa sabksbaksbasabsabs saibskas
            asjas assksabsbak
          </Text>
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
          <Text style={styles.title}>This is a title</Text>
          <Text style={styles.score}>Stars: 2</Text>
          <Text style={styles.description}>
            sanjlsbaksbajhvsjhavskas a sabskabksbaks ashkabksba sabskabks
            asknabkhsbas asaksbaksba skaska skna sk ask askakns asa saska s as a
            sa ska ska s ah ska skhabsaljsnajsa sabksbaksbasabsabs saibskas
            asjas assksabsbak
          </Text>
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
          <Text style={styles.title}>This is a title</Text>
          <Text style={styles.score}>Stars: 2</Text>
          <Text style={styles.description}>
            sanjlsbaksbajhvsjhavskas a sabskabksbaks ashkabksba sabskabks
            asknabkhsbas asaksbaksba skaska skna sk ask askakns asa saska s as a
            sa ska ska s ah ska skhabsaljsnajsa sabksbaksbasabsabs saibskas
            asjas assksabsbak
          </Text>
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
          <Text style={styles.title}>This is a title</Text>
          <Text style={styles.score}>Stars: 2</Text>
          <Text style={styles.description}>
            sanjlsbaksbajhvsjhavskas a sabskabksbaks ashkabksba sabskabks
            asknabkhsbas asaksbaksba skaska skna sk ask askakns asa saska s as a
            sa ska ska s ah ska skhabsaljsnajsa sabksbaksbasabsabs saibskas
            asjas assksabsbak
          </Text>
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
          <Text style={styles.title}>This is a title</Text>
          <Text style={styles.score}>Stars: 2</Text>
          <Text style={styles.description}>
            sanjlsbaksbajhvsjhavskas a sabskabksbaks ashkabksba sabskabks
            asknabkhsbas asaksbaksba skaska skna sk ask askakns asa saska s as a
            sa ska ska s ah ska skhabsaljsnajsa sabksbaksbasabsabs saibskas
            asjas assksabsbak
          </Text>
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
      </ScrollView>
    </>
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
