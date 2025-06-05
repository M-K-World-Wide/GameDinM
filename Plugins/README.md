# Plugins Directory

This directory contains third-party plugins and SDKs used in the GameDin Mobile project.

## Organization
- `iOS/` - iOS-specific plugins (e.g., native iOS SDKs)
- `Android/` - Android-specific plugins (e.g., native Android SDKs)
- `Steam/` - Steamworks SDK and related plugins
- `Nintendo/` - Nintendo Switch SDK and related plugins
- `Xbox/` - Xbox SDK and related plugins
- `Common/` - Cross-platform plugins (e.g., analytics, ads)

## Best Practices
- Document plugin versions and dependencies
- Follow plugin-specific setup instructions
- Test plugins on all target platforms
- Keep plugins updated to the latest stable versions
- Use plugins only when necessary to avoid bloat

## Plugin Usage Examples
### Steamworks SDK
```csharp
using Steamworks;

public class SteamManager : MonoBehaviour
{
    private void Start()
    {
        if (SteamAPI.Init())
        {
            Debug.Log("Steam API initialized successfully.");
        }
        else
        {
            Debug.LogError("Steam API initialization failed.");
        }
    }
}
```

### Native iOS Plugin
```csharp
using UnityEngine;
using System.Runtime.InteropServices;

public class NativeiOSPlugin : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern void NativeMethod();

    public void CallNativeMethod()
    {
        #if UNITY_IOS
        NativeMethod();
        #endif
    }
}
```

## Additional Resources
- [Unity Plugins Documentation](https://docs.unity3d.com/Manual/Plugins.html)
- [Steamworks SDK Documentation](https://partner.steamgames.com/doc/home)
- [Nintendo Switch SDK Documentation](https://developer.nintendo.com/)
- [Xbox SDK Documentation](https://developer.microsoft.com/xbox) 