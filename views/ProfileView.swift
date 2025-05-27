import SwiftUI

/// ProfileView displays the user's profile information.
/// - Quantum Documentation: Shows gamer tag, bio, favorite games, platforms, and reputation.
/// - Feature Context: User's personal hub.
/// - Dependency Listings: Uses SwiftUI, ProfileManager, ProfileEditViewModel.
/// - Usage Example: Accessed via the Profile tab.
/// - Performance Considerations: Minimal for static content.
/// - Security Implications: None for mock data.
/// - Changelog: Updated to include edit button and reputation bar.
struct ProfileView: View {
    @State private var profile: PlayerProfile? = ProfileManager.shared.loadProfile()
    @State private var showEditProfile = false

    var body: some View {
        VStack(spacing: 16) {
            if let profile = profile {
                Image(systemName: "person.crop.circle.fill")
                    .resizable()
                    .frame(width: 100, height: 100)
                    .foregroundColor(Theme.accent)
                    .padding(.top)
                Text(profile.gamertag)
                    .font(.title)
                    .foregroundColor(.white)
                Text(profile.bio)
                    .font(.body)
                    .foregroundColor(.gray)
                    .multilineTextAlignment(.center)
                    .padding(.horizontal)
                HStack {
                    ForEach(profile.favoriteGames, id: \.self) { game in
                        Text(game)
                            .font(.caption)
                            .padding(8)
                            .background(Theme.cardBackground)
                            .foregroundColor(.white)
                            .clipShape(Capsule())
                    }
                }
                HStack(spacing: 16) {
                    ForEach(profile.platforms, id: \.self) { platform in
                        PlatformIcon(platform: platform)
                    }
                }
                // Reputation Bar (mock)
                VStack(alignment: .leading) {
                    Text("Reputation: \(profile.reputationScore)")
                        .font(.headline)
                        .foregroundColor(.white)
                    ProgressView(value: Double(profile.reputationScore), total: 100)
                        .progressViewStyle(LinearProgressViewStyle(tint: Theme.accent))
                }
                .padding()
                .background(Theme.cardBackground)
                .cornerRadius(16)
                .padding(.horizontal)
                Spacer()
            } else {
                Text("No profile found")
                    .foregroundColor(.gray)
            }
        }
        .background(Theme.background)
        .navigationBarItems(trailing: Button("Edit") {
            showEditProfile = true
        })
        .sheet(isPresented: $showEditProfile) {
            if let profile = profile {
                ProfileEditView(viewModel: ProfileEditViewModel(profile: profile))
            }
        }
    }
} 