import Foundation

/// PlayerProfile represents a user's gaming profile in GameDin.
/// - Quantum Documentation: Stores user identity, preferences, and reputation.
/// - Feature Context: Used for profile display, editing, and future backend sync.
/// - Dependency Listings: Uses Foundation, Codable.
/// - Usage Example: let profile = PlayerProfile(id: UUID(), displayName: "Sunny", gamertag: "Sunny#1234", ...)
/// - Performance Considerations: Lightweight, suitable for local storage.
/// - Security Implications: Non-sensitive data, ready for encryption if needed.
/// - Changelog: Initial creation.
struct PlayerProfile: Codable, Identifiable {
    let id: UUID
    var displayName: String
    var gamertag: String
    var bio: String
    var avatarURL: String
    var favoriteGames: [String]
    var platforms: [Platform]
    var reputationScore: Int
} 