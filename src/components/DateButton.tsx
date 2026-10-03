import { DateTimePicker } from "@expo/ui/community/datetime-picker";
import { useState } from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";

import { useTheme } from "../context/ThemeContext";
import { formatDate } from "../utils/dates";
import { PrimaryButton } from "./PrimaryButton";

type DateButtonProps = {
  date: string;
  onChange: (date: string) => void;
};

export function DateButton({ date, onChange }: DateButtonProps) {
  const { theme } = useTheme();
  const [pickerOpen, setPickerOpen] = useState(false);

  function selectDate(pickedDate: Date) {
    onChange(pickedDate.toISOString());
    setPickerOpen(false);
  }

  return (
    <>
      <PrimaryButton
        label={formatDate(date)}
        icon="calendar-month-outline"
        variant="outlined"
        onPress={() => setPickerOpen(true)}
      />
      <Modal
        visible={pickerOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setPickerOpen(false)}
      >
        <View style={styles.overlay}>
          <Pressable style={styles.backdrop} onPress={() => setPickerOpen(false)} />
          <View style={[styles.card, { backgroundColor: theme.colors.surface }]}>
            <DateTimePicker
              value={new Date(date)}
              display="inline"
              themeVariant={theme.isDark ? "dark" : "light"}
              accentColor={theme.colors.accent}
              onChange={(event, pickedDate) => pickedDate && selectDate(pickedDate)}
            />
            <PrimaryButton label="Cancel" variant="outlined" onPress={() => setPickerOpen(false)} />
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  card: {
    borderRadius: 20,
    padding: 16,
    gap: 12,
  },
});
