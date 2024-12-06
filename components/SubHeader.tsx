import { PropsWithChildren, useState } from "react";
import { Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Filter, Search } from "lucide-react-native";

export function SubHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? "light";

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.parentContainer}>
        <ThemedView style={styles.searchContainer}>
          <Search color={"gray"} size={20} />
          <TextInput style={styles.searchInput} placeholder="Search" />
        </ThemedView>
        <ThemedView style={styles.childContainer2}>
          <ThemedView style={styles.profileContainer}>
            <Filter color={"black"} size={20} style={styles.subHeaderIcon} />
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
    paddingTop: 20,
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
    paddingLeft: 10,
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
    borderRadius: "20%",
    backgroundColor: "#f5f5f5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  profileText: {
    fontSize: 20,
    fontFamily: "Outfit",
    fontWeight: "900",
    color: "white",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    flex: 1,
    padding: 10,
    borderRadius: 12,
  },
  searchInput: {
    marginLeft: 6,
  },
  subHeaderIcon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },
});
