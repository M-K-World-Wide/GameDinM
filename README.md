# GameDin Mobile

A comprehensive, cross-platform gaming ecosystem featuring:
- **Unity Game Engine**: Multi-platform game logic and builds (iOS, Android, Windows, macOS, Linux, UWP, Steam, Nintendo Switch, Xbox Store)
- **iOS Mobile App**: Modern SwiftUI-based social gaming app (authentication, profiles, social features)
- **Web Frontend**: Modern, minimalist website built with React, TypeScript, AWS Amplify, Vite, and Tailwind CSS

---

## 🏗️ Architecture Overview

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

### Web Frontend (React + Amplify)
- **src/**: React app source code (components, pages, hooks, services)
- **public/**: Static assets and manifest
- **Features**:
  - Modern, minimalist design (dark theme)
  - Built with React, TypeScript, Vite
  - Smooth animations (Framer Motion)
  - Responsive layout (Tailwind CSS)
  - AWS Amplify integration
  - Fast development and deployment

---

## 📱 Mobile App Features
- Anonymous and Apple ID sign-in
- Customizable player profiles
- Reputation scoring system
- Platform preferences
- Game feed and discovery
- Player following and challenges
- Memory timeline for achievements
- Inbox for communications
- Steam marketplace integration
- Game memory tracking
- Cross-platform compatibility

## 🌐 Web Frontend Features
- Modern, minimalist landing page
- About, Contact, and NotFound pages
- Responsive, animated UI
- AWS Amplify hosting and backend integration
- Easy local development and production build

---

## 🚀 Getting Started

### Unity Setup
1. Install [Unity Hub](https://unity.com/download)
2. Open this project in Unity Hub
3. Switch to your target platform in Build Settings
4. See `/Docs/PLATFORMS.md` for platform-specific build instructions

### iOS Setup
1. Open the project in Xcode
2. Configure your development team
3. Build and run on simulator or device

### Web Frontend Setup
1. `cd` into the project root
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`
4. Build for production: `npm run build`

---

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
├── auth/                    # iOS authentication
├── src/                     # Web frontend source code
├── public/                  # Web frontend static assets
├── package.json             # Web frontend dependencies
├── tailwind.config.js       # Tailwind CSS config
├── vite.config.ts           # Vite config
└── ...                      # Other config and infra files
```

---

## 🎯 Supported Platforms
- **Unity**: iOS, Android, Windows, macOS, Linux, UWP, Steam, Nintendo Switch, Xbox Store
- **iOS**: iOS 16.0+ (iPhone, iPad)
- **Web**: Modern browsers (React, Vite, Amplify)

---

## 📚 Documentation
- **ARCHITECTURE.md**: Detailed system design
- **CHANGELOG.md**: Version history and updates
- **PLATFORMS.md**: Platform-specific build guides
- **@docs/**: Additional documentation

---

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Follow the coding standards
4. Add comprehensive documentation
5. Submit a pull request

---

## 📄 License
This project is licensed under the MIT License (GameDin Mobile) and Apache-2.0 (Web Frontend) - see LICENSE files for details.

---

**Built with ❤️ for the gaming community**
