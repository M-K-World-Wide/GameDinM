using UnityEngine;
using UnityEngine.UI;

namespace GameDinMobile.UI
{
    /// <summary>
    /// Manages UI interactions and elements.
    /// </summary>
    public class UIManager : MonoBehaviour
    {
        #region Singleton
        public static UIManager Instance { get; private set; }

        private void Awake()
        {
            if (Instance == null)
            {
                Instance = this;
                DontDestroyOnLoad(gameObject);
            }
            else
            {
                Destroy(gameObject);
            }
        }
        #endregion

        #region UI Elements
        [SerializeField] private Button startButton;
        [SerializeField] private Button settingsButton;
        [SerializeField] private Button quitButton;
        #endregion

        #region Unity Methods
        private void Start()
        {
            InitializeUI();
        }
        #endregion

        #region Public Methods
        /// <summary>
        /// Initializes UI elements and listeners.
        /// </summary>
        public void InitializeUI()
        {
            startButton.onClick.AddListener(OnStartButtonClicked);
            settingsButton.onClick.AddListener(OnSettingsButtonClicked);
            quitButton.onClick.AddListener(OnQuitButtonClicked);
        }

        /// <summary>
        /// Handles start button click.
        /// </summary>
        private void OnStartButtonClicked()
        {
            Debug.Log("Start button clicked.");
            // Add start game logic here
        }

        /// <summary>
        /// Handles settings button click.
        /// </summary>
        private void OnSettingsButtonClicked()
        {
            Debug.Log("Settings button clicked.");
            // Add settings logic here
        }

        /// <summary>
        /// Handles quit button click.
        /// </summary>
        private void OnQuitButtonClicked()
        {
            Debug.Log("Quit button clicked.");
            #if UNITY_EDITOR
            UnityEditor.EditorApplication.isPlaying = false;
            #else
            Application.Quit();
            #endif
        }
        #endregion
    }
} 