import { randomUUID } from "expo-crypto";
import { Directory, File, Paths } from "expo-file-system";

const photosDirectory = new Directory(Paths.document, "photos");

export function storePhoto(photoUri: string) {
  if (photoUri.startsWith(photosDirectory.uri)) {
    return photoUri;
  }

  photosDirectory.create({ idempotent: true });
  const storedPhoto = new File(photosDirectory, randomUUID() + Paths.extname(photoUri));
  new File(photoUri).copySync(storedPhoto);
  return storedPhoto.uri;
}
