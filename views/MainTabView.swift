import SwiftUI

/// MainTabView manages the primary navigation for GameDin using a TabView.
/// - Quantum Documentation: This view provides the main navigation structure for the app, with four core sections.
/// - Feature Context: Central hub for switching between Feed, Discover, Profile, and Inbox.
/// - Dependency Listings: Depends on SwiftUI and the four main views.
/// - Usage Example: Used as the root view after login.
/// - Performance Considerations: TabView is efficient for up to 5 tabs.
/// - Security Implications: None.
/// - Changelog: Initial creation.
struct MainTabView: View {
    var body: some View {
        TabView {
            FeedView()
                .tabItem {
                    Image(systemName: "gamecontroller.fill")
                    Text("Feed")
                }
            DiscoverView()
                .tabItem {
                    Image(systemName: "magnifyingglass")
                    Text("Discover")
                }
            ProfileView()
                .tabItem {
                    Image(systemName: "person.crop.circle")
                    Text("Profile")
                }
            InboxView()
                .tabItem {
                    Image(systemName: "envelope")
                    Text("Inbox")
                }
        }
        .accentColor(Theme.accent)
        .background(Theme.background)
    }
} 