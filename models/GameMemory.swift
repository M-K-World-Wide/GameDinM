import Foundation

/// GameMemory represents a player's memory or achievement in a game.
/// - Quantum Documentation: Stores date, caption, tag, clipURL, and screenshotURL.
/// - Feature Context: Used for displaying player memories in MemoryTimelineView.
/// - Dependency Listings: Uses Foundation, Codable.
/// - Usage Example: let memory = GameMemory(date: "Oct 2023", caption: "Joined Lunar Guild", tag: "Guild", clipURL: "", screenshotURL: "")
/// - Performance Considerations: Lightweight, suitable for local storage.
/// - Security Implications: Non-sensitive data, ready for encryption if needed.
/// - Changelog: Initial creation.
struct GameMemory: Codable, Identifiable {
    let id: UUID
    let date: String
    let caption: String
    let tag: String
    let clipURL: String
    let screenshotURL: String
} 