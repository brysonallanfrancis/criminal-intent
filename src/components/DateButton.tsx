import { DatePickerDialog, Host } from "@expo/ui/jetpack-compose";
import { useState } from "react";
import { StyleSheet } from "react-native";

import { useTheme } from "../context/ThemeContext";
import { formatDate, fromPickerDate, toPickerDate } from "../utils/dates";
import { PrimaryButton } from "./PrimaryButton";

type DateButtonProps = {
  date: string;
  onChange: (date: string) => void;
};

export function DateButton({ date, onChange }: DateButtonProps) {
  const { theme } = useTheme();
  const { colors } = theme;
  const [pickerOpen, setPickerOpen] = useState(false);

  function selectDate(pickedDate: Date) {
    onChange(fromPickerDate(pickedDate, date));
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
      {pickerOpen && (
        <Host
          style={styles.host}
          colorScheme={theme.isDark ? "dark" : "light"}
          seedColor={colors.accent}
        >
          <DatePickerDialog
            initialDate={toPickerDate(date)}
            color={colors.accent}
            elementColors={{
              containerColor: colors.surface,
              titleContentColor: colors.textMuted,
              headlineContentColor: colors.text,
              weekdayContentColor: colors.textMuted,
              navigationContentColor: colors.text,
              yearContentColor: colors.text,
              selectedYearContentColor: colors.onAccent,
              selectedYearContainerColor: colors.accent,
              dayContentColor: colors.text,
              selectedDayContentColor: colors.onAccent,
              selectedDayContainerColor: colors.accent,
              todayContentColor: colors.accent,
              todayDateBorderColor: colors.accent,
            }}
            onDateSelected={selectDate}
            onDismissRequest={() => setPickerOpen(false)}
          />
        </Host>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  host: {
    position: "absolute",
    width: 0,
    height: 0,
  },
});
