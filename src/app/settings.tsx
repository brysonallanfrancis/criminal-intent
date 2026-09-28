import { ScrollView, StyleSheet, View } from "react-native";

import { ThemedText } from "../components/ThemedText";
import { ThemeOption } from "../components/ThemeOption";
import { useTheme } from "../context/ThemeContext";
import { darkThemes, lightThemes, type Theme } from "../theme/themes";

type ThemeSectionProps = {
  title: string;
  options: Theme[];
};

function ThemeSection({ title, options }: ThemeSectionProps) {
  const { theme, setThemeId } = useTheme();

  return (
    <View style={styles.section}>
      <ThemedText variant="caption" muted style={styles.sectionTitle}>
        {title}
      </ThemedText>
      {options.map((option) => (
        <ThemeOption
          key={option.id}
          option={option}
          selected={option.id === theme.id}
          onSelect={() => setThemeId(option.id)}
        />
      ))}
    </View>
  );
}

export default function SettingsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <ThemedText variant="title">Pick a Theme</ThemedText>
      <ThemeSection title="Light" options={lightThemes} />
      <ThemeSection title="Dark" options={darkThemes} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    gap: 24,
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
});
