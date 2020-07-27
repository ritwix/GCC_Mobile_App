# GCC_Mobile_App

Mobile application for GCC Credit Suisse 2020
To run,

1. npm install
2. npm start
   in gcc_mobile folder.

## Capacitor set up

Dependencies:

For Android:

- Android Studio

For iOS:

- Xcode
- Cocoapods: a dependency manager for Xcode projects ([installation guide](https://guides.cocoapods.org/using/getting-started.html#installation))

In the root folder of the mobile app, open terminal and run the following:

1. npm install @capacitor/cli @capacitor/core
2. npx cap init
3. ionic build
4. npx cap add android / npx cap add ios
5. ionic capacitor run android (Opens up Android Studio) / ionic capacitor run ios --livereload --external (Opens up Xcode)

Or you can check out the official guide [here](https://capacitorjs.com/docs/getting-started/dependencies)
