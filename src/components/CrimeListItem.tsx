import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

import { useTheme } from "../context/ThemeContext";
import { displayTitle, type Crime } from "../models/crime";
import { formatDate } from "../utils/dates";
import { ThemedText } from "./ThemedText";

type CrimeListItemProps = {
  crime: Crime;
  onPress: (id: string) => void;
};

export function CrimeListItem({ crime, onPress }: CrimeListItemProps) {
  const { theme } = useTheme();

  return (
    <Pressable
      onPress={() => onPress(crime.id)}
      android_ripple={{ color: theme.colors.border }}
      style={styles.row}
    >
      <View style={styles.text}>
        <ThemedText variant="heading" numberOfLines={1}>
          {displayTitle(crime)}
        </ThemedText>
        <ThemedText variant="caption" muted>
          {formatDate(crime.date)}
        </ThemedText>
      </View>
      {crime.solved && (
        <MaterialCommunityIcons
          name="handcuffs"
          size={30}
          color={theme.colors.text}
          accessibilityLabel="Solved"
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    gap: 16,
  },
  text: {
    flex: 1,
    gap: 4,
  },
});
