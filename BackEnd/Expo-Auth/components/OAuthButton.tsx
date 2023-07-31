import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "expo-vector-icons";
import useTheme from "@/hooks/useTheme";
import { Size } from "@/constants/Size";

interface OAuthButtonProps {
  onPress?: () => void;
  title?: string;
  name?: string;
}

const OAuthButton: React.FC<OAuthButtonProps> = ({ onPress, title, name }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: theme.Heading,
          height: Size.XXLarge,
          width: Size.XXLarge,
          borderRadius: Size.Extralarge,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name={name} size={24} color={theme.Background} />
      </TouchableOpacity>
      <Text
        style={{
          color: theme.TextSecondary,
          fontSize: Size.Medium,
          fontWeight: "500",
          marginTop: Size.Small,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default OAuthButton;
