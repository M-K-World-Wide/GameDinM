import SwiftUI

/// FeedView displays the main content feed for GameDin.
/// - Quantum Documentation: Shows featured clips, player posts, and a quick post button.
/// - Feature Context: Central hub for game-related content.
/// - Dependency Listings: Uses SwiftUI, GameProfileCard, and mock data.
/// - Usage Example: Accessed via the Feed tab.
/// - Performance Considerations: Uses LazyVStack for efficient scrolling.
/// - Security Implications: None for mock data.
/// - Changelog: Initial creation.
struct FeedView: View {
    var body: some View {
        NavigationView {
            ScrollView {
                VStack(spacing: 20) {
                    // Featured Clips Placeholder
                    Text("🎬 Featured Clips")
                        .font(.title2)
                        .foregroundColor(Theme.accent)
                        .padding(.top)
                    ForEach(0..<2) { _ in
                        GameProfileCard(
                            gameTitle: "Apex Legends",
                            mainRole: "Support",
                            platform: .pc,
                            onFollow: {},
                            onChallenge: {}
                        )
                    }
                    // Player Posts Placeholder
                    Text("📝 Player Posts")
                        .font(.title2)
                        .foregroundColor(Theme.accent)
                        .padding(.top)
                    ForEach(0..<3) { idx in
                        RoundedRectangle(cornerRadius: 16)
                            .fill(Theme.cardBackground)
                            .frame(height: 120)
                            .overlay(Text("Player Post #\(idx+1)").foregroundColor(.white))
                            .padding(.horizontal)
                    }
                }
                .padding(.bottom, 80)
            }
            .navigationTitle("Feed")
            .toolbar {
                ToolbarItem(placement: .bottomBar) {
                    Button(action: { /* Quick post action */ }) {
                        Label("What are you playing?", systemImage: "plus.bubble")
                            .padding()
                            .background(Theme.accent)
                            .foregroundColor(.black)
                            .clipShape(Capsule())
                            .shadow(color: Theme.accent.opacity(0.5), radius: 8, x: 0, y: 4)
                    }
                }
            }
        }
    }
} 