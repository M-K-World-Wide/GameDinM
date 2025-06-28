using UnityEngine;
using UnityEditor;

namespace GameDinMobile.Editor.BuildTools
{
    /// <summary>
    /// Configuration class for platform-specific build settings.
    /// </summary>
    public static class PlatformBuildConfig
    {
        #region Build Settings
        public static class iOS
        {
            public const string BundleIdentifier = "com.gamedin.mobile";
            public const string Version = "1.0.0";
            public const string BuildNumber = "1";
            public const bool DevelopmentBuild = true;
            public const bool AutoRunPlayer = false;
            public const bool DeepProfilingSupport = false;
            public const bool ScriptDebugging = true;
        }

        public static class Android
        {
            public const string PackageName = "com.gamedin.mobile";
            public const string Version = "1.0.0";
            public const int BundleVersionCode = 1;
            public const bool DevelopmentBuild = true;
            public const bool AutoRunPlayer = false;
            public const bool DeepProfilingSupport = false;
            public const bool ScriptDebugging = true;
            public const bool BuildAppBundle = true;
        }

        public static class Windows
        {
            public const string ProductName = "GameDin Mobile";
            public const string Version = "1.0.0";
            public const bool DevelopmentBuild = true;
            public const bool AutoRunPlayer = false;
            public const bool DeepProfilingSupport = false;
            public const bool ScriptDebugging = true;
        }

        public static class MacOS
        {
            public const string ProductName = "GameDin Mobile";
            public const string Version = "1.0.0";
            public const bool DevelopmentBuild = true;
            public const bool AutoRunPlayer = false;
            public const bool DeepProfilingSupport = false;
            public const bool ScriptDebugging = true;
        }

        public static class Linux
        {
            public const string ProductName = "GameDin Mobile";
            public const string Version = "1.0.0";
            public const bool DevelopmentBuild = true;
            public const bool AutoRunPlayer = false;
            public const bool DeepProfilingSupport = false;
            public const bool ScriptDebugging = true;
        }

        public static class UWP
        {
            public const string PackageName = "com.gamedin.mobile";
            public const string Version = "1.0.0";
            public const string PublisherName = "GameDin";
            public const bool DevelopmentBuild = true;
            public const bool AutoRunPlayer = false;
            public const bool DeepProfilingSupport = false;
            public const bool ScriptDebugging = true;
        }

        public static class Steam
        {
            public const string AppId = "YOUR_STEAM_APP_ID";
            public const string Version = "1.0.0";
            public const bool DevelopmentBuild = true;
            public const bool AutoRunPlayer = false;
            public const bool DeepProfilingSupport = false;
            public const bool ScriptDebugging = true;
        }

        public static class NintendoSwitch
        {
            public const string TitleId = "YOUR_NINTENDO_TITLE_ID";
            public const string Version = "1.0.0";
            public const bool DevelopmentBuild = true;
            public const bool AutoRunPlayer = false;
            public const bool DeepProfilingSupport = false;
            public const bool ScriptDebugging = true;
        }

        public static class Xbox
        {
            public const string PackageName = "com.gamedin.mobile";
            public const string Version = "1.0.0";
            public const string PublisherName = "GameDin";
            public const bool DevelopmentBuild = true;
            public const bool AutoRunPlayer = false;
            public const bool DeepProfilingSupport = false;
            public const bool ScriptDebugging = true;
        }
        #endregion
    }
} 