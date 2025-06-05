# Scripts Directory

This directory contains all C# scripts for the GameDin Mobile project.

## Organization
- `Core/` - Core game logic and systems
- `UI/` - User interface scripts
- `Utils/` - Utility and helper scripts
- `Platforms/` - Platform-specific scripts (e.g., iOS, Android, Steam)

## Best Practices
- Use clear, descriptive names for scripts and functions
- Follow Unity's coding standards
- Document all public methods and classes
- Use regions for better code organization
- Avoid hardcoding values; use ScriptableObjects or constants

## Example Script Structure
```csharp
using UnityEngine;

namespace GameDinMobile.Core
{
    /// <summary>
    /// Example script demonstrating best practices.
    /// </summary>
    public class ExampleScript : MonoBehaviour
    {
        #region Variables
        [SerializeField] private string exampleVariable;
        #endregion

        #region Unity Methods
        private void Start()
        {
            // Initialization logic
        }

        private void Update()
        {
            // Update logic
        }
        #endregion

        #region Public Methods
        /// <summary>
        /// Example public method.
        /// </summary>
        public void ExampleMethod()
        {
            // Method logic
        }
        #endregion
    }
}
```

## Additional Resources
- [Unity Scripting API](https://docs.unity3d.com/ScriptReference/)
- [C# Coding Standards](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/inside-a-program/coding-style) 