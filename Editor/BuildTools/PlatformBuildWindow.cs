using UnityEngine;
using UnityEditor;
using System.Collections.Generic;

namespace GameDinMobile.Editor.BuildTools
{
    /// <summary>
    /// Unity editor window for managing platform builds with a user interface.
    /// </summary>
    public class PlatformBuildWindow : EditorWindow
    {
        #region Window
        [MenuItem("GameDin Mobile/Build Window")]
        public static void ShowWindow()
        {
            GetWindow<PlatformBuildWindow>("Platform Build Manager");
        }

        private void OnGUI()
        {
            GUILayout.Label("Platform Build Manager", EditorStyles.boldLabel);

            EditorGUILayout.Space();

            if (GUILayout.Button("Build iOS"))
            {
                if (PlatformValidation.ValidateIOSBuild())
                {
                    PlatformBuildManager.BuildIOS();
                }
            }

            if (GUILayout.Button("Build Android"))
            {
                if (PlatformValidation.ValidateAndroidBuild())
                {
                    PlatformBuildManager.BuildAndroid();
                }
            }

            if (GUILayout.Button("Build Windows"))
            {
                if (PlatformValidation.ValidateWindowsBuild())
                {
                    PlatformBuildManager.BuildWindows();
                }
            }

            if (GUILayout.Button("Build macOS"))
            {
                if (PlatformValidation.ValidateMacOSBuild())
                {
                    PlatformBuildManager.BuildMacOS();
                }
            }

            if (GUILayout.Button("Build Linux"))
            {
                if (PlatformValidation.ValidateLinuxBuild())
                {
                    PlatformBuildManager.BuildLinux();
                }
            }

            if (GUILayout.Button("Build UWP"))
            {
                if (PlatformValidation.ValidateUWPBuild())
                {
                    PlatformBuildManager.BuildUWP();
                }
            }

            if (GUILayout.Button("Build Steam"))
            {
                if (PlatformValidation.ValidateSteamBuild())
                {
                    PlatformBuildManager.BuildSteam();
                }
            }

            if (GUILayout.Button("Build Nintendo Switch"))
            {
                if (PlatformValidation.ValidateNintendoSwitchBuild())
                {
                    PlatformBuildManager.BuildNintendoSwitch();
                }
            }

            if (GUILayout.Button("Build Xbox"))
            {
                if (PlatformValidation.ValidateXboxBuild())
                {
                    PlatformBuildManager.BuildXbox();
                }
            }

            EditorGUILayout.Space();

            if (GUILayout.Button("Build All Platforms"))
            {
                BuildAllPlatforms();
            }
        }
        #endregion

        #region Build Methods
        private void BuildAllPlatforms()
        {
            if (PlatformValidation.ValidateIOSBuild())
            {
                PlatformBuildManager.BuildIOS();
            }

            if (PlatformValidation.ValidateAndroidBuild())
            {
                PlatformBuildManager.BuildAndroid();
            }

            if (PlatformValidation.ValidateWindowsBuild())
            {
                PlatformBuildManager.BuildWindows();
            }

            if (PlatformValidation.ValidateMacOSBuild())
            {
                PlatformBuildManager.BuildMacOS();
            }

            if (PlatformValidation.ValidateLinuxBuild())
            {
                PlatformBuildManager.BuildLinux();
            }

            if (PlatformValidation.ValidateUWPBuild())
            {
                PlatformBuildManager.BuildUWP();
            }

            if (PlatformValidation.ValidateSteamBuild())
            {
                PlatformBuildManager.BuildSteam();
            }

            if (PlatformValidation.ValidateNintendoSwitchBuild())
            {
                PlatformBuildManager.BuildNintendoSwitch();
            }

            if (PlatformValidation.ValidateXboxBuild())
            {
                PlatformBuildManager.BuildXbox();
            }
        }
        #endregion
    }
} 