### Steps to Installation

1. **Install Android Studio (Iguana - latest version):**

   - Download Android Studio from [this link](https://developer.android.com/studio?gad_source=1&gclid=CjwKCAjwrcKxBhBMEiwAIVF8rEJO74DjypqQ4lZrH1Ah1kxoCnHHPqPoUCFMmmUQ-Ip-sm9TdGRqDhoCeX4QAvD_BwE&gclsrc=aw.ds).
   - Follow the installation instructions specific to your operating system.

2. **Install Android SDK (Android 14, API level 34):**

   - Open Android Studio.
   - Go to `Tools` > `SDK Manager`.
   - Make sure that the Android 14 SDK (API level 34) is installed. If not, select it and click on the "Apply" or "Install" button to install it.

3. **Register ANDROID_HOME environment variable:**

   - Follow the instructions provided in the [React Native documentation](https://reactnative.dev/docs/environment-setup) to set up the `ANDROID_HOME` environment variable. This variable should point to the location where your Android SDK is installed.

4. **Add platform-tools to Path:**

   - Follow the instructions provided in the [React Native documentation](https://reactnative.dev/docs/environment-setup) to add the `platform-tools` directory to your system's PATH environment variable. This directory is typically located inside the Android SDK installation directory.

5. **Install Node modules:**

   - Open a terminal.
   - Navigate to the root directory of your React Native project (`user-contact-react-native`).
   - Run the following command to install the required Node modules:
     ```bash
     cd user-contact-react-native
     npm install
     ```

6. **Launch Emulator or connect physical device:**

   - Launch an Android emulator using Android Studio's AVD Manager, or connect a physical Android device to your computer using a USB cable.

7. **Run the project:**
   - Once the emulator is running or the physical device is connected:
     ```bash
     npm start
     ```
   - This command will start the Metro Bundler, which bundles your JavaScript code, and provide options to run your app on the emulator or physical device.

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
