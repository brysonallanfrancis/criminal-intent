import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

import { useTheme } from "../context/ThemeContext";
import type { Theme } from "../theme/themes";
import { ThemedText } from "./ThemedText";

type ThemeOptionProps = {
  option: Theme;
  selected: boolean;
  onSelect: () => void;
};

export function ThemeOption({ option, selected, onSelect }: ThemeOptionProps) {
  const { theme } = useTheme();

  return (
    <Pressable
      onPress={onSelect}
      accessibilityRole="radio"
      accessibilityState={{ selected }}
      android_ripple={{ color: theme.colors.border }}
      style={[
        styles.option,
        {
          backgroundColor: theme.colors.surface,
          borderColor: selected ? theme.colors.accent : theme.colors.border,
        },
      ]}
    >
      <View style={[styles.swatch, { backgroundColor: option.colors.background, borderColor: theme.colors.border }]}>
        <View style={[styles.swatchHeader, { backgroundColor: option.colors.header }]} />
        <View style={[styles.swatchAccent, { backgroundColor: option.colors.accent }]} />
      </View>
      <ThemedText variant="heading" style={styles.name}>
        {option.name}
      </ThemedText>
      {selected && <MaterialCommunityIcons name="check-circle" size={24} color={theme.colors.accent} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 14,
    borderRadius: 14,
    borderWidth: 2,
    overflow: "hidden",
  },
  swatch: {
    width: 44,
    height: 44,
    borderRadius: 10,
    borderWidth: 1,
    overflow: "hidden",
    justifyContent: "space-between",
  },
  swatchHeader: {
    height: 14,
  },
  swatchAccent: {
    height: 8,
    marginHorizontal: 6,
    marginBottom: 6,
    borderRadius: 4,
  },
  name: {
    flex: 1,
  },
});
