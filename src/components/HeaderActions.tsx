import { randomUUID } from "expo-crypto";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

import { HeaderIconButton } from "./HeaderIconButton";

export function SettingsButton() {
  const router = useRouter();

  return (
    <HeaderIconButton icon="cog-outline" label="Settings" onPress={() => router.push("/settings")} />
  );
}

export function NewCrimeButton() {
  const router = useRouter();

  function openNewCrime() {
    router.push({ pathname: "/crime/[id]", params: { id: randomUUID() } });
  }

  return <HeaderIconButton icon="plus" label="New crime" onPress={openNewCrime} />;
}

export function IndexHeaderActions() {
  return (
    <View style={styles.row}>
      <NewCrimeButton />
      <SettingsButton />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});
