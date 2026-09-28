import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, ScrollView, StyleSheet, View } from "react-native";

import { Checkbox } from "../../components/Checkbox";
import { DateButton } from "../../components/DateButton";
import { PhotoPicker } from "../../components/PhotoPicker";
import { PrimaryButton } from "../../components/PrimaryButton";
import { TextField } from "../../components/TextField";
import { Toast } from "../../components/Toast";
import { createCrime, type Crime } from "../../models/crime";
import { getCrime, saveCrime } from "../../storage/crimes";

export default function CrimeDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [crime, setCrime] = useState(() => getCrime(id) ?? createCrime(id));
  const [showToast, setShowToast] = useState(false);

  function updateCrime(changes: Partial<Crime>) {
    setCrime((current) => ({ ...current, ...changes }));
  }

  function handleSave() {
    setCrime(saveCrime(crime));
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  }

  return (
    <KeyboardAvoidingView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <PhotoPicker photoUri={crime.photoUri} onChange={(photoUri) => updateCrime({ photoUri })} />
          <View style={styles.titleField}>
            <TextField
              label="Title"
              placeholder="Title"
              value={crime.title}
              onChangeText={(title) => updateCrime({ title })}
            />
          </View>
        </View>

        <TextField
          label="Details"
          placeholder="What happened?"
          multiline
          value={crime.details}
          onChangeText={(details) => updateCrime({ details })}
        />

        <DateButton date={crime.date} onChange={(date) => updateCrime({ date })} />

        <Checkbox label="Solved" checked={crime.solved} onChange={(solved) => updateCrime({ solved })} />

        <PrimaryButton label="Save" icon="content-save-outline" onPress={handleSave} />
      </ScrollView>

      {showToast && <Toast message="Crime saved" />}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    padding: 20,
    gap: 24,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  titleField: {
    flex: 1,
  },
});
