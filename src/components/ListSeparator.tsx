import { StyleSheet, View } from "react-native";

import { useTheme } from "../context/ThemeContext";

export function ListSeparator() {
  const { theme } = useTheme();

  return <View style={[styles.separator, { backgroundColor: theme.colors.border }]} />;
}

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 20,
  },
});
