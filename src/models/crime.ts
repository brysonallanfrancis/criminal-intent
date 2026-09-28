export type Crime = {
  id: string;
  title: string;
  details: string;
  date: string;
  solved: boolean;
  photoUri: string | null;
};

export function createCrime(id: string): Crime {
  return {
    id,
    title: "",
    details: "",
    date: new Date().toISOString(),
    solved: false,
    photoUri: null,
  };
}

export function displayTitle(crime: Crime) {
  return crime.title.trim() || "Untitled crime";
}
