import Storage from "expo-sqlite/kv-store";

import type { Crime } from "../models/crime";
import { storePhoto } from "./photos";

const CRIME_KEY_PREFIX = "crime:";

export function getCrime(id: string): Crime | null {
  const json = Storage.getItemSync(CRIME_KEY_PREFIX + id);
  return json ? JSON.parse(json) : null;
}

export function getAllCrimes(): Crime[] {
  const crimeKeys = Storage.getAllKeysSync().filter((key) => key.startsWith(CRIME_KEY_PREFIX));
  const crimes: Crime[] = crimeKeys.map((key) => JSON.parse(Storage.getItemSync(key) as string));
  return crimes.sort((a, b) => b.date.localeCompare(a.date));
}

export function saveCrime(crime: Crime): Crime {
  const savedCrime = {
    ...crime,
    photoUri: crime.photoUri ? storePhoto(crime.photoUri) : null,
  };

  Storage.setItemSync(CRIME_KEY_PREFIX + crime.id, JSON.stringify(savedCrime));
  return savedCrime;
}
