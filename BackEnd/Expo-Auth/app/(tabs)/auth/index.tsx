import { Text, View } from "react-native";
import useTheme from "@/hooks/useTheme";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import { Size } from "@/constants/Size";
import OAuthButton from "@/components/OAuthButton";
import { useRouter } from "expo-router";
import RouteButton from "@/components/RouteButton";

const index = () => {
  const router = useRouter();
  const Theme = useTheme();
  return (
    <Container>
      <Heading>Welcome To{"\n"}Expo-Auth</Heading>
      <View
        style={{ marginTop: 40, width: "100%", display: "flex", rowGap: 20 }}
      >
        <Input
          label={"Enter your Email"}
          placeholder="jhon.doe@gmail.com"
          keyboardType="email-address"
        />
        <Input
          label={"Enter Password"}
          placeholder="*********"
          keyboardType="default"
          secureTextEntry={true}
        />
      </View>
      <RouteButton
        title="Agree and Continue"
        onPress={() => router.push("/user")}
      />
      <Text
        style={{
          color: Theme.TextSecondary,
          fontSize: Size.Medium,
          marginTop: 80,
        }}
      >
        Or
      </Text>
      <View
        style={{
          marginTop: 40,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignContent: "center",
          width: "100%",
        }}
      >
        <OAuthButton title="Google" name="logo-google" />
        <OAuthButton title="Facebook" name="logo-facebook" />
      </View>
      <Text
        style={{
          fontSize: Size.Small,
          color: Theme.TextSecondary,
          fontWeight: "300",
          textAlign: "center",
          position: "absolute",
          bottom: 20,
        }}
      >
        By Continuing You{"\n"}To Our{" "}
        <Text style={{ fontWeight: "bold", textDecorationLine: "underline" }}>
          Terms & Conditions
        </Text>
      </Text>
    </Container>
  );
};

export default index;
