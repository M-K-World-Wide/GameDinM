# Platform-Specific Build Guide

This document provides detailed instructions for building and deploying the GameDin Mobile project across all supported platforms.

## iOS
- **Requirements**: macOS, Xcode, Apple Developer Account
- **Build Steps**:
  1. Open the project in Unity and switch the build target to iOS.
  2. Configure player settings (bundle identifier, version, etc.).
  3. Build the project and open the generated Xcode project.
  4. Archive and distribute via App Store Connect.

## Android
- **Requirements**: Android SDK, JDK, Google Play Developer Account
- **Build Steps**:
  1. Open the project in Unity and switch the build target to Android.
  2. Configure player settings (package name, version, etc.).
  3. Build the APK or AAB file.
  4. Upload to Google Play Console for distribution.

## Windows
- **Requirements**: Windows OS, Visual Studio (optional)
- **Build Steps**:
  1. Open the project in Unity and switch the build target to Windows.
  2. Configure player settings (company name, version, etc.).
  3. Build the executable (.exe) file.
  4. Distribute via Steam or other platforms.

## macOS
- **Requirements**: macOS, Xcode (optional)
- **Build Steps**:
  1. Open the project in Unity and switch the build target to macOS.
  2. Configure player settings (company name, version, etc.).
  3. Build the .app file.
  4. Distribute via Steam or other platforms.

## Linux
- **Requirements**: Linux OS
- **Build Steps**:
  1. Open the project in Unity and switch the build target to Linux.
  2. Configure player settings (company name, version, etc.).
  3. Build the executable file.
  4. Distribute via Steam or other platforms.

## UWP (Windows Store, Xbox)
- **Requirements**: Windows OS, Visual Studio, Windows Developer Account
- **Build Steps**:
  1. Open the project in Unity and switch the build target to UWP.
  2. Configure player settings (package name, version, etc.).
  3. Build the UWP project and open in Visual Studio.
  4. Deploy to Windows Store or Xbox.

## Steam
- **Requirements**: Steamworks SDK, Steam Partner Account
- **Build Steps**:
  1. Build for Windows, macOS, or Linux as per the respective platform guide.
  2. Integrate Steamworks SDK for achievements, leaderboards, etc.
  3. Upload builds to Steam Partner Portal.

## Nintendo Switch
- **Requirements**: Nintendo Developer Account, Switch SDK
- **Build Steps**:
  1. Open the project in Unity and switch the build target to Nintendo Switch.
  2. Configure player settings (company name, version, etc.).
  3. Build the project and deploy via Nintendo's developer portal.

## Xbox Store
- **Requirements**: Xbox Developer Account, Xbox SDK
- **Build Steps**:
  1. Open the project in Unity and switch the build target to Xbox.
  2. Configure player settings (company name, version, etc.).
  3. Build the project and deploy via Xbox Developer Portal.

## Troubleshooting
- **Common Issues**:
  - Missing SDKs or tools
  - Incorrect player settings
  - Build errors
- **Solutions**:
  - Verify all required tools and SDKs are installed
  - Double-check player settings
  - Review Unity console for error messages

## Additional Resources
- [Unity Documentation](https://docs.unity3d.com/)
- [Platform-Specific SDKs](https://unity.com/download)
- [Steamworks Documentation](https://partner.steamgames.com/doc/home)
- [Nintendo Developer Portal](https://developer.nintendo.com/)
- [Xbox Developer Portal](https://developer.microsoft.com/xbox) 