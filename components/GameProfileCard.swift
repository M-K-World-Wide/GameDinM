import SwiftUI

/// GameProfileCard displays a player's main game, role, and platform, with follow/challenge actions.
/// - Quantum Documentation: Reusable card for player/game info.
/// - Feature Context: Used in feed, discovery, and profiles.
/// - Dependency Listings: Uses PlatformIcon, Theme, SwiftUI.
/// - Usage Example: GameProfileCard(gameTitle:..., mainRole:..., platform:..., ...)
/// - Performance Considerations: Lightweight, optimized for lists.
/// - Security Implications: None for mock data.
/// - Changelog: Initial creation.
struct GameProfileCard: View {
    let gameTitle: String
    let mainRole: String
    let platform: Platform
    let onFollow: () -> Void
    let onChallenge: () -> Void

    var body: some View {
        HStack(spacing: 16) {
            PlatformIcon(platform: platform)
                .frame(width: 40, height: 40)
            VStack(alignment: .leading, spacing: 4) {
                Text(gameTitle)
                    .font(.headline)
                    .foregroundColor(.white)
                Text(mainRole)
                    .font(.subheadline)
                    .foregroundColor(Theme.accent)
            }
            Spacer()
            Button(action: {
                onFollow()
                UIImpactFeedbackGenerator(style: .light).impactOccurred()
            }) {
                Text("Follow")
                    .font(.caption)
                    .padding(8)
                    .background(Theme.neonGreen)
                    .foregroundColor(.black)
                    .clipShape(Capsule())
                    .overlay(
                        Capsule().stroke(Theme.neonGreen, lineWidth: 2)
                    )
            }
            Button(action: {
                onChallenge()
                UIImpactFeedbackGenerator(style: .medium).impactOccurred()
            }) {
                Text("Challenge")
                    .font(.caption)
                    .padding(8)
                    .background(Theme.ultraviolet)
                    .foregroundColor(.white)
                    .clipShape(Capsule())
                    .overlay(
                        Capsule().stroke(Theme.ultraviolet, lineWidth: 2)
                    )
            }
        }
        .padding()
        .background(Theme.cardBackground)
        .cornerRadius(16)
        .shadow(color: Theme.accent.opacity(0.2), radius: 8, x: 0, y: 4)
        .overlay(
            RoundedRectangle(cornerRadius: 16)
                .stroke(Theme.accent, lineWidth: 2)
                .shadow(color: Theme.accent.opacity(0.5), radius: 4)
        )
        .padding(.horizontal)
    }
} 