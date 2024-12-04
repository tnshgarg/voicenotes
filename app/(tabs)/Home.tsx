import { StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { Header } from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={styles.parent}>
      <ThemedView style={styles.container}>
        <Header title="VoiceNotes" />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  parent: {
    backgroundColor: "white",
  },
});
