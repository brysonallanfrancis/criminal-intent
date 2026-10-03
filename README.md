# Criminal Intent

A React Native app built with Expo for tracking office crimes.

**Designed for Android.**

## Features

- Crime list built with a `FlatList`, with a handcuffs icon on solved crimes
- Crime detail screen with a title, details, a date picker, a solved checkbox, and a photo from the camera roll
- Crimes are saved on the device with `expo-sqlite/kv-store`, keyed by UUID; photos are copied into the app's document directory
- Six themes (three light, three dark) shared through React Context and saved on the device

## Date Picker Test

Tested on an Android emulator (Pixel 7, Android 17) in Expo Go. On Android the date button opens the native Material date picker; the first time it opens it can take a few seconds to appear. On iOS it opens a pop-up with the native iOS calendar picker (`DateButton.tsx`), since the Android picker (`DateButton.android.tsx`) can't run on iOS.

1. Pressing the date button opens the date picker on the crime's current date (Oct 3).

   ![Date picker open on Oct 3](datepicker-1.png)

2. Selecting a new date (Oct 31).

   ![Oct 31 selected in the date picker](datepicker-2.png)

3. After pressing OK, the date button shows the new date.

   ![Date button showing Sat, Oct 31, 2026](datepicker-3.png)

4. After saving and going back, the crime list shows the crime with the new date.

   ![Crime list showing Test Oct 3rd on Sat, Oct 31, 2026](datepicker-4.png)

## Running

```bash
npm install
npx expo start --android
```
