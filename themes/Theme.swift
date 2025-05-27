import SwiftUI

/// Theme provides the color palette and style constants for GameDin.
/// - Quantum Documentation: Centralizes all theme colors and style settings.
/// - Feature Context: Used throughout the app for consistent look and feel.
/// - Dependency Listings: Uses SwiftUI Color.
/// - Usage Example: Theme.accent, Theme.background, etc.
/// - Performance Considerations: Static properties, no runtime cost.
/// - Security Implications: None.
/// - Changelog: Updated to include styles for tags, pill buttons, and editable fields.
struct Theme {
    static let accent = Color("AccentColor") // Electric blue
    static let neonGreen = Color(red: 0.0, green: 1.0, blue: 0.5)
    static let ultraviolet = Color(red: 0.5, green: 0.0, blue: 1.0)
    static let background = Color(red: 0.07, green: 0.09, blue: 0.13)
    static let cardBackground = Color(red: 0.13, green: 0.15, blue: 0.22)

    // Styles for tags
    static let tagStyle: some ViewModifier = TagStyle()
    // Styles for pill buttons
    static let pillButtonStyle: some ViewModifier = PillButtonStyle()
    // Styles for editable fields
    static let editableFieldStyle: some ViewModifier = EditableFieldStyle()
}

struct TagStyle: ViewModifier {
    func body(content: Content) -> some View {
        content
            .padding(8)
            .background(Theme.cardBackground)
            .foregroundColor(.white)
            .clipShape(Capsule())
    }
}

struct PillButtonStyle: ViewModifier {
    func body(content: Content) -> some View {
        content
            .padding()
            .background(Theme.accent)
            .foregroundColor(.black)
            .clipShape(Capsule())
            .shadow(color: Theme.accent.opacity(0.5), radius: 8, x: 0, y: 4)
    }
}

struct EditableFieldStyle: ViewModifier {
    func body(content: Content) -> some View {
        content
            .padding()
            .background(Theme.cardBackground)
            .foregroundColor(.white)
            .cornerRadius(8)
            .overlay(
                RoundedRectangle(cornerRadius: 8)
                    .stroke(Theme.accent, lineWidth: 2)
            )
    }
} 