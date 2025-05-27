import SwiftUI

/// ProfileEditView allows users to edit their PlayerProfile.
/// - Quantum Documentation: Provides inputs for avatar, display name, gamertag, bio, favorite games, and platforms.
/// - Feature Context: Used for profile customization.
/// - Dependency Listings: Uses ProfileEditViewModel, SwiftUI.
/// - Usage Example: ProfileEditView(viewModel: viewModel)
/// - Performance Considerations: Reactive updates with Combine.
/// - Security Implications: None for mock data.
/// - Changelog: Initial creation.
struct ProfileEditView: View {
    @ObservedObject var viewModel: ProfileEditViewModel
    @Environment(\.presentationMode) var presentationMode

    var body: some View {
        NavigationView {
            Form {
                Section(header: Text("Avatar")) {
                    Picker("Avatar", selection: $viewModel.profile.avatarURL) {
                        ForEach(ProfileManager.shared.mockAvatars, id: \.self) { avatar in
                            Text(avatar).tag(avatar)
                        }
                    }
                }
                Section(header: Text("Profile Info")) {
                    TextField("Display Name", text: $viewModel.profile.displayName)
                    TextField("Gamertag", text: $viewModel.profile.gamertag)
                        .foregroundColor(viewModel.gamertagError != nil ? .red : .primary)
                    if let error = viewModel.gamertagError {
                        Text(error).foregroundColor(.red).font(.caption)
                    }
                    TextField("Bio (max 140 chars)", text: $viewModel.profile.bio)
                        .onChange(of: viewModel.profile.bio) { newValue in
                            if newValue.count > 140 {
                                viewModel.profile.bio = String(newValue.prefix(140))
                            }
                        }
                }
                Section(header: Text("Favorite Games")) {
                    ForEach(viewModel.profile.favoriteGames, id: \.self) { game in
                        Text(game)
                    }
                    Button("Add Game") {
                        // Mock add game logic
                        viewModel.profile.favoriteGames.append("New Game")
                    }
                }
                Section(header: Text("Platforms")) {
                    ForEach(ProfileManager.shared.availablePlatforms, id: \.self) { platform in
                        Toggle(platform.rawValue, isOn: Binding(
                            get: { viewModel.profile.platforms.contains(platform) },
                            set: { isOn in
                                if isOn {
                                    viewModel.profile.platforms.append(platform)
                                } else {
                                    viewModel.profile.platforms.removeAll { $0 == platform }
                                }
                            }
                        ))
                    }
                }
            }
            .navigationTitle("Edit Profile")
            .navigationBarItems(
                leading: Button("Cancel") {
                    presentationMode.wrappedValue.dismiss()
                },
                trailing: Button("Save") {
                    viewModel.saveProfile()
                    presentationMode.wrappedValue.dismiss()
                }
                .disabled(!viewModel.hasUnsavedChanges)
            )
        }
    }
} 