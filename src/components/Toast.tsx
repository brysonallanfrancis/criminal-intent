import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import { useTheme } from "../context/ThemeContext";

export function Toast({ message }: { message: string }) {
  const { theme } = useTheme();

  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      style={[styles.toast, { backgroundColor: theme.colors.text }]}
    >
      <MaterialCommunityIcons name="check-circle" size={20} color={theme.colors.background} />
      <Text style={[styles.message, { color: theme.colors.background }]}>{message}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  toast: {
    position: "absolute",
    bottom: 48,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 24,
    elevation: 6,
  },
  message: {
    fontSize: 15,
    fontWeight: "600",
  },
});
