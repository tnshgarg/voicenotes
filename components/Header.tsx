import { PropsWithChildren, useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import {} from "lucide-react-native";

export function Header({ title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? "light";

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.parentContainer}>
        <ThemedView style={styles.childContainer}>
          <Image
            source={require("@/assets/images/icon.png")}
            style={styles.logo}
          />
          <ThemedText style={styles.heading}>{title}</ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {},
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 5,
  },
  childContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  parentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
