import SwiftUI

/// MemoryTimelineView displays a scrollable horizontal timeline of major player memories.
/// - Quantum Documentation: Shows memories with date, caption, and tag.
/// - Feature Context: Used for reflecting on player achievements and moments.
/// - Dependency Listings: Uses SwiftUI, GameMemory model.
/// - Usage Example: MemoryTimelineView(memories: memories)
/// - Performance Considerations: Efficient for horizontal scrolling.
/// - Security Implications: None for mock data.
/// - Changelog: Initial creation.
struct MemoryTimelineView: View {
    let memories: [GameMemory]

    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 16) {
                ForEach(memories) { memory in
                    VStack(alignment: .leading) {
                        Text(memory.date)
                            .font(.caption)
                            .foregroundColor(.gray)
                        Text(memory.caption)
                            .font(.body)
                            .foregroundColor(.white)
                        Text(memory.tag)
                            .font(.caption)
                            .foregroundColor(Theme.accent)
                    }
                    .padding()
                    .background(Theme.cardBackground)
                    .cornerRadius(16)
                    .shadow(color: Theme.accent.opacity(0.5), radius: 8, x: 0, y: 4)
                }
            }
            .padding(.horizontal)
        }
    }
} 