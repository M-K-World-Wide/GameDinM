# GameDin iOS App Architecture

## Overview
GameDin is a modular, scalable iOS app using SwiftUI and MVVM. It is designed for social gaming, content sharing, and player discovery.

## Main Components
- **core/**: App entry, global state, and navigation
- **models/**: Data models (e.g., Platform, User)
- **views/**: SwiftUI views for each screen/tab
- **viewmodels/**: Business logic and state for each view
- **services/**: Networking, authentication, and data services
- **components/**: Reusable UI elements (e.g., GameProfileCard)
- **themes/**: Color palette and style constants
- **auth/**: Authentication logic and onboarding

## Flow
- App launches via GameDinApp.swift
- Auth state determines onboarding or main tab view
- TabView manages navigation between Feed, Discover, Profile, Inbox
- All data is mock for now, ready for backend integration

## Documentation
- Quantum-detailed inline comments in all files
- @docs/ is the source of truth for all documentation 