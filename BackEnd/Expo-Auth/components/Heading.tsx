import { View, Text } from "react-native";
import React from "react";
import useTheme from "@/hooks/useTheme";
import { Size } from "@/constants/Size";


interface HeadingProps {
  children: React.ReactNode;
  style?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, style }) => {
  const theme = useTheme();
  return (
    <Text
      style={{
        fontSize: Size.Extralarge,
        color: theme.Heading,
        textAlign: "center",
        fontWeight: "bold",
      }}
    >
      {children}
    </Text>
  );
};

export default Heading;
