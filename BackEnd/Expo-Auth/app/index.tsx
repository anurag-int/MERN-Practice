import React, { useEffect } from "react";

import { View } from "react-native";
import Loading from "@/components/Loading";
import { useRouter } from "expo-router";

export default function TabOneScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/auth");
    }, 2000);
  }, []);

  return (
    <View>
      <Loading />
    </View>
  );
}
