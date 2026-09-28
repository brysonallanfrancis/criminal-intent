import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

import { useTheme } from "../context/ThemeContext";

type HeaderIconButtonProps = {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  label: string;
  onPress: () => void;
};

export function HeaderIconButton({ icon, label, onPress }: HeaderIconButtonProps) {
  const { theme } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={8}
      android_ripple={{ color: theme.colors.border, borderless: true, radius: 22 }}
      style={styles.button}
    >
      <MaterialCommunityIcons name={icon} size={26} color={theme.colors.headerText} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 6,
  },
});
