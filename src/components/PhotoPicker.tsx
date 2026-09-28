import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { launchImageLibraryAsync } from "expo-image-picker";
import { Pressable, StyleSheet, View } from "react-native";

import { useTheme } from "../context/ThemeContext";

type PhotoPickerProps = {
  photoUri: string | null;
  onChange: (photoUri: string) => void;
};

export function PhotoPicker({ photoUri, onChange }: PhotoPickerProps) {
  const { theme } = useTheme();

  async function pickPhoto() {
    const result = await launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      onChange(result.assets[0].uri);
    }
  }

  return (
    <View style={styles.container}>
      <View style={[styles.photo, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border }]}>
        {photoUri ? (
          <Image source={{ uri: photoUri }} style={StyleSheet.absoluteFill} contentFit="cover" />
        ) : (
          <MaterialCommunityIcons name="image-outline" size={40} color={theme.colors.textMuted} />
        )}
      </View>
      <Pressable
        onPress={pickPhoto}
        accessibilityRole="button"
        accessibilityLabel="Choose a photo"
        android_ripple={{ color: theme.colors.border }}
        style={[styles.cameraButton, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border }]}
      >
        <MaterialCommunityIcons name="camera" size={24} color={theme.colors.text} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    gap: 10,
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  cameraButton: {
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
