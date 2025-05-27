import Foundation
import SwiftUI

/// UserAuthManager handles authentication logic for GameDin.
/// - Quantum Documentation: Manages login state, supports anonymous and Apple ID sign in, and stores user info securely.
/// - Feature Context: Used by GameDinApp and onboarding.
/// - Dependency Listings: Uses AppStorage, Combine, and SwiftUI.
/// - Usage Example: @StateObject var authManager = UserAuthManager()
/// - Performance Considerations: Lightweight, async-ready.
/// - Security Implications: Stores only non-sensitive info in AppStorage.
/// - Changelog: Initial creation.
class UserAuthManager: ObservableObject {
    @AppStorage("isLoggedIn") private var isLoggedIn: Bool = false
    @AppStorage("displayName") private var displayName: String = ""
    @AppStorage("gamerTag") private var gamerTag: String = ""
    @AppStorage("profilePicURL") private var profilePicURL: String = ""

    @Published var isLoading = false
    @Published var errorMessage: String? = nil

    /// Anonymous login (mock)
    func signInAnonymously() {
        isLoading = true
        DispatchQueue.main.asyncAfter(deadline: .now() + 1) {
            self.isLoggedIn = true
            self.displayName = "Guest"
            self.gamerTag = "Guest#0000"
            self.profilePicURL = ""
            self.isLoading = false
        }
    }

    /// Apple ID sign in (mock)
    func signInWithApple() {
        isLoading = true
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) {
            self.isLoggedIn = true
            self.displayName = "AppleUser"
            self.gamerTag = "Apple#1234"
            self.profilePicURL = ""
            self.isLoading = false
        }
    }

    /// Set user profile info on first launch
    func setProfile(displayName: String, gamerTag: String, profilePicURL: String) {
        self.displayName = displayName
        self.gamerTag = gamerTag
        self.profilePicURL = profilePicURL
    }

    /// Sign out
    func signOut() {
        isLoggedIn = false
        displayName = ""
        gamerTag = ""
        profilePicURL = ""
    }
} 