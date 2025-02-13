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
        <ThemedView style={styles.childContainer2}>
          <ThemedView style={styles.profileContainer}>
            <ThemedText style={styles.profileText}>T</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: "Outfit",
    fontSize: 16,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginRight: 5,
  },
  childContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  childContainer2: {
    flexDirection: "row",
    alignItems: "center",
  },
  parentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  profileContainer: {
    width: 35,
    height: 35,
    borderRadius: "50%",
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  profileText: {
    fontSize: 16,
    fontFamily: "Outfit",
    fontWeight: "400",
    color: "white",
  },
});
