import { StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { Header } from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { SubHeader } from "@/components/SubHeader";
import { BodyView } from "@/components/BodyView";

export default function Home() {
  return (
    <SafeAreaView style={styles.parent}>
      <ThemedView style={styles.container}>
        <Header title="Voicenotes" />
        <SubHeader />
        <ThemedView style={styles.bodyView}>
          <BodyView />
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  parent: {
    backgroundColor: "white",
    flex: 1,
  },
  bodyView: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
    height: 200,
  },
});
