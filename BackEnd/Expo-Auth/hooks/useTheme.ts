import { Light, Dark } from "@/constants/Colors";
import { useColorScheme } from "react-native";

export default function useTheme() {
  const theme = useColorScheme();
  return theme === "dark" ? Dark : Light;
}
