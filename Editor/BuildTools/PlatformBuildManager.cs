using UnityEngine;
using UnityEditor;
using System.IO;

namespace GameDinMobile.Editor.BuildTools
{
    /// <summary>
    /// Manages platform-specific build configurations and execution.
    /// </summary>
    public class PlatformBuildManager : EditorWindow
    {
        #region Menu Items
        [MenuItem("GameDin Mobile/Build/iOS")]
        public static void BuildIOS()
        {
            ConfigureIOSBuild();
            BuildPipeline.BuildPlayer(EditorBuildSettings.scenes, GetBuildPath("iOS"), BuildTarget.iOS, GetBuildOptions());
        }

        [MenuItem("GameDin Mobile/Build/Android")]
        public static void BuildAndroid()
        {
            ConfigureAndroidBuild();
            BuildPipeline.BuildPlayer(EditorBuildSettings.scenes, GetBuildPath("Android"), BuildTarget.Android, GetBuildOptions());
        }

        [MenuItem("GameDin Mobile/Build/Windows")]
        public static void BuildWindows()
        {
            ConfigureWindowsBuild();
            BuildPipeline.BuildPlayer(EditorBuildSettings.scenes, GetBuildPath("Windows"), BuildTarget.StandaloneWindows64, GetBuildOptions());
        }

        [MenuItem("GameDin Mobile/Build/macOS")]
        public static void BuildMacOS()
        {
            ConfigureMacOSBuild();
            BuildPipeline.BuildPlayer(EditorBuildSettings.scenes, GetBuildPath("macOS"), BuildTarget.StandaloneOSX, GetBuildOptions());
        }

        [MenuItem("GameDin Mobile/Build/Linux")]
        public static void BuildLinux()
        {
            ConfigureLinuxBuild();
            BuildPipeline.BuildPlayer(EditorBuildSettings.scenes, GetBuildPath("Linux"), BuildTarget.StandaloneLinux64, GetBuildOptions());
        }

        [MenuItem("GameDin Mobile/Build/UWP")]
        public static void BuildUWP()
        {
            ConfigureUWPBuild();
            BuildPipeline.BuildPlayer(EditorBuildSettings.scenes, GetBuildPath("UWP"), BuildTarget.WSAPlayer, GetBuildOptions());
        }

        [MenuItem("GameDin Mobile/Build/Steam")]
        public static void BuildSteam()
        {
            ConfigureSteamBuild();
            BuildPipeline.BuildPlayer(EditorBuildSettings.scenes, GetBuildPath("Steam"), BuildTarget.StandaloneWindows64, GetBuildOptions());
        }

        [MenuItem("GameDin Mobile/Build/Nintendo Switch")]
        public static void BuildNintendoSwitch()
        {
            ConfigureNintendoSwitchBuild();
            BuildPipeline.BuildPlayer(EditorBuildSettings.scenes, GetBuildPath("NintendoSwitch"), BuildTarget.Switch, GetBuildOptions());
        }

        [MenuItem("GameDin Mobile/Build/Xbox")]
        public static void BuildXbox()
        {
            ConfigureXboxBuild();
            BuildPipeline.BuildPlayer(EditorBuildSettings.scenes, GetBuildPath("Xbox"), BuildTarget.XboxOne, GetBuildOptions());
        }
        #endregion

        #region Build Configuration
        private static void ConfigureIOSBuild()
        {
            PlayerSettings.bundleIdentifier = PlatformBuildConfig.iOS.BundleIdentifier;
            PlayerSettings.bundleVersion = PlatformBuildConfig.iOS.Version;
            PlayerSettings.iOS.buildNumber = PlatformBuildConfig.iOS.BuildNumber;
        }

        private static void ConfigureAndroidBuild()
        {
            PlayerSettings.bundleIdentifier = PlatformBuildConfig.Android.PackageName;
            PlayerSettings.bundleVersion = PlatformBuildConfig.Android.Version;
            PlayerSettings.Android.bundleVersionCode = PlatformBuildConfig.Android.BundleVersionCode;
            EditorUserBuildSettings.buildAppBundle = PlatformBuildConfig.Android.BuildAppBundle;
        }

        private static void ConfigureWindowsBuild()
        {
            PlayerSettings.productName = PlatformBuildConfig.Windows.ProductName;
            PlayerSettings.bundleVersion = PlatformBuildConfig.Windows.Version;
        }

        private static void ConfigureMacOSBuild()
        {
            PlayerSettings.productName = PlatformBuildConfig.MacOS.ProductName;
            PlayerSettings.bundleVersion = PlatformBuildConfig.MacOS.Version;
        }

        private static void ConfigureLinuxBuild()
        {
            PlayerSettings.productName = PlatformBuildConfig.Linux.ProductName;
            PlayerSettings.bundleVersion = PlatformBuildConfig.Linux.Version;
        }

        private static void ConfigureUWPBuild()
        {
            PlayerSettings.bundleIdentifier = PlatformBuildConfig.UWP.PackageName;
            PlayerSettings.bundleVersion = PlatformBuildConfig.UWP.Version;
            PlayerSettings.SetPublisherName(PlatformBuildConfig.UWP.PublisherName);
        }

        private static void ConfigureSteamBuild()
        {
            PlayerSettings.bundleVersion = PlatformBuildConfig.Steam.Version;
            // Add Steam-specific configuration here
        }

        private static void ConfigureNintendoSwitchBuild()
        {
            PlayerSettings.bundleVersion = PlatformBuildConfig.NintendoSwitch.Version;
            // Add Nintendo Switch-specific configuration here
        }

        private static void ConfigureXboxBuild()
        {
            PlayerSettings.bundleIdentifier = PlatformBuildConfig.Xbox.PackageName;
            PlayerSettings.bundleVersion = PlatformBuildConfig.Xbox.Version;
            PlayerSettings.SetPublisherName(PlatformBuildConfig.Xbox.PublisherName);
        }
        #endregion

        #region Helper Methods
        private static string GetBuildPath(string platform)
        {
            string buildPath = Path.Combine(Application.dataPath, "..", "Builds", platform);
            Directory.CreateDirectory(buildPath);
            return buildPath;
        }

        private static BuildOptions GetBuildOptions()
        {
            BuildOptions options = BuildOptions.None;
            if (EditorUserBuildSettings.development)
            {
                options |= BuildOptions.Development;
            }
            if (EditorUserBuildSettings.allowDebugging)
            {
                options |= BuildOptions.AllowDebugging;
            }
            return options;
        }
        #endregion
    }
} 