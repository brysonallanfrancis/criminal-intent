import { StyleSheet, Text, type TextProps } from "react-native";

import { useTheme } from "../context/ThemeContext";

type ThemedTextProps = TextProps & {
  variant?: "title" | "heading" | "body" | "caption";
  muted?: boolean;
};

export function ThemedText({ variant = "body", muted = false, style, ...props }: ThemedTextProps) {
  const { theme } = useTheme();
  const color = muted ? theme.colors.textMuted : theme.colors.text;

  return <Text style={[styles[variant], { color }, style]} {...props} />;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "700",
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
  },
  body: {
    fontSize: 16,
  },
  caption: {
    fontSize: 14,
  },
});
