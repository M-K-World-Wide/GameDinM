import SwiftUI

/// GameDetailView displays a user's connection to a specific game title.
/// - Quantum Documentation: Shows game banner, title, platform icons, user role, and play style.
/// - Feature Context: Used for detailed game interaction.
/// - Dependency Listings: Uses SwiftUI, Game model.
/// - Usage Example: GameDetailView(game: game)
/// - Performance Considerations: Minimal for static content.
/// - Security Implications: None for mock data.
/// - Changelog: Transformed from NextSceneView.
struct GameDetailView: View {
    let game: Game

    var body: some View {
        VStack(spacing: 16) {
            // Game Banner
            Image(systemName: "gamecontroller.fill")
                .resizable()
                .frame(height: 200)
                .background(Theme.cardBackground)
                .cornerRadius(16)
                .padding(.horizontal)

            // Title and Platform Icons
            HStack {
                Text(game.title)
                    .font(.title)
                    .foregroundColor(.white)
                Spacer()
                ForEach(game.platforms, id: \.self) { platform in
                    PlatformIcon(platform: platform)
                }
            }
            .padding(.horizontal)

            // User Role
            Text("Your Role: \(game.userRole)")
                .font(.headline)
                .foregroundColor(Theme.accent)
                .padding(.horizontal)

            // Play Style
            Text("Play Style: \(game.playStyle)")
                .font(.headline)
                .foregroundColor(Theme.accent)
                .padding(.horizontal)

            // Memory Timeline
            MemoryTimelineView(memories: game.memories)

            Spacer()
        }
        .background(Theme.background)
    }
} 