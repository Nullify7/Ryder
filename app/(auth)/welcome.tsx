import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Href, router } from "expo-router";

const Welcome = () => {
  return (
    <SafeAreaView className="h-full flex items-center justify-center">
      <TouchableOpacity
        className="w-full flex justify-end items-end p-5"
        onPress={() => {
          router.replace("/(auth)/sign-up" as Href);
        }}
      >
        <Text className="text-black font-JakartaBold">Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Welcome;
