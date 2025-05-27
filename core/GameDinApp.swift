import SwiftUI

/// GameDinApp is the main entry point for the GameDin iOS application.
/// - Quantum Documentation: This struct initializes the app, sets up the main TabView, and injects shared environment objects.
/// - Feature Context: Serves as the root of the app, managing navigation and global state.
/// - Dependency Listings: Depends on SwiftUI, and will use view models for each tab.
/// - Usage Example: Launches automatically on app start.
/// - Performance Considerations: Minimal overhead, as it only sets up the root view.
/// - Security Implications: None at this level.
/// - Changelog: Initial creation.
@main
struct GameDinApp: App {
    // AppStorage for login state and user info (secure, persistent)
    @AppStorage("isLoggedIn") private var isLoggedIn: Bool = false
    @AppStorage("displayName") private var displayName: String = ""
    @AppStorage("gamerTag") private var gamerTag: String = ""
    @AppStorage("profilePicURL") private var profilePicURL: String = ""

    // Shared view models (expand as needed)
    @StateObject private var authManager = UserAuthManager()

    var body: some Scene {
        WindowGroup {
            if isLoggedIn {
                MainTabView()
                    .environmentObject(authManager)
            } else {
                OnboardingView()
                    .environmentObject(authManager)
            }
        }
    }
} 