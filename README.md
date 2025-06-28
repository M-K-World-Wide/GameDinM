# GameDin Mobile

A comprehensive gaming platform that combines Unity-based game development with a modern iOS mobile app for social gaming experiences.

## 🎮 Project Overview

GameDin Mobile is a cross-platform gaming ecosystem that consists of:

- **Unity Game Engine**: Multi-platform game development with support for iOS, Android, Windows, macOS, Linux, UWP, Steam, Nintendo Switch, and Xbox Store
- **iOS Mobile App**: Modern SwiftUI-based social gaming app with authentication, profiles, and social features

## 🏗️ Architecture

### Unity Components (Game Engine)
- **Core**: Game management and initialization
- **Platforms**: Platform-specific logic and build configurations
- **UI**: Game interface management
- **Utils**: Logging and utility functions
- **Editor**: Build tools and platform validation

### iOS Components (Mobile App)
- **Core**: App initialization and main entry point
- **Models**: Data structures for profiles, memories, and platforms
- **Views**: SwiftUI user interfaces
- **ViewModels**: MVVM architecture for business logic
- **Services**: Authentication, profile management, and SSO
- **Components**: Reusable UI components
- **Themes**: Consistent styling and design system

## 📱 Mobile App Features

### Authentication & Profiles
- Anonymous and Apple ID sign-in
- Customizable player profiles
- Reputation scoring system
- Platform preferences

### Social Features
- Game feed and discovery
- Player following and challenges
- Memory timeline for achievements
- Inbox for communications

### Gaming Integration
- Steam marketplace integration
- Game memory tracking
- Platform-specific features
- Cross-platform compatibility

## 🚀 Getting Started

### Prerequisites
- **For Unity Development**: Unity Hub and Unity Editor (LTS recommended)
- **For iOS Development**: Xcode 14+, iOS 16+
- **For Android Development**: Android Studio, Android SDK

### Unity Setup
1. Install [Unity Hub](https://unity.com/download)
2. Open this project in Unity Hub
3. Switch to your target platform in Build Settings
4. See `/Docs/PLATFORMS.md` for platform-specific build instructions

### iOS Setup
1. Open the project in Xcode
2. Configure your development team
3. Build and run on simulator or device

### Android Setup
1. Open the project in Android Studio
2. Configure your signing keys
3. Build APK or AAB for distribution

## 📁 Project Structure

```
GameDin Mobile/
├── @docs/                    # Project documentation
├── @memories.md             # Session memory and context
├── @lessons-learned.md      # Best practices and insights
├── @scratchpad.md           # Development notes
├── Assets/                  # Unity game assets
├── Scripts/                 # Unity C# scripts
│   ├── Core/               # Game management
│   ├── Platforms/          # Platform-specific logic
│   ├── UI/                 # Game UI management
│   └── Utils/              # Utility functions
├── Editor/                  # Unity editor scripts
│   └── BuildTools/         # Build automation
├── Builds/                  # Output builds
├── Plugins/                 # Third-party plugins
├── core/                    # iOS app core
├── models/                  # iOS data models
├── views/                   # iOS SwiftUI views
├── viewmodels/              # iOS MVVM view models
├── services/                # iOS business logic
├── components/              # iOS reusable components
├── themes/                  # iOS styling
└── auth/                    # iOS authentication
```

## 🎯 Supported Platforms

### Unity Game Engine
- **Mobile**: iOS, Android
- **Desktop**: Windows, macOS, Linux
- **Console**: Nintendo Switch, Xbox Store
- **Store**: Steam, UWP (Windows Store)

### iOS Mobile App
- **iOS**: 16.0+
- **Devices**: iPhone, iPad
- **Features**: SwiftUI, Combine, Core Data

## 🔧 Build & Deployment

### Unity Builds
Use the custom build tools in `Editor/BuildTools/`:
- Platform-specific configurations
- Automated build pipelines
- Validation and testing

### iOS Deployment
- App Store Connect integration
- TestFlight distribution
- Code signing automation

### Android Deployment
- Google Play Console integration
- Internal testing tracks
- Production releases

## 📚 Documentation

- **ARCHITECTURE.md**: Detailed system design
- **CHANGELOG.md**: Version history and updates
- **PLATFORMS.md**: Platform-specific build guides
- **@docs/**: Additional documentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Follow the coding standards
4. Add comprehensive documentation
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Check the documentation in `@docs/`
- Review platform-specific guides
- Open an issue for bugs or feature requests

## 🔮 Roadmap

- [ ] Enhanced social features
- [ ] Real-time multiplayer support
- [ ] Advanced analytics
- [ ] Cross-platform cloud saves
- [ ] AI-powered game recommendations
- [ ] Blockchain integration for digital assets

---

**Built with ❤️ for the gaming community** 