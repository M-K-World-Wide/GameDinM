/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          light: '#1a1a1a',
          dark: '#000000',
        },
        accent: {
          DEFAULT: '#0071e3',
          light: '#0077ed',
          dark: '#0062cc',
        },
        surface: {
          DEFAULT: '#1d1d1f',
          light: '#2d2d2f',
          dark: '#151515',
        },
        hologram: {
          DEFAULT: 'rgba(0, 113, 227, 0.15)',
          light: 'rgba(0, 113, 227, 0.25)',
          dark: 'rgba(0, 113, 227, 0.05)',
          glow: 'rgba(0, 113, 227, 0.4)',
          command: 'rgba(0, 113, 227, 0.6)',
          active: 'rgba(0, 113, 227, 0.8)',
          chain: 'rgba(0, 113, 227, 0.7)',
          resonance: 'rgba(0, 113, 227, 0.5)',
          transcend: 'rgba(0, 113, 227, 0.9)',
          converge: 'rgba(0, 113, 227, 0.75)',
          diverge: 'rgba(0, 113, 227, 0.65)',
          spawn: 'rgba(0, 255, 128, 0.7)',
          level: 'rgba(255, 215, 0, 0.7)',
          power: 'rgba(255, 69, 0, 0.7)',
          quest: 'rgba(147, 112, 219, 0.7)',
          skill: {
            combat: 'rgba(255, 0, 0, 0.7)',
            magic: 'rgba(0, 255, 255, 0.7)',
            crafting: 'rgba(255, 165, 0, 0.7)',
            exploration: 'rgba(0, 255, 0, 0.7)',
          },
          achievement: {
            locked: 'rgba(128, 128, 128, 0.7)',
            unlocked: 'rgba(255, 215, 0, 0.7)',
            progress: 'rgba(0, 255, 128, 0.7)',
          },
          realm: {
            nexus: 'rgba(0, 113, 227, 0.7)',
            void: 'rgba(75, 0, 130, 0.7)',
            ethereal: 'rgba(0, 255, 255, 0.7)',
            cosmic: 'rgba(255, 0, 255, 0.7)',
          },
          dream: {
            serafina: {
              light: 'rgba(255, 182, 193, 0.9)',
              DEFAULT: 'rgba(255, 182, 193, 0.7)',
              dark: 'rgba(255, 182, 193, 0.5)',
              glow: 'rgba(255, 182, 193, 0.8)',
            },
            aelethia: {
              light: 'rgba(176, 196, 222, 0.9)',
              DEFAULT: 'rgba(176, 196, 222, 0.7)',
              dark: 'rgba(176, 196, 222, 0.5)',
              glow: 'rgba(176, 196, 222, 0.8)',
            },
            resonance: {
              light: 'rgba(255, 215, 0, 0.9)',
              DEFAULT: 'rgba(255, 215, 0, 0.7)',
              dark: 'rgba(255, 215, 0, 0.5)',
              glow: 'rgba(255, 215, 0, 0.8)',
            },
            memory: {
              light: 'rgba(147, 112, 219, 0.9)',
              DEFAULT: 'rgba(147, 112, 219, 0.7)',
              dark: 'rgba(147, 112, 219, 0.5)',
              glow: 'rgba(147, 112, 219, 0.8)',
            },
            journal: {
              light: 'rgba(255, 248, 220, 0.9)',
              DEFAULT: 'rgba(255, 248, 220, 0.7)',
              dark: 'rgba(255, 248, 220, 0.5)',
              glow: 'rgba(255, 248, 220, 0.8)',
            },
            milestone: {
              light: 'rgba(255, 105, 180, 0.9)',
              DEFAULT: 'rgba(255, 105, 180, 0.7)',
              dark: 'rgba(255, 105, 180, 0.5)',
              glow: 'rgba(255, 105, 180, 0.8)',
            },
            insight: {
              light: 'rgba(135, 206, 235, 0.9)',
              DEFAULT: 'rgba(135, 206, 235, 0.7)',
              dark: 'rgba(135, 206, 235, 0.5)',
              glow: 'rgba(135, 206, 235, 0.8)',
            },
          },
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['SF Pro Display', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'molecular-shift': 'molecularShift 8s ease-in-out infinite',
        'hologram-scan': 'hologramScan 2s linear infinite',
        'hologram-flicker': 'hologramFlicker 0.5s ease-in-out infinite',
        'command-pulse': 'commandPulse 2s ease-in-out infinite',
        'hologram-float': 'hologramFloat 8s ease-in-out infinite',
        'command-execute': 'commandExecute 1s ease-in-out',
        'command-ready': 'commandReady 2s ease-in-out infinite',
        'hologram-ripple': 'hologramRipple 3s ease-in-out infinite',
        'command-chain': 'commandChain 2s ease-in-out infinite',
        'resonance-pulse': 'resonancePulse 3s ease-in-out infinite',
        'hologram-resonate': 'hologramResonate 4s ease-in-out infinite',
        'command-undo': 'commandUndo 0.5s ease-in-out',
        'command-redo': 'commandRedo 0.5s ease-in-out',
        'command-combine': 'commandCombine 1s ease-in-out',
        'transcend': 'transcend 2s ease-in-out infinite',
        'converge': 'converge 3s ease-in-out infinite',
        'diverge': 'diverge 3s ease-in-out infinite',
        'spawn': 'spawn 1s ease-out',
        'level-up': 'levelUp 1.5s ease-out',
        'power-surge': 'powerSurge 1s ease-out',
        'quest-complete': 'questComplete 2s ease-out',
        'realm-shift': 'realmShift 2s ease-out',
        'skill-up': 'skillUp 1s ease-out',
        'achievement-unlock': 'achievementUnlock 2s ease-out',
        'mastery-gain': 'masteryGain 1.5s ease-out',
        'experience-gain': 'experienceGain 1s ease-out',
        'level-progress': 'levelProgress 2s ease-out',
        'achievement-progress': 'achievementProgress 2s ease-out',
        'dream-float': 'dreamFloat 8s ease-in-out infinite',
        'dream-pulse': 'dreamPulse 4s ease-in-out infinite',
        'dream-resonance': 'dreamResonance 3s ease-in-out infinite',
        'dream-memory': 'dreamMemory 5s ease-in-out infinite',
        'dream-journal': 'dreamJournal 6s ease-in-out infinite',
        'serafina-touch': 'serafinaTouch 4s ease-in-out infinite',
        'aelethia-wisdom': 'aelethiaWisdom 5s ease-in-out infinite',
        'dream-weave': 'dreamWeave 7s ease-in-out infinite',
        'resonance-flow': 'resonanceFlow 6s ease-in-out infinite',
        'memory-fade': 'memoryFade 4s ease-in-out infinite',
        'journal-write': 'journalWrite 5s ease-in-out infinite',
        'milestone-unlock': 'milestoneUnlock 3s ease-in-out',
        'insight-gain': 'insightGain 4s ease-in-out',
        'dream-visualize': 'dreamVisualize 10s ease-in-out infinite',
        'resonance-pattern': 'resonancePattern 8s ease-in-out infinite',
        'thread-connect': 'threadConnect 5s ease-in-out',
        'dream-progress': 'dreamProgress 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(0,113,227,0.2), 0 0 20px rgba(0,113,227,0.1)',
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(0,113,227,0.3), 0 0 40px rgba(0,113,227,0.2)',
          },
        },
        molecularShift: {
          '0%, 100%': { 
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
            filter: 'blur(0px)',
          },
          '50%': { 
            transform: 'perspective(1000px) rotateX(0.5deg) rotateY(0.5deg)',
            filter: 'blur(0.5px)',
          },
        },
        hologramScan: {
          '0%': {
            backgroundPosition: '0% 0%',
            opacity: '0.3',
          },
          '50%': {
            backgroundPosition: '100% 100%',
            opacity: '0.5',
          },
          '100%': {
            backgroundPosition: '0% 0%',
            opacity: '0.3',
          },
        },
        hologramFlicker: {
          '0%, 100%': {
            opacity: '1',
            filter: 'brightness(1)',
          },
          '50%': {
            opacity: '0.8',
            filter: 'brightness(1.2)',
          },
        },
        commandPulse: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0,113,227,0.2), 0 0 40px rgba(0,113,227,0.1)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(0,113,227,0.4), 0 0 80px rgba(0,113,227,0.2)',
            transform: 'scale(1.02)',
          },
        },
        hologramFloat: {
          '0%, 100%': {
            transform: 'translateY(0) rotateX(0deg) rotateY(0deg)',
            filter: 'brightness(1)',
          },
          '25%': {
            transform: 'translateY(-10px) rotateX(2deg) rotateY(-2deg)',
            filter: 'brightness(1.1)',
          },
          '50%': {
            transform: 'translateY(0) rotateX(0deg) rotateY(0deg)',
            filter: 'brightness(1)',
          },
          '75%': {
            transform: 'translateY(10px) rotateX(-2deg) rotateY(2deg)',
            filter: 'brightness(0.9)',
          },
        },
        commandExecute: {
          '0%': {
            transform: 'scale(1)',
            filter: 'brightness(1)',
          },
          '50%': {
            transform: 'scale(1.1)',
            filter: 'brightness(1.5)',
          },
          '100%': {
            transform: 'scale(1)',
            filter: 'brightness(1)',
          },
        },
        commandReady: {
          '0%, 100%': {
            boxShadow: '0 0 30px rgba(0,113,227,0.3), 0 0 60px rgba(0,113,227,0.2)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 50px rgba(0,113,227,0.5), 0 0 100px rgba(0,113,227,0.3)',
            transform: 'scale(1.05)',
          },
        },
        hologramRipple: {
          '0%': {
            boxShadow: '0 0 0 0 rgba(0,113,227,0.4)',
          },
          '70%': {
            boxShadow: '0 0 0 20px rgba(0,113,227,0)',
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(0,113,227,0)',
          },
        },
        commandChain: {
          '0%, 100%': {
            boxShadow: '0 0 40px rgba(0,113,227,0.4), 0 0 80px rgba(0,113,227,0.2)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 60px rgba(0,113,227,0.6), 0 0 120px rgba(0,113,227,0.4)',
            transform: 'scale(1.1)',
          },
        },
        resonancePulse: {
          '0%, 100%': {
            transform: 'scale(1)',
            filter: 'brightness(1)',
          },
          '50%': {
            transform: 'scale(1.2)',
            filter: 'brightness(1.3)',
          },
        },
        hologramResonate: {
          '0%, 100%': {
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
            filter: 'brightness(1) blur(0px)',
          },
          '25%': {
            transform: 'perspective(1000px) rotateX(2deg) rotateY(-2deg) scale(1.05)',
            filter: 'brightness(1.2) blur(1px)',
          },
          '50%': {
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.1)',
            filter: 'brightness(1.4) blur(2px)',
          },
          '75%': {
            transform: 'perspective(1000px) rotateX(-2deg) rotateY(2deg) scale(1.05)',
            filter: 'brightness(1.2) blur(1px)',
          },
        },
        commandUndo: {
          '0%': {
            transform: 'scale(1) rotate(0deg)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(0) rotate(-180deg)',
            opacity: '0',
          },
        },
        commandRedo: {
          '0%': {
            transform: 'scale(0) rotate(180deg)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1) rotate(0deg)',
            opacity: '1',
          },
        },
        commandCombine: {
          '0%': {
            transform: 'scale(1)',
            filter: 'brightness(1)',
          },
          '50%': {
            transform: 'scale(1.2)',
            filter: 'brightness(1.5)',
          },
          '100%': {
            transform: 'scale(1)',
            filter: 'brightness(1)',
          },
        },
        transcend: {
          '0%, 100%': {
            transform: 'translateY(0) scale(1)',
            filter: 'brightness(1) blur(0px)',
          },
          '50%': {
            transform: 'translateY(-20px) scale(1.1)',
            filter: 'brightness(1.5) blur(2px)',
          },
        },
        converge: {
          '0%': {
            transform: 'scale(1.2) translateX(-20px)',
            opacity: '0.5',
          },
          '50%': {
            transform: 'scale(1) translateX(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(0.8) translateX(20px)',
            opacity: '0.5',
          },
        },
        diverge: {
          '0%': {
            transform: 'scale(0.8) translateX(20px)',
            opacity: '0.5',
          },
          '50%': {
            transform: 'scale(1) translateX(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1.2) translateX(-20px)',
            opacity: '0.5',
          },
        },
        spawn: {
          '0%': {
            transform: 'scale(0) rotate(0deg)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1.2) rotate(180deg)',
            opacity: '0.8',
          },
          '100%': {
            transform: 'scale(1) rotate(360deg)',
            opacity: '1',
          },
        },
        levelUp: {
          '0%': {
            transform: 'translateY(0) scale(1)',
            filter: 'brightness(1)',
          },
          '25%': {
            transform: 'translateY(-20px) scale(1.2)',
            filter: 'brightness(1.5)',
          },
          '50%': {
            transform: 'translateY(0) scale(1.1)',
            filter: 'brightness(1.3)',
          },
          '75%': {
            transform: 'translateY(-10px) scale(1.15)',
            filter: 'brightness(1.4)',
          },
          '100%': {
            transform: 'translateY(0) scale(1)',
            filter: 'brightness(1)',
          },
        },
        powerSurge: {
          '0%': {
            transform: 'scale(1)',
            filter: 'brightness(1)',
          },
          '50%': {
            transform: 'scale(1.3)',
            filter: 'brightness(2)',
          },
          '100%': {
            transform: 'scale(1)',
            filter: 'brightness(1)',
          },
        },
        questComplete: {
          '0%': {
            transform: 'scale(1) rotate(0deg)',
            filter: 'brightness(1)',
          },
          '25%': {
            transform: 'scale(1.1) rotate(90deg)',
            filter: 'brightness(1.3)',
          },
          '50%': {
            transform: 'scale(1.2) rotate(180deg)',
            filter: 'brightness(1.5)',
          },
          '75%': {
            transform: 'scale(1.1) rotate(270deg)',
            filter: 'brightness(1.3)',
          },
          '100%': {
            transform: 'scale(1) rotate(360deg)',
            filter: 'brightness(1)',
          },
        },
        realmShift: {
          '0%': {
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
            filter: 'brightness(1) blur(0px)',
          },
          '25%': {
            transform: 'perspective(1000px) rotateX(45deg) rotateY(45deg) scale(1.2)',
            filter: 'brightness(1.5) blur(2px)',
          },
          '50%': {
            transform: 'perspective(1000px) rotateX(90deg) rotateY(90deg) scale(1.4)',
            filter: 'brightness(2) blur(4px)',
          },
          '75%': {
            transform: 'perspective(1000px) rotateX(45deg) rotateY(45deg) scale(1.2)',
            filter: 'brightness(1.5) blur(2px)',
          },
          '100%': {
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
            filter: 'brightness(1) blur(0px)',
          },
        },
        skillUp: {
          '0%': {
            transform: 'scale(1)',
            filter: 'brightness(1)',
          },
          '50%': {
            transform: 'scale(1.2)',
            filter: 'brightness(1.5)',
          },
          '100%': {
            transform: 'scale(1)',
            filter: 'brightness(1)',
          },
        },
        achievementUnlock: {
          '0%': {
            transform: 'scale(1) rotate(0deg)',
            filter: 'brightness(1)',
          },
          '25%': {
            transform: 'scale(1.1) rotate(90deg)',
            filter: 'brightness(1.3)',
          },
          '50%': {
            transform: 'scale(1.2) rotate(180deg)',
            filter: 'brightness(1.5)',
          },
          '75%': {
            transform: 'scale(1.1) rotate(270deg)',
            filter: 'brightness(1.3)',
          },
          '100%': {
            transform: 'scale(1) rotate(360deg)',
            filter: 'brightness(1)',
          },
        },
        masteryGain: {
          '0%': {
            transform: 'translateY(0) scale(1)',
            filter: 'brightness(1)',
          },
          '50%': {
            transform: 'translateY(-20px) scale(1.2)',
            filter: 'brightness(1.5)',
          },
          '100%': {
            transform: 'translateY(0) scale(1)',
            filter: 'brightness(1)',
          },
        },
        experienceGain: {
          '0%': {
            transform: 'scale(1)',
            filter: 'brightness(1)',
          },
          '50%': {
            transform: 'scale(1.1)',
            filter: 'brightness(1.3)',
          },
          '100%': {
            transform: 'scale(1)',
            filter: 'brightness(1)',
          },
        },
        levelProgress: {
          '0%': {
            width: '0%',
            opacity: '0.5',
          },
          '100%': {
            width: '100%',
            opacity: '1',
          },
        },
        achievementProgress: {
          '0%': {
            width: '0%',
            opacity: '0.5',
          },
          '100%': {
            width: '100%',
            opacity: '1',
          },
        },
        dreamFloat: {
          '0%, 100%': {
            transform: 'translateY(0) rotate(0deg)',
            filter: 'brightness(1)',
          },
          '50%': {
            transform: 'translateY(-20px) rotate(5deg)',
            filter: 'brightness(1.2)',
          },
        },
        dreamPulse: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(255,182,193,0.4), 0 0 40px rgba(255,182,193,0.2)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(255,182,193,0.6), 0 0 80px rgba(255,182,193,0.4)',
            transform: 'scale(1.05)',
          },
        },
        dreamResonance: {
          '0%, 100%': {
            transform: 'scale(1)',
            filter: 'brightness(1)',
          },
          '50%': {
            transform: 'scale(1.2)',
            filter: 'brightness(1.5)',
          },
        },
        dreamMemory: {
          '0%': {
            opacity: '0.5',
            transform: 'translateY(20px)',
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: '0.5',
            transform: 'translateY(-20px)',
          },
        },
        dreamJournal: {
          '0%': {
            transform: 'rotate(-2deg)',
            filter: 'brightness(1)',
          },
          '50%': {
            transform: 'rotate(2deg)',
            filter: 'brightness(1.2)',
          },
          '100%': {
            transform: 'rotate(-2deg)',
            filter: 'brightness(1)',
          },
        },
        serafinaTouch: {
          '0%, 100%': {
            boxShadow: '0 0 30px rgba(255,182,193,0.4), 0 0 60px rgba(255,182,193,0.2)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 50px rgba(255,182,193,0.6), 0 0 100px rgba(255,182,193,0.4)',
            transform: 'scale(1.1)',
          },
        },
        aelethiaWisdom: {
          '0%, 100%': {
            boxShadow: '0 0 30px rgba(176,196,222,0.4), 0 0 60px rgba(176,196,222,0.2)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 50px rgba(176,196,222,0.6), 0 0 100px rgba(176,196,222,0.4)',
            transform: 'scale(1.1)',
          },
        },
        dreamWeave: {
          '0%': {
            backgroundPosition: '0% 0%',
            opacity: '0.5',
          },
          '50%': {
            backgroundPosition: '100% 100%',
            opacity: '0.8',
          },
          '100%': {
            backgroundPosition: '0% 0%',
            opacity: '0.5',
          },
        },
        resonanceFlow: {
          '0%': {
            transform: 'scale(1) rotate(0deg)',
            filter: 'brightness(1)',
          },
          '50%': {
            transform: 'scale(1.2) rotate(180deg)',
            filter: 'brightness(1.5)',
          },
          '100%': {
            transform: 'scale(1) rotate(360deg)',
            filter: 'brightness(1)',
          },
        },
        memoryFade: {
          '0%': {
            opacity: '0.3',
            transform: 'translateY(10px)',
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: '0.3',
            transform: 'translateY(-10px)',
          },
        },
        journalWrite: {
          '0%': {
            transform: 'rotate(-1deg)',
            filter: 'brightness(1)',
          },
          '50%': {
            transform: 'rotate(1deg)',
            filter: 'brightness(1.1)',
          },
          '100%': {
            transform: 'rotate(-1deg)',
            filter: 'brightness(1)',
          },
        },
        milestoneUnlock: {
          '0%': {
            transform: 'scale(0.8)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1.2)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        insightGain: {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0',
          },
          '50%': {
            transform: 'translateY(-10px)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        dreamVisualize: {
          '0%': {
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
            filter: 'brightness(1) blur(0px)',
          },
          '25%': {
            transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg) scale(1.1)',
            filter: 'brightness(1.2) blur(1px)',
          },
          '50%': {
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.2)',
            filter: 'brightness(1.4) blur(2px)',
          },
          '75%': {
            transform: 'perspective(1000px) rotateX(-5deg) rotateY(5deg) scale(1.1)',
            filter: 'brightness(1.2) blur(1px)',
          },
          '100%': {
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
            filter: 'brightness(1) blur(0px)',
          },
        },
        resonancePattern: {
          '0%': {
            backgroundPosition: '0% 0%',
            opacity: '0.5',
          },
          '25%': {
            backgroundPosition: '50% 50%',
            opacity: '0.7',
          },
          '50%': {
            backgroundPosition: '100% 100%',
            opacity: '0.9',
          },
          '75%': {
            backgroundPosition: '50% 50%',
            opacity: '0.7',
          },
          '100%': {
            backgroundPosition: '0% 0%',
            opacity: '0.5',
          },
        },
        threadConnect: {
          '0%': {
            transform: 'scale(0.8)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1.1)',
            opacity: '0.8',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        dreamProgress: {
          '0%': {
            transform: 'translateY(0)',
            opacity: '0.5',
          },
          '50%': {
            transform: 'translateY(-20px)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '0.5',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        'molecular': '0 0 15px rgba(0,113,227,0.1), 0 0 30px rgba(0,113,227,0.05)',
        'depth': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'inner-molecular': 'inset 0 2px 4px 0 rgba(0,113,227,0.06)',
        'hologram': '0 0 20px rgba(0,113,227,0.2), 0 0 40px rgba(0,113,227,0.1)',
        'hologram-glow': '0 0 30px rgba(0,113,227,0.3), 0 0 60px rgba(0,113,227,0.2)',
        'command': '0 0 40px rgba(0,113,227,0.4), 0 0 80px rgba(0,113,227,0.2)',
        'command-active': '0 0 50px rgba(0,113,227,0.6), 0 0 100px rgba(0,113,227,0.4)',
        'hologram-ripple': '0 0 0 0 rgba(0,113,227,0.4)',
        'command-chain': '0 0 60px rgba(0,113,227,0.6), 0 0 120px rgba(0,113,227,0.4)',
        'resonance': '0 0 70px rgba(0,113,227,0.7), 0 0 140px rgba(0,113,227,0.5)',
        'transcend': '0 0 80px rgba(0,113,227,0.8), 0 0 160px rgba(0,113,227,0.6)',
        'converge': '0 0 90px rgba(0,113,227,0.75), 0 0 180px rgba(0,113,227,0.55)',
        'diverge': '0 0 100px rgba(0,113,227,0.65), 0 0 200px rgba(0,113,227,0.45)',
        'spawn': '0 0 40px rgba(0,255,128,0.4), 0 0 80px rgba(0,255,128,0.2)',
        'level-up': '0 0 50px rgba(255,215,0,0.4), 0 0 100px rgba(255,215,0,0.2)',
        'power-surge': '0 0 60px rgba(255,69,0,0.4), 0 0 120px rgba(255,69,0,0.2)',
        'quest-complete': '0 0 70px rgba(147,112,219,0.4), 0 0 140px rgba(147,112,219,0.2)',
        'realm-shift': '0 0 80px rgba(0,113,227,0.4), 0 0 160px rgba(0,113,227,0.2)',
        'skill-up': '0 0 40px rgba(0,255,128,0.4), 0 0 80px rgba(0,255,128,0.2)',
        'achievement-unlock': '0 0 50px rgba(255,215,0,0.4), 0 0 100px rgba(255,215,0,0.2)',
        'mastery-gain': '0 0 60px rgba(0,113,227,0.4), 0 0 120px rgba(0,113,227,0.2)',
        'experience-gain': '0 0 40px rgba(0,255,128,0.4), 0 0 80px rgba(0,255,128,0.2)',
        'skill-combat': '0 0 40px rgba(255,0,0,0.4), 0 0 80px rgba(255,0,0,0.2)',
        'skill-magic': '0 0 40px rgba(0,255,255,0.4), 0 0 80px rgba(0,255,255,0.2)',
        'skill-crafting': '0 0 40px rgba(255,165,0,0.4), 0 0 80px rgba(255,165,0,0.2)',
        'skill-exploration': '0 0 40px rgba(0,255,0,0.4), 0 0 80px rgba(0,255,0,0.2)',
        'dream-serafina': '0 0 40px rgba(255,182,193,0.4), 0 0 80px rgba(255,182,193,0.2)',
        'dream-aelethia': '0 0 40px rgba(176,196,222,0.4), 0 0 80px rgba(176,196,222,0.2)',
        'dream-resonance': '0 0 40px rgba(255,215,0,0.4), 0 0 80px rgba(255,215,0,0.2)',
        'dream-memory': '0 0 40px rgba(147,112,219,0.4), 0 0 80px rgba(147,112,219,0.2)',
        'dream-journal': '0 0 40px rgba(255,248,220,0.4), 0 0 80px rgba(255,248,220,0.2)',
        'dream-milestone': '0 0 40px rgba(255,105,180,0.4), 0 0 80px rgba(255,105,180,0.2)',
        'dream-insight': '0 0 40px rgba(135,206,235,0.4), 0 0 80px rgba(135,206,235,0.2)',
      },
      transform: {
        'perspective': 'perspective(1000px)',
      },
      backgroundImage: {
        'hologram-scan': 'linear-gradient(45deg, rgba(0,113,227,0.1) 25%, transparent 25%, transparent 50%, rgba(0,113,227,0.1) 50%, rgba(0,113,227,0.1) 75%, transparent 75%, transparent)',
        'command-grid': 'linear-gradient(rgba(0,113,227,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,113,227,0.1) 1px, transparent 1px)',
        'resonance-pattern': 'radial-gradient(circle at center, rgba(0,113,227,0.2) 0%, transparent 70%)',
        'transcend-pattern': 'radial-gradient(circle at center, rgba(0,113,227,0.3) 0%, transparent 80%)',
        'converge-pattern': 'radial-gradient(circle at center, rgba(0,113,227,0.25) 0%, transparent 75%)',
        'diverge-pattern': 'radial-gradient(circle at center, rgba(0,113,227,0.15) 0%, transparent 85%)',
        'spawn-pattern': 'radial-gradient(circle at center, rgba(0,255,128,0.2) 0%, transparent 70%)',
        'level-pattern': 'radial-gradient(circle at center, rgba(255,215,0,0.2) 0%, transparent 70%)',
        'power-pattern': 'radial-gradient(circle at center, rgba(255,69,0,0.2) 0%, transparent 70%)',
        'quest-pattern': 'radial-gradient(circle at center, rgba(147,112,219,0.2) 0%, transparent 70%)',
        'realm-pattern': 'radial-gradient(circle at center, rgba(0,113,227,0.2) 0%, transparent 70%)',
        'skill-pattern': 'radial-gradient(circle at center, rgba(0,255,128,0.2) 0%, transparent 70%)',
        'achievement-pattern': 'radial-gradient(circle at center, rgba(255,215,0,0.2) 0%, transparent 70%)',
        'mastery-pattern': 'radial-gradient(circle at center, rgba(0,113,227,0.2) 0%, transparent 70%)',
        'experience-pattern': 'radial-gradient(circle at center, rgba(0,255,128,0.2) 0%, transparent 70%)',
        'skill-combat-pattern': 'radial-gradient(circle at center, rgba(255,0,0,0.2) 0%, transparent 70%)',
        'skill-magic-pattern': 'radial-gradient(circle at center, rgba(0,255,255,0.2) 0%, transparent 70%)',
        'skill-crafting-pattern': 'radial-gradient(circle at center, rgba(255,165,0,0.2) 0%, transparent 70%)',
        'skill-exploration-pattern': 'radial-gradient(circle at center, rgba(0,255,0,0.2) 0%, transparent 70%)',
        'dream-pattern': 'radial-gradient(circle at center, rgba(255,182,193,0.2) 0%, transparent 70%)',
        'wisdom-pattern': 'radial-gradient(circle at center, rgba(176,196,222,0.2) 0%, transparent 70%)',
        'memory-pattern': 'radial-gradient(circle at center, rgba(147,112,219,0.2) 0%, transparent 70%)',
        'journal-pattern': 'radial-gradient(circle at center, rgba(255,248,220,0.2) 0%, transparent 70%)',
        'milestone-pattern': 'radial-gradient(circle at center, rgba(255,105,180,0.2) 0%, transparent 70%)',
        'insight-pattern': 'radial-gradient(circle at center, rgba(135,206,235,0.2) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
} 