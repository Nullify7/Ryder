import { Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 text-2xl items-center justify-center bg-white">
      <Text className="text-rose-400 text-6xl font-black mx-10">MobRyder</Text>
      <StatusBar />
    </SafeAreaView>
  );
}
