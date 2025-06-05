# Editor Directory

This directory contains custom Unity editor scripts for the GameDin Mobile project.

## Organization
- `BuildTools/` - Automated build scripts for different platforms
- `CustomInspectors/` - Custom inspectors for game objects
- `MenuItems/` - Custom menu items for the Unity editor
- `Validation/` - Scripts for validating project settings and assets

## Best Practices
- Use clear, descriptive names for editor scripts
- Follow Unity's editor scripting standards
- Document all public methods and classes
- Use regions for better code organization
- Avoid hardcoding values; use ScriptableObjects or constants

## Example Editor Script Structure
```csharp
using UnityEngine;
using UnityEditor;

namespace GameDinMobile.Editor
{
    /// <summary>
    /// Example editor script demonstrating best practices.
    /// </summary>
    public class ExampleEditorScript : EditorWindow
    {
        [MenuItem("GameDin Mobile/Example Window")]
        public static void ShowWindow()
        {
            GetWindow<ExampleEditorScript>("Example Window");
        }

        private void OnGUI()
        {
            GUILayout.Label("Example Editor Window", EditorStyles.boldLabel);
            if (GUILayout.Button("Example Button"))
            {
                Debug.Log("Example button clicked.");
            }
        }
    }
}
```

## Additional Resources
- [Unity Editor Scripting API](https://docs.unity3d.com/ScriptReference/Editor.html)
- [Unity Editor Scripting Best Practices](https://docs.unity3d.com/Manual/EditorScripting.html) 