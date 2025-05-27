import SwiftUI

/// OnboardingView allows users to set up their profile on first launch.
/// - Quantum Documentation: Collects display name, gamer tag, and profile pic.
/// - Feature Context: Entry point for new users.
/// - Dependency Listings: Uses UserAuthManager, SwiftUI.
/// - Usage Example: Shown if not logged in.
/// - Performance Considerations: Minimal for form.
/// - Security Implications: Stores only non-sensitive info.
/// - Changelog: Initial creation.
struct OnboardingView: View {
    @EnvironmentObject var authManager: UserAuthManager
    @State private var displayName = ""
    @State private var gamerTag = ""
    @State private var profilePicURL = ""
    @State private var showProfileSetup = false

    var body: some View {
        VStack(spacing: 24) {
            Text("Welcome to GameDin!")
                .font(.largeTitle)
                .foregroundColor(Theme.accent)
                .padding(.top)
            if showProfileSetup {
                TextField("Display Name", text: $displayName)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                    .padding(.horizontal)
                TextField("Gamer Tag", text: $gamerTag)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                    .padding(.horizontal)
                TextField("Profile Pic URL (optional)", text: $profilePicURL)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                    .padding(.horizontal)
                Button(action: {
                    authManager.setProfile(displayName: displayName, gamerTag: gamerTag, profilePicURL: profilePicURL)
                    authManager.signInAnonymously()
                }) {
                    Text("Continue")
                        .padding()
                        .background(Theme.accent)
                        .foregroundColor(.black)
                        .clipShape(Capsule())
                }
            } else {
                Button(action: {
                    showProfileSetup = true
                }) {
                    Text("Sign in Anonymously")
                        .padding()
                        .background(Theme.neonGreen)
                        .foregroundColor(.black)
                        .clipShape(Capsule())
                }
                Button(action: {
                    authManager.signInWithApple()
                }) {
                    Text("Sign in with Apple ID")
                        .padding()
                        .background(Theme.ultraviolet)
                        .foregroundColor(.white)
                        .clipShape(Capsule())
                }
            }
            Spacer()
        }
        .background(Theme.background)
        .ignoresSafeArea()
    }
} 