using UnityEditor;
using UnityEngine;

namespace GameDinMobile.Editor.BuildTools
{
    /// <summary>
    /// Automates builds for different platforms.
    /// </summary>
    public class BuildScript : MonoBehaviour
    {
        #region Build Methods
        /// <summary>
        /// Performs a build for the current platform.
        /// </summary>
        public static void PerformBuild()
        {
            string buildPath = EditorUtility.SaveFolderPanel("Choose Build Location", "", "");
            if (string.IsNullOrEmpty(buildPath))
            {
                Debug.LogError("Build path is empty.");
                return;
            }

            BuildPipeline.BuildPlayer(EditorBuildSettings.scenes, buildPath, EditorUserBuildSettings.activeBuildTarget, BuildOptions.None);
        }

        /// <summary>
        /// Performs a build for iOS.
        /// </summary>
        public static void PerformIOSBuild()
        {
            EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.iOS, BuildTarget.iOS);
            PerformBuild();
        }

        /// <summary>
        /// Performs a build for Android.
        /// </summary>
        public static void PerformAndroidBuild()
        {
            EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.Android, BuildTarget.Android);
            PerformBuild();
        }

        /// <summary>
        /// Performs a build for Windows.
        /// </summary>
        public static void PerformWindowsBuild()
        {
            EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.Standalone, BuildTarget.StandaloneWindows64);
            PerformBuild();
        }

        /// <summary>
        /// Performs a build for macOS.
        /// </summary>
        public static void PerformMacOSBuild()
        {
            EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.Standalone, BuildTarget.StandaloneOSX);
            PerformBuild();
        }

        /// <summary>
        /// Performs a build for Linux.
        /// </summary>
        public static void PerformLinuxBuild()
        {
            EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.Standalone, BuildTarget.StandaloneLinux64);
            PerformBuild();
        }

        /// <summary>
        /// Performs a build for UWP.
        /// </summary>
        public static void PerformUWPBuild()
        {
            EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.WSA, BuildTarget.WSAPlayer);
            PerformBuild();
        }

        /// <summary>
        /// Performs a build for Nintendo Switch.
        /// </summary>
        public static void PerformSwitchBuild()
        {
            EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.Switch, BuildTarget.Switch);
            PerformBuild();
        }

        /// <summary>
        /// Performs a build for Xbox.
        /// </summary>
        public static void PerformXboxBuild()
        {
            EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.XboxOne, BuildTarget.XboxOne);
            PerformBuild();
        }
        #endregion
    }
} 