export function formatDate(isoDate: string) {
  return new Date(isoDate).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function toPickerDate(isoDate: string) {
  const date = new Date(isoDate);
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())).toISOString();
}

export function fromPickerDate(pickedDate: Date, originalIsoDate: string) {
  const date = new Date(originalIsoDate);
  date.setFullYear(pickedDate.getUTCFullYear(), pickedDate.getUTCMonth(), pickedDate.getUTCDate());
  return date.toISOString();
}
