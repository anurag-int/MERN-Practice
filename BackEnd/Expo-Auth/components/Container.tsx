import { View } from "react-native";
import React from "react";
import useTheme from "@/hooks/useTheme";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <View
      style={{
        height: "100%",
        backgroundColor: theme.Background,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </View>
  );
};

export default Container;
