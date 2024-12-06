import { ScrollView, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { useColorScheme } from "@/hooks/useColorScheme";

export function BodyView() {
  const theme = useColorScheme() ?? "light";

  return (
    <ScrollView
      contentContainerStyle={styles.scrollview}
      style={styles.container}
    >
      <ThemedText style={styles.text}>Tanish</ThemedText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    color: "black",
    fontSize: 40,
    padding: 100,
  },
  scrollview: {
    // flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
