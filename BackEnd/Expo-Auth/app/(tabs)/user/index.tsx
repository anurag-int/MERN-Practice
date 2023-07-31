import { View, Text, Image } from "react-native";
import React from "react";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import useTheme from "@/hooks/useTheme";
import { Size } from "@/constants/Size";
import { Link } from "expo-router";
import { Feather } from "expo-vector-icons";

const index = () => {
  const theme = useTheme();

  return (
    <Container>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          elevation: 25,
          shadowColor: "#000",
          backgroundColor: "red",
          borderRadius: 30,
        }}
      >
        <Image
          source={require("@/assets/images/icon-light.png")}
          style={{ width: 100, height: 100, borderRadius: 30 }}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Heading>Welcome to {"\n"} Expo Auth</Heading>
      </View>

      <Text
        style={{
          color: theme.TextSecondary,
          fontSize: Size.Medium,
          fontWeight: "200",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        You can start by editing
      </Text>
      <Text
        style={{
          fontWeight: "500",
          marginTop: 10,
          color: theme.TextSecondary,
          paddingVertical: Size.ExtraSmall,
          paddingHorizontal: Size.Extralarge,
          backgroundColor: theme.CodeSnippet,
          borderRadius: 10,
          fontSize: Size.Medium,
        }}
      >
        app/(tabs)/user/index.tsx
      </Text>
      <View style={{ marginTop: 20 }}>
        <Link href={"/auth"}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Feather name="log-out" size={25} color={theme.TextPrimary} />
            <Text
              style={{
                color: theme.TextPrimary,
                fontSize: Size.Medium,
                marginLeft: 10,
              }}
            >
              Logout
            </Text>
          </View>
        </Link>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: Size.Small, color: theme.TextSecondary }}>
          This Template is Built By
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Link href={"https://github.com/void-main1812"}>
            <Text
              style={{
                fontSize: Size.Small,
                color: theme.TextPrimary,
                fontWeight: "500",
                textDecorationLine: "underline",
              }}
            >
              Sourabh Singh
            </Text>
          </Link>
          <Link href={"https://github.com/smile-1006"}>
            <Text
              style={{
                fontSize: Size.Small,
                color: theme.TextPrimary,
                fontWeight: "500",
                textDecorationLine: "underline",
              }}
            >
              Swapnil Singh
            </Text>
          </Link>
          <Link href={"https://github.com/anurag-int"}>
            <Text
              style={{
                fontSize: Size.Small,
                color: theme.TextPrimary,
                fontWeight: "500",
                textDecorationLine: "underline",
              }}
            >
              Anurag Gupta
            </Text>
          </Link>
        </View>
      </View>
    </Container>
  );
};

export default index;
