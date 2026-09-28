import { StyleSheet, TextInput, View } from "react-native";

import { useTheme } from "../context/ThemeContext";
import { ThemedText } from "./ThemedText";

type TextFieldProps = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  multiline?: boolean;
};

export function TextField({ label, placeholder, value, onChangeText, multiline = false }: TextFieldProps) {
  const { theme } = useTheme();

  return (
    <View style={styles.field}>
      <ThemedText variant="heading">{label}</ThemedText>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        placeholderTextColor={theme.colors.textMuted}
        cursorColor={theme.colors.accent}
        selectionColor={theme.colors.accent}
        style={[
          styles.input,
          multiline ? styles.boxed : styles.underlined,
          {
            color: theme.colors.text,
            borderColor: theme.colors.border,
            backgroundColor: multiline ? theme.colors.surface : "transparent",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    gap: 8,
  },
  input: {
    fontSize: 16,
  },
  underlined: {
    borderBottomWidth: 1.5,
    paddingVertical: 8,
  },
  boxed: {
    minHeight: 120,
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    textAlignVertical: "top",
  },
});
