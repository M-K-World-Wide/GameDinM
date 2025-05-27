import Foundation

/// ProfileManager handles loading, saving, and default creation of PlayerProfile.
/// - Quantum Documentation: Manages local storage of user profiles using UserDefaults.
/// - Feature Context: Used by ProfileView and ProfileEditView.
/// - Dependency Listings: Uses Foundation, UserDefaults.
/// - Usage Example: let profile = ProfileManager.shared.loadProfile()
/// - Performance Considerations: Lightweight, minimal I/O.
/// - Security Implications: Stores non-sensitive data locally.
/// - Changelog: Initial creation.
class ProfileManager {
    static let shared = ProfileManager()
    private let defaults = UserDefaults.standard
    private let profileKey = "playerProfile"

    private init() {}

    func loadProfile() -> PlayerProfile? {
        guard let data = defaults.data(forKey: profileKey) else { return nil }
        return try? JSONDecoder().decode(PlayerProfile.self, from: data)
    }

    func saveProfile(_ profile: PlayerProfile) {
        if let data = try? JSONEncoder().encode(profile) {
            defaults.set(data, forKey: profileKey)
        }
    }

    func createDefaultProfile() -> PlayerProfile {
        let profile = PlayerProfile(
            id: UUID(),
            displayName: "Guest",
            gamertag: "Guest#0000",
            bio: "Welcome to GameDin!",
            avatarURL: "default_avatar",
            favoriteGames: ["Apex Legends", "Valorant"],
            platforms: [.pc],
            reputationScore: 0
        )
        saveProfile(profile)
        return profile
    }

    // Mock avatars and platform choices
    let mockAvatars = ["default_avatar", "avatar1", "avatar2"]
    let availablePlatforms: [Platform] = [.pc, .xbox, .switch, .playstation]
} 