using UnityEngine;

namespace GameDinMobile.Core
{
    /// <summary>
    /// Manages core game logic and initialization.
    /// </summary>
    public class GameManager : MonoBehaviour
    {
        #region Singleton
        public static GameManager Instance { get; private set; }

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

        #region Unity Methods
        private void Start()
        {
            InitializeGame();
        }
        #endregion

        #region Public Methods
        /// <summary>
        /// Initializes the game.
        /// </summary>
        public void InitializeGame()
        {
            Debug.Log("Game initialized.");
            // Add initialization logic here
        }
        #endregion
    }
} 