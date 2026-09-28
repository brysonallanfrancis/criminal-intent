# Criminal Intent

A React Native app built with Expo for tracking office crimes.

**Designed for Android.**

## Features

- Crime list built with a `FlatList`, with a handcuffs icon on solved crimes
- Crime detail screen with a title, details, a date picker, a solved checkbox, and a photo from the camera roll
- Crimes are saved on the device with `expo-sqlite/kv-store`, keyed by UUID; photos are copied into the app's document directory
- Six themes (three light, three dark) shared through React Context and saved on the device

## Running

```bash
npm install
npx expo start --android
```
