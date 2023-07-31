import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Size } from "@/constants/Size";
import { LinearGradient } from "expo-linear-gradient";
import useTheme from "@/hooks/useTheme";
import { Link } from "expo-router";

interface ButtonProps {
  onPress?: () => void;
  title?: string;
}

const RouteButton: React.FC<ButtonProps> = ({ onPress, title }) => {
  const theme = useTheme();

  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: "100%",
          marginHorizontal: "5%",
          marginTop: Size.Large,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LinearGradient
          colors={[theme.ButtonLight, theme.ButtonDark]}
          style={{
            width: "90%",
            borderRadius: Size.Tiny,
            paddingVertical: Size.Small,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            elevation: 25,
          }}
        >
          <Text
            style={{
              fontSize: Size.Medium,
              fontWeight: "500",
              color: theme.Background,
            }}
          >
            {title}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default RouteButton;
