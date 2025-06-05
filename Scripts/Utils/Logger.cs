using UnityEngine;

namespace GameDinMobile.Utils
{
    /// <summary>
    /// Utility class for consistent logging across the project.
    /// </summary>
    public static class Logger
    {
        #region Log Methods
        /// <summary>
        /// Logs an info message.
        /// </summary>
        /// <param name="message">The message to log.</param>
        public static void Log(string message)
        {
            Debug.Log($"[INFO] {message}");
        }

        /// <summary>
        /// Logs a warning message.
        /// </summary>
        /// <param name="message">The message to log.</param>
        public static void LogWarning(string message)
        {
            Debug.LogWarning($"[WARNING] {message}");
        }

        /// <summary>
        /// Logs an error message.
        /// </summary>
        /// <param name="message">The message to log.</param>
        public static void LogError(string message)
        {
            Debug.LogError($"[ERROR] {message}");
        }
        #endregion
    }
} 