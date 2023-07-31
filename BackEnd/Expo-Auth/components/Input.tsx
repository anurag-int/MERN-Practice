import { View, Text, TextInput } from "react-native";
import React from "react";
import { Size } from "@/constants/Size";
import useTheme from "@/hooks/useTheme";

interface InputProps {
  placeholder?: string;
  label?: string;
  secureTextEntry?: boolean;
  onChange?: (text: string) => void;
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad";
}

const Input: React.FC<InputProps> = ({
  placeholder,
  label,
  onChange,
  keyboardType,
  secureTextEntry,
}) => {
  const theme = useTheme();

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        width: "90%",
        marginHorizontal: "5%",
      }}
    >
      <Text
        style={{
          color: theme.TextPrimary,
          fontSize: Size.Medium,
          fontWeight: "400",
          textAlign: "left",
        }}
      >
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChange}
        keyboardType={keyboardType}
        placeholderTextColor={theme.Placeholder}
        secureTextEntry={secureTextEntry}
        style={{
          backgroundColor: theme.InputBackground,
          paddingVertical: Size.Small,
          marginTop: Size.ExtraSmall,
          borderRadius: Size.Tiny,
          paddingHorizontal: Size.Small,
          color: theme.TextSecondary,
          fontSize: Size.Small,
          borderWidth: 1,
          borderColor: theme.InputBorder,
        }}
      />
    </View>
  );
};

export default Input;
