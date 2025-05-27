import Foundation
import Combine

/// ProfileEditViewModel manages live editing of PlayerProfile.
/// - Quantum Documentation: Handles profile editing, validation, and change tracking.
/// - Feature Context: Used by ProfileEditView.
/// - Dependency Listings: Uses Combine, Foundation.
/// - Usage Example: @StateObject var viewModel = ProfileEditViewModel(profile: ...)
/// - Performance Considerations: Reactive updates with Combine.
/// - Security Implications: None for mock validation.
/// - Changelog: Initial creation.
class ProfileEditViewModel: ObservableObject {
    @Published var profile: PlayerProfile
    @Published var hasUnsavedChanges = false
    @Published var gamertagError: String? = nil

    private var cancellables = Set<AnyCancellable>()

    init(profile: PlayerProfile) {
        self.profile = profile
        setupChangeTracking()
    }

    private func setupChangeTracking() {
        $profile
            .dropFirst()
            .sink { [weak self] _ in
                self?.hasUnsavedChanges = true
                self?.validateGamertag()
            }
            .store(in: &cancellables)
    }

    func validateGamertag() {
        // Mock validation: gamertag must be unique and contain a '#' symbol
        if !profile.gamertag.contains("#") {
            gamertagError = "Gamertag must contain '#'"
        } else {
            gamertagError = nil
        }
    }

    func saveProfile() {
        ProfileManager.shared.saveProfile(profile)
        hasUnsavedChanges = false
    }
} 