# @lessons-learned.md

This file captures lessons learned, best practices, and architectural decisions for the GameDin iOS app. Updated in real time.

## Initial Lessons
- PowerShell mkdir requires single folder creation per command for reliability.
- Quantum-detailed documentation improves onboarding and maintainability.
- Modular MVVM structure supports scalability and future Firebase/Supabase integration.

## Latest Lessons
- Use of Combine for reactive updates enhances user experience and code maintainability.
- Local storage with UserDefaults is efficient for non-sensitive data.
- Modular design allows for easy integration of new features and services.

## Refactoring Insights
- **Mixed Architecture Challenge**: Unity and iOS components should be separated for clarity
- **Mobile-First Approach**: iOS SwiftUI components are well-structured and ready for mobile optimization
- **Cross-Platform Strategy**: Unity build tools provide excellent multi-platform support
- **Documentation Standards**: Quantum-detailed documentation is essential for complex projects
- **GitHub Preparation**: Clean project structure and comprehensive README are crucial for repository success
- **Architecture Separation**: Clear boundaries between game engine and mobile app components improve maintainability 