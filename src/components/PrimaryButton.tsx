import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

import { useTheme } from "../context/ThemeContext";

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  variant?: "filled" | "outlined";
};

export function PrimaryButton({ label, onPress, icon, variant = "filled" }: PrimaryButtonProps) {
  const { theme } = useTheme();
  const filled = variant === "filled";
  const contentColor = filled ? theme.colors.onAccent : theme.colors.accent;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      android_ripple={{ color: theme.colors.border }}
      style={[
        styles.button,
        {
          backgroundColor: filled ? theme.colors.accent : "transparent",
          borderColor: theme.colors.accent,
        },
      ]}
    >
      {icon && <MaterialCommunityIcons name={icon} size={20} color={contentColor} />}
      <Text style={[styles.label, { color: contentColor }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1.5,
    overflow: "hidden",
  },
  label: {
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
});
