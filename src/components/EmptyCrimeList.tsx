import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

import { useTheme } from "../context/ThemeContext";
import { ThemedText } from "./ThemedText";

export function EmptyCrimeList() {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="file-search-outline" size={64} color={theme.colors.textMuted} />
      <ThemedText variant="heading">No crimes yet</ThemedText>
      <ThemedText muted style={styles.hint}>
        Tap the + button to report your first office crime.
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
    gap: 8,
  },
  hint: {
    textAlign: "center",
  },
});
