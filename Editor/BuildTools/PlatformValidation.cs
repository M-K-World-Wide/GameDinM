using UnityEngine;
using UnityEditor;
using System.IO;

namespace GameDinMobile.Editor.BuildTools
{
    /// <summary>
    /// Validates platform-specific requirements before building.
    /// </summary>
    public static class PlatformValidation
    {
        #region Validation Methods
        public static bool ValidateIOSBuild()
        {
            if (!Directory.Exists("/Applications/Xcode.app"))
            {
                Debug.LogError("Xcode not found. Please install Xcode to build for iOS.");
                return false;
            }
            return true;
        }

        public static bool ValidateAndroidBuild()
        {
            if (string.IsNullOrEmpty(EditorPrefs.GetString("AndroidSdkRoot")))
            {
                Debug.LogError("Android SDK not found. Please install Android SDK to build for Android.");
                return false;
            }
            if (string.IsNullOrEmpty(EditorPrefs.GetString("JdkPath")))
            {
                Debug.LogError("JDK not found. Please install JDK to build for Android.");
                return false;
            }
            return true;
        }

        public static bool ValidateWindowsBuild()
        {
            // Windows builds don't require additional validation
            return true;
        }

        public static bool ValidateMacOSBuild()
        {
            // macOS builds don't require additional validation
            return true;
        }

        public static bool ValidateLinuxBuild()
        {
            // Linux builds don't require additional validation
            return true;
        }

        public static bool ValidateUWPBuild()
        {
            if (!Directory.Exists("C:\\Program Files (x86)\\Windows Kits\\10"))
            {
                Debug.LogError("Windows SDK not found. Please install Windows SDK to build for UWP.");
                return false;
            }
            return true;
        }

        public static bool ValidateSteamBuild()
        {
            if (!File.Exists("Assets/Plugins/Steam/steam_api64.dll"))
            {
                Debug.LogError("Steamworks SDK not found. Please install Steamworks SDK to build for Steam.");
                return false;
            }
            return true;
        }

        public static bool ValidateNintendoSwitchBuild()
        {
            if (!Directory.Exists("Assets/Plugins/Nintendo"))
            {
                Debug.LogError("Nintendo Switch SDK not found. Please install Nintendo Switch SDK to build for Nintendo Switch.");
                return false;
            }
            return true;
        }

        public static bool ValidateXboxBuild()
        {
            if (!Directory.Exists("Assets/Plugins/Xbox"))
            {
                Debug.LogError("Xbox SDK not found. Please install Xbox SDK to build for Xbox.");
                return false;
            }
            return true;
        }
        #endregion
    }
} 