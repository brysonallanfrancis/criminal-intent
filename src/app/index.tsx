import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import { CrimeListItem } from "../components/CrimeListItem";
import { EmptyCrimeList } from "../components/EmptyCrimeList";
import { ListSeparator } from "../components/ListSeparator";
import type { Crime } from "../models/crime";
import { getAllCrimes } from "../storage/crimes";

export default function CrimeListScreen() {
  const router = useRouter();
  const [crimes, setCrimes] = useState<Crime[]>([]);

  useFocusEffect(
    useCallback(() => {
      setCrimes(getAllCrimes());
    }, []),
  );

  function openCrime(id: string) {
    router.push({ pathname: "/crime/[id]", params: { id } });
  }

  return (
    <FlatList
      data={crimes}
      keyExtractor={(crime) => crime.id}
      renderItem={({ item }) => <CrimeListItem crime={item} onPress={openCrime} />}
      ItemSeparatorComponent={ListSeparator}
      ListEmptyComponent={EmptyCrimeList}
      contentContainerStyle={styles.content}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    paddingVertical: 8,
  },
});
