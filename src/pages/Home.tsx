import React, { useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useHoverAnimation } from '../hooks/useHoverAnimation';
import { useParallax } from '../hooks/useParallax';
import { useStaggerAnimation } from '../hooks/useStaggerAnimation';
import { useTextAnimation } from '../hooks/useTextAnimation';
import { useBackgroundAnimation } from '../hooks/useBackgroundAnimation';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useCursorAnimation } from '../hooks/useCursorAnimation';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';

type FocusedElement = string | null;
type CommandState = 'idle' | 'ready' | 'active' | 'executing' | 'chaining' | 'combining' | 'gaming' | 'achieving' | 'skilling';
type CommandType = 
  | 'reveal' | 'transform' | 'summon' | 'enhance' 
  | 'merge' | 'split' | 'resonate' | 'transcend' 
  | 'ascend' | 'descend' | 'converge' | 'diverge'
  | 'spawn' | 'level' | 'power' | 'evolve'
  | 'quest' | 'realm' | 'portal' | 'nexus'
  | 'master' | 'awaken' | 'unlock' | 'transcend';

type Skill = {
  id: string;
  name: string;
  level: number;
  experience: number;
  type: 'combat' | 'magic' | 'crafting' | 'exploration';
  unlocked: boolean;
};

type Achievement = {
  id: string;
  name: string;
  description: string;
  unlocked: boolean;
  progress: number;
  reward: {
    type: 'skill' | 'power' | 'realm' | 'command';
    value: number | string;
  };
};

type GameState = {
  level: number;
  power: number;
  quests: string[];
  realm: string;
  portals: string[];
  skills: Skill[];
  achievements: Achievement[];
  experience: number;
  mastery: {
    commands: number;
    realms: number;
    skills: number;
  };
};

type CommandHistory = {
  id: string;
  type: CommandType;
  element: string;
  timestamp: number;
  chainId: string | null;
  combinationId?: string;
  effects: CommandEffect[];
  gameState?: GameState;
  skillGains?: {
    skillId: string;
    experience: number;
  }[];
  achievementProgress?: {
    achievementId: string;
    progress: number;
  }[];
};

type CommandEffect = {
  type: 'glow' | 'ripple' | 'resonance' | 'transcend' | 'spawn' | 'level' | 'power' | 'quest' | 'skill' | 'achievement';
  intensity: number;
  duration: number;
  gameEffect?: {
    type: 'levelUp' | 'powerBoost' | 'questComplete' | 'realmShift' | 'skillUp' | 'achievementUnlock';
    value: number;
  };
};

type DreamState = {
  current: string;
  progress: number;
  resonance: number;
  checkpoints: DreamCheckpoint[];
  memories: DreamMemory[];
};

type DreamCheckpoint = {
  id: string;
  name: string;
  description: string;
  resonance: number;
  requirements: {
    skills: { [key: string]: number };
    achievements: string[];
    dreams: string[];
  };
  rewards: {
    skills: { [key: string]: number };
    resonance: number;
    memories: DreamMemory[];
  };
  unlocked: boolean;
};

type DreamMemory = {
  id: string;
  title: string;
  content: string;
  resonance: number;
  timestamp: number;
  associatedSkills: string[];
  emotions: string[];
};

type SkillTree = {
  id: string;
  name: string;
  description: string;
  resonance: number;
  requirements: {
    skills: { [key: string]: number };
    dreams: string[];
    resonance: number;
  };
  abilities: SkillAbility[];
  unlocked: boolean;
};

type SkillAbility = {
  id: string;
  name: string;
  description: string;
  resonance: number;
  requirements: {
    skillLevel: number;
    dreams: string[];
  };
  effects: {
    type: 'resonance' | 'memory' | 'dream' | 'skill';
    value: number | string;
  };
  unlocked: boolean;
};

type DreamWeavingState = {
  serafinaPresence: number;
  aelethiaPresence: number;
  dreamThreads: DreamThread[];
  resonancePatterns: ResonancePattern[];
  journalEntries: JournalEntry[];
};

type DreamThread = {
  id: string;
  name: string;
  resonance: number;
  connectedTo: string[];
  emotions: string[];
  memories: string[];
};

type ResonancePattern = {
  id: string;
  name: string;
  type: 'serafina' | 'aelethia' | 'combined';
  strength: number;
  effects: {
    resonance: number;
    memory: number;
    skill: number;
  };
};

type JournalEntry = {
  id: string;
  title: string;
  content: string;
  timestamp: number;
  resonance: number;
  associatedThreads: string[];
  emotions: string[];
  insights: string[];
};

type DreamMilestone = {
  id: string;
  name: string;
  description: string;
  resonance: number;
  requirements: {
    serafinaPresence: number;
    aelethiaPresence: number;
    dreamThreads: string[];
    resonance: number;
  };
  rewards: {
    serafinaPresence: number;
    aelethiaPresence: number;
    resonance: number;
    insights: string[];
  };
  unlocked: boolean;
};

type DreamInsight = {
  id: string;
  title: string;
  content: string;
  resonance: number;
  source: 'serafina' | 'aelethia' | 'combined';
  associatedThreads: string[];
  emotions: string[];
  timestamp: number;
};

const INITIAL_SKILLS: Skill[] = [
  { id: 'combat', name: 'Combat', level: 1, experience: 0, type: 'combat', unlocked: true },
  { id: 'magic', name: 'Magic', level: 1, experience: 0, type: 'magic', unlocked: true },
  { id: 'crafting', name: 'Crafting', level: 1, experience: 0, type: 'crafting', unlocked: true },
  { id: 'exploration', name: 'Exploration', level: 1, experience: 0, type: 'exploration', unlocked: true },
];

const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-command',
    name: 'First Command',
    description: 'Execute your first command',
    unlocked: false,
    progress: 0,
    reward: { type: 'power', value: 50 },
  },
  {
    id: 'realm-master',
    name: 'Realm Master',
    description: 'Visit all realms',
    unlocked: false,
    progress: 0,
    reward: { type: 'realm', value: 'cosmic' },
  },
  {
    id: 'skill-master',
    name: 'Skill Master',
    description: 'Reach level 10 in any skill',
    unlocked: false,
    progress: 0,
    reward: { type: 'skill', value: 1000 },
  },
];

const INITIAL_DREAM_CHECKPOINTS: DreamCheckpoint[] = [
  {
    id: 'awakening',
    name: 'First Awakening',
    description: 'The moment when dreams become more than just dreams',
    resonance: 100,
    requirements: {
      skills: { 'magic': 1 },
      achievements: ['first-command'],
      dreams: [],
    },
    rewards: {
      skills: { 'magic': 50, 'exploration': 30 },
      resonance: 50,
      memories: [{
        id: 'first-awakening',
        title: 'The First Dream',
        content: 'In the space between worlds, where Serafina and Aelethia dance...',
        resonance: 100,
        timestamp: Date.now(),
        associatedSkills: ['magic', 'exploration'],
        emotions: ['wonder', 'curiosity'],
      }],
    },
    unlocked: false,
  },
  {
    id: 'serafina-connection',
    name: 'Serafina\'s Touch',
    description: 'Feel the gentle resonance of Serafina\'s presence',
    resonance: 200,
    requirements: {
      skills: { 'magic': 5, 'exploration': 3 },
      achievements: ['realm-master'],
      dreams: ['awakening'],
    },
    rewards: {
      skills: { 'magic': 100, 'crafting': 50 },
      resonance: 100,
      memories: [{
        id: 'serafina-whisper',
        title: 'Serafina\'s Whisper',
        content: 'Her voice echoes through the dreamscape...',
        resonance: 200,
        timestamp: Date.now(),
        associatedSkills: ['magic', 'crafting'],
        emotions: ['peace', 'connection'],
      }],
    },
    unlocked: false,
  },
  {
    id: 'aelethia-embrace',
    name: 'Aelethia\'s Embrace',
    description: 'Experience the profound wisdom of Aelethia',
    resonance: 300,
    requirements: {
      skills: { 'magic': 10, 'exploration': 7, 'crafting': 5 },
      achievements: ['skill-master'],
      dreams: ['serafina-connection'],
    },
    rewards: {
      skills: { 'magic': 200, 'exploration': 100, 'crafting': 100 },
      resonance: 200,
      memories: [{
        id: 'aelethia-wisdom',
        title: 'Aelethia\'s Wisdom',
        content: 'In the depths of dreams, Aelethia shares her knowledge...',
        resonance: 300,
        timestamp: Date.now(),
        associatedSkills: ['magic', 'exploration', 'crafting'],
        emotions: ['wisdom', 'understanding'],
      }],
    },
    unlocked: false,
  },
];

const INITIAL_SKILL_TREES: SkillTree[] = [
  {
    id: 'dream-weaving',
    name: 'Dream Weaving',
    description: 'The art of shaping dreams into reality',
    resonance: 150,
    requirements: {
      skills: { 'magic': 3, 'crafting': 2 },
      dreams: ['awakening'],
      resonance: 100,
    },
    abilities: [
      {
        id: 'dream-sight',
        name: 'Dream Sight',
        description: 'See beyond the veil of dreams',
        resonance: 50,
        requirements: {
          skillLevel: 1,
          dreams: ['awakening'],
        },
        effects: {
          type: 'resonance',
          value: 20,
        },
        unlocked: false,
      },
      {
        id: 'dream-touch',
        name: 'Dream Touch',
        description: 'Feel the essence of dreams',
        resonance: 100,
        requirements: {
          skillLevel: 3,
          dreams: ['serafina-connection'],
        },
        effects: {
          type: 'memory',
          value: 'enhanced-dream-memory',
        },
        unlocked: false,
      },
    ],
    unlocked: false,
  },
  {
    id: 'resonance-mastery',
    name: 'Resonance Mastery',
    description: 'Master the flow of dream resonance',
    resonance: 200,
    requirements: {
      skills: { 'magic': 5, 'exploration': 3 },
      dreams: ['serafina-connection'],
      resonance: 150,
    },
    abilities: [
      {
        id: 'resonance-sense',
        name: 'Resonance Sense',
        description: 'Feel the subtle vibrations of dreams',
        resonance: 75,
        requirements: {
          skillLevel: 2,
          dreams: ['serafina-connection'],
        },
        effects: {
          type: 'resonance',
          value: 30,
        },
        unlocked: false,
      },
      {
        id: 'resonance-flow',
        name: 'Resonance Flow',
        description: 'Channel dream energy with precision',
        resonance: 150,
        requirements: {
          skillLevel: 5,
          dreams: ['aelethia-embrace'],
        },
        effects: {
          type: 'skill',
          value: 'enhanced-magic',
        },
        unlocked: false,
      },
    ],
    unlocked: false,
  },
];

const INITIAL_DREAM_THREADS: DreamThread[] = [
  {
    id: 'first-awakening',
    name: 'First Awakening',
    resonance: 100,
    connectedTo: [],
    emotions: ['wonder', 'curiosity'],
    memories: ['first-dream'],
  },
  {
    id: 'serafina-connection',
    name: 'Serafina\'s Touch',
    resonance: 200,
    connectedTo: ['first-awakening'],
    emotions: ['peace', 'connection'],
    memories: ['serafina-whisper'],
  },
  {
    id: 'aelethia-wisdom',
    name: 'Aelethia\'s Embrace',
    resonance: 300,
    connectedTo: ['serafina-connection'],
    emotions: ['wisdom', 'understanding'],
    memories: ['aelethia-wisdom'],
  },
];

const INITIAL_RESONANCE_PATTERNS: ResonancePattern[] = [
  {
    id: 'serafina-gentle',
    name: 'Serafina\'s Gentle Touch',
    type: 'serafina',
    strength: 1,
    effects: {
      resonance: 20,
      memory: 15,
      skill: 10,
    },
  },
  {
    id: 'aelethia-deep',
    name: 'Aelethia\'s Deep Wisdom',
    type: 'aelethia',
    strength: 1,
    effects: {
      resonance: 30,
      memory: 25,
      skill: 20,
    },
  },
  {
    id: 'dream-weaving',
    name: 'Dream Weaving',
    type: 'combined',
    strength: 2,
    effects: {
      resonance: 50,
      memory: 40,
      skill: 30,
    },
  },
];

const INITIAL_DREAM_MILESTONES: DreamMilestone[] = [
  {
    id: 'first-connection',
    name: 'First Connection',
    description: 'Feel the gentle touch of Serafina and Aelethia',
    resonance: 100,
    requirements: {
      serafinaPresence: 10,
      aelethiaPresence: 10,
      dreamThreads: ['first-awakening'],
      resonance: 50,
    },
    rewards: {
      serafinaPresence: 20,
      aelethiaPresence: 20,
      resonance: 50,
      insights: ['The dream realm responds to your presence'],
    },
    unlocked: false,
  },
  {
    id: 'dream-weaver',
    name: 'Dream Weaver',
    description: 'Begin to understand the art of dream weaving',
    resonance: 200,
    requirements: {
      serafinaPresence: 50,
      aelethiaPresence: 50,
      dreamThreads: ['serafina-connection', 'aelethia-wisdom'],
      resonance: 150,
    },
    rewards: {
      serafinaPresence: 50,
      aelethiaPresence: 50,
      resonance: 100,
      insights: ['Dreams are threads waiting to be woven'],
    },
    unlocked: false,
  },
  {
    id: 'resonance-master',
    name: 'Resonance Master',
    description: 'Master the flow of dream resonance',
    resonance: 300,
    requirements: {
      serafinaPresence: 100,
      aelethiaPresence: 100,
      dreamThreads: ['dream-weaving', 'resonance-flow'],
      resonance: 250,
    },
    rewards: {
      serafinaPresence: 100,
      aelethiaPresence: 100,
      resonance: 200,
      insights: ['Resonance flows like water through dreams'],
    },
    unlocked: false,
  },
];

const INITIAL_DREAM_INSIGHTS: DreamInsight[] = [
  {
    id: 'serafina-first',
    title: 'Serafina\'s First Whisper',
    content: 'The dream realm welcomes you with open arms',
    resonance: 50,
    source: 'serafina',
    associatedThreads: ['first-awakening'],
    emotions: ['wonder', 'peace'],
    timestamp: Date.now(),
  },
  {
    id: 'aelethia-first',
    title: 'Aelethia\'s First Wisdom',
    content: 'Every dream is a story waiting to be told',
    resonance: 50,
    source: 'aelethia',
    associatedThreads: ['first-awakening'],
    emotions: ['curiosity', 'wisdom'],
    timestamp: Date.now(),
  },
];

const Home = () => {
  const { hoverVariants } = useHoverAnimation();
  const { containerVariants, itemVariants } = useStaggerAnimation();
  const { textVariants, letterVariants } = useTextAnimation();
  const { backgroundVariants, gradientVariants } = useBackgroundAnimation();
  const { progress, opacity, scale } = useScrollProgress();
  const { cursorVariants, style: cursorStyle } = useCursorAnimation();
  const { ref: featuresRef, variants: featuresVariants } = useIntersectionAnimation();

  // Mouse position tracking for dynamic effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations for mouse movement
  const smoothMouseX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Transform mouse position into rotation and perspective values
  const rotateX = useTransform(smoothMouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-10, 10]);
  const perspective = useTransform(
    smoothMouseX,
    [-300, 0, 300],
    [1000, 1200, 1000]
  );

  // Track focused element and command state
  const [focusedElement, setFocusedElement] = useState<FocusedElement>(null);
  const [commandState, setCommandState] = useState<CommandState>('idle');
  const [commandFeedback, setCommandFeedback] = useState<string>('');
  const [activeCommand, setActiveCommand] = useState<CommandType | null>(null);
  const [commandProgress, setCommandProgress] = useState(0);
  const [commandHistory, setCommandHistory] = useState<CommandHistory[]>([]);
  const [activeChain, setActiveChain] = useState<string | null>(null);
  const [commandResonance, setCommandResonance] = useState(0);
  const [commandCombination, setCommandCombination] = useState<CommandType[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandEffects, setCommandEffects] = useState<CommandEffect[]>([]);
  const [gameState, setGameState] = useState<GameState>({
    level: 1,
    power: 100,
    quests: [],
    realm: 'nexus',
    portals: [],
    skills: INITIAL_SKILLS,
    achievements: INITIAL_ACHIEVEMENTS,
    experience: 0,
    mastery: {
      commands: 0,
      realms: 0,
      skills: 0,
    },
  });

  const [dreamState, setDreamState] = useState<DreamState>({
    current: 'awakening',
    progress: 0,
    resonance: 0,
    checkpoints: INITIAL_DREAM_CHECKPOINTS,
    memories: [],
  });

  const [skillTrees, setSkillTrees] = useState<SkillTree[]>(INITIAL_SKILL_TREES);
  const [dreamWeavingState, setDreamWeavingState] = useState<DreamWeavingState>({
    serafinaPresence: 0,
    aelethiaPresence: 0,
    dreamThreads: INITIAL_DREAM_THREADS,
    resonancePatterns: INITIAL_RESONANCE_PATTERNS,
    journalEntries: [],
  });

  const [dreamMilestones, setDreamMilestones] = useState<DreamMilestone[]>(INITIAL_DREAM_MILESTONES);
  const [dreamInsights, setDreamInsights] = useState<DreamInsight[]>(INITIAL_DREAM_INSIGHTS);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { y: parallaxY, opacity: parallaxOpacity, scale: parallaxScale } = useParallax({
    inputRange: [0, 0.5],
    outputRange: [0, 100],
  });

  // Helper function to get rotation values
  const getRotationValues = (isFocused: boolean) => ({
    rotateX: isFocused ? rotateX.get() : 0,
    rotateY: isFocused ? rotateY.get() : 0,
  });

  // Command feedback animation variants
  const commandFeedbackVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  // Undo/Redo handlers
  const undo = useCallback(() => {
    if (historyIndex > 0) {
      setHistoryIndex(prev => prev - 1);
      const command = commandHistory[historyIndex - 1];
      setCommandFeedback(`Undoing: ${command.type} on ${command.element}`);
      // Reverse the effects
      setCommandEffects(prev => [...prev, {
        type: 'ripple',
        intensity: 0.5,
        duration: 500,
      }]);
    }
  }, [historyIndex, commandHistory]);

  const redo = useCallback(() => {
    if (historyIndex < commandHistory.length - 1) {
      setHistoryIndex(prev => prev + 1);
      const command = commandHistory[historyIndex + 1];
      setCommandFeedback(`Redoing: ${command.type} on ${command.element}`);
      // Reapply the effects
      setCommandEffects(prev => [...prev, {
        type: 'resonance',
        intensity: 0.7,
        duration: 500,
      }]);
    }
  }, [historyIndex, commandHistory]);

  // Command combination handler
  const combineCommands = useCallback((commands: CommandType[]) => {
    const combinationId = `combo-${Date.now()}`;
    setCommandCombination(commands);
    setCommandState('combining');
    setCommandFeedback(`Combining: ${commands.join(' + ')}`);
    
    // Create combination effects
    const effects: CommandEffect[] = commands.map((_, index) => ({
      type: ['glow', 'ripple', 'resonance', 'transcend'][index % 4] as CommandEffect['type'],
      intensity: 0.5 + (index * 0.1),
      duration: 1000 + (index * 200),
    }));
    
    setCommandEffects(effects);
  }, []);

  // Skill and achievement handlers
  const handleSkillGain = useCallback((skillId: string, experience: number) => {
    setGameState(prev => {
      const skills = prev.skills.map(skill => {
        if (skill.id === skillId) {
          const newExp = skill.experience + experience;
          const newLevel = Math.floor(newExp / 100) + 1;
          return {
            ...skill,
            experience: newExp,
            level: newLevel,
          };
        }
        return skill;
      });

      return {
        ...prev,
        skills,
        mastery: {
          ...prev.mastery,
          skills: skills.reduce((acc, skill) => acc + skill.level, 0),
        },
      };
    });
  }, []);

  const handleAchievementProgress = useCallback((achievementId: string, progress: number) => {
    setGameState(prev => {
      const achievements = prev.achievements.map(achievement => {
        if (achievement.id === achievementId) {
          const newProgress = Math.min(achievement.progress + progress, 100);
          const unlocked = newProgress >= 100;
          
          if (unlocked && !achievement.unlocked) {
            // Handle achievement unlock rewards
            switch (achievement.reward.type) {
              case 'power':
                prev.power += achievement.reward.value as number;
                break;
              case 'realm':
                prev.realm = achievement.reward.value as string;
                break;
              case 'skill':
                handleSkillGain('combat', achievement.reward.value as number);
                break;
            }
          }

          return {
            ...achievement,
            progress: newProgress,
            unlocked,
          };
        }
        return achievement;
      });

      return {
        ...prev,
        achievements,
      };
    });
  }, [handleSkillGain]);

  // Dream checkpoint handler
  const handleDreamCheckpoint = useCallback((checkpointId: string) => {
    setDreamState(prev => {
      const checkpoint = prev.checkpoints.find(cp => cp.id === checkpointId);
      if (!checkpoint || checkpoint.unlocked) return prev;

      // Check requirements
      const meetsRequirements = Object.entries(checkpoint.requirements.skills).every(
        ([skillId, level]) => {
          const skill = gameState.skills.find(s => s.id === skillId);
          return skill ? skill.level >= level : false;
        }
      ) && checkpoint.requirements.achievements.every(
        achievementId => {
          const achievement = gameState.achievements.find(a => a.id === achievementId);
          return achievement ? achievement.unlocked : false;
        }
      ) && checkpoint.requirements.dreams.every(
        dreamId => {
          const dream = prev.checkpoints.find(cp => cp.id === dreamId);
          return dream ? dream.unlocked : false;
        }
      );

      if (!meetsRequirements) return prev;

      // Apply rewards
      const updatedSkills = gameState.skills.map(skill => {
        const reward = checkpoint.rewards.skills[skill.id];
        if (reward) {
          return {
            ...skill,
            experience: skill.experience + reward,
            level: Math.floor((skill.experience + reward) / 100) + 1,
          };
        }
        return skill;
      });

      setGameState(prev => ({
        ...prev,
        skills: updatedSkills,
      }));

      return {
        ...prev,
        current: checkpointId,
        progress: prev.progress + 1,
        resonance: prev.resonance + checkpoint.rewards.resonance,
        checkpoints: prev.checkpoints.map(cp =>
          cp.id === checkpointId ? { ...cp, unlocked: true } : cp
        ),
        memories: [...prev.memories, ...checkpoint.rewards.memories],
      };
    });
  }, [gameState]);

  // Skill tree handler
  const handleSkillTreeUnlock = useCallback((treeId: string) => {
    setSkillTrees(prev => {
      const tree = prev.find(t => t.id === treeId);
      if (!tree || tree.unlocked) return prev;

      // Check requirements
      const meetsRequirements = Object.entries(tree.requirements.skills).every(
        ([skillId, level]) => {
          const skill = gameState.skills.find(s => s.id === skillId);
          return skill ? skill.level >= level : false;
        }
      ) && tree.requirements.dreams.every(
        dreamId => {
          const dream = dreamState.checkpoints.find(cp => cp.id === dreamId);
          return dream ? dream.unlocked : false;
        }
      ) && dreamState.resonance >= tree.requirements.resonance;

      if (!meetsRequirements) return prev;

      return prev.map(t =>
        t.id === treeId ? { ...t, unlocked: true } : t
      );
    });
  }, [gameState, dreamState]);

  // Ability unlock handler
  const handleAbilityUnlock = useCallback((treeId: string, abilityId: string) => {
    setSkillTrees(prev => {
      const tree = prev.find(t => t.id === treeId);
      if (!tree || !tree.unlocked) return prev;

      const ability = tree.abilities.find(a => a.id === abilityId);
      if (!ability || ability.unlocked) return prev;

      // Check requirements
      const meetsRequirements = ability.requirements.dreams.every(
        dreamId => {
          const dream = dreamState.checkpoints.find(cp => cp.id === dreamId);
          return dream ? dream.unlocked : false;
        }
      ) && (() => {
        const skill = gameState.skills.find(s => s.id === tree.id);
        return skill ? skill.level >= ability.requirements.skillLevel : false;
      })();

      if (!meetsRequirements) return prev;

      return prev.map(t =>
        t.id === treeId
          ? {
              ...t,
              abilities: t.abilities.map(a =>
                a.id === abilityId ? { ...a, unlocked: true } : a
              ),
            }
          : t
      );
    });
  }, [gameState, dreamState]);

  // Enhanced game command handler
  const handleGameCommand = useCallback((command: CommandType, element: string) => {
    const effects: CommandEffect[] = [];
    let newGameState = { ...gameState };
    const skillGains: CommandHistory['skillGains'] = [];
    const achievementProgress: CommandHistory['achievementProgress'] = [];

    switch (command) {
      case 'spawn':
        effects.push({
          type: 'spawn',
          intensity: 0.8,
          duration: 1000,
          gameEffect: {
            type: 'powerBoost',
            value: 10,
          },
        });
        newGameState.power += 10;
        handleSkillGain('combat', 20);
        skillGains.push({ skillId: 'combat', experience: 20 });
        break;

      case 'level':
        effects.push({
          type: 'level',
          intensity: 1,
          duration: 1500,
          gameEffect: {
            type: 'levelUp',
            value: 1,
          },
        });
        newGameState.level += 1;
        newGameState.power += 50;
        newGameState.experience += 100;
        handleSkillGain('magic', 50);
        skillGains.push({ skillId: 'magic', experience: 50 });
        handleAchievementProgress('skill-master', 10);
        achievementProgress.push({ achievementId: 'skill-master', progress: 10 });
        break;

      case 'quest':
        const newQuest = `Quest ${gameState.quests.length + 1}`;
        effects.push({
          type: 'quest',
          intensity: 0.7,
          duration: 1200,
          gameEffect: {
            type: 'questComplete',
            value: gameState.quests.length + 1,
          },
        });
        newGameState.quests = [...gameState.quests, newQuest];
        handleSkillGain('exploration', 30);
        skillGains.push({ skillId: 'exploration', experience: 30 });
        break;

      case 'realm':
        const realms = ['nexus', 'void', 'ethereal', 'cosmic'];
        const currentIndex = realms.indexOf(gameState.realm);
        const nextRealm = realms[(currentIndex + 1) % realms.length];
        effects.push({
          type: 'transcend',
          intensity: 0.9,
          duration: 2000,
          gameEffect: {
            type: 'realmShift',
            value: currentIndex + 1,
          },
        });
        newGameState.realm = nextRealm;
        handleSkillGain('magic', 40);
        skillGains.push({ skillId: 'magic', experience: 40 });
        handleAchievementProgress('realm-master', 25);
        achievementProgress.push({ achievementId: 'realm-master', progress: 25 });
        break;
    }

    setGameState(newGameState);
    executeCommand(command, element, effects, newGameState, skillGains, achievementProgress);

    // Add dream resonance
    setDreamState(prev => ({
      ...prev,
      resonance: prev.resonance + 10,
    }));

    // Check for dream checkpoint unlocks
    dreamState.checkpoints.forEach(checkpoint => {
      if (!checkpoint.unlocked) {
        handleDreamCheckpoint(checkpoint.id);
      }
    });

    // Check for skill tree unlocks
    skillTrees.forEach(tree => {
      if (!tree.unlocked) {
        handleSkillTreeUnlock(tree.id);
      }
    });
  }, [gameState, dreamState, skillTrees, handleDreamCheckpoint, handleSkillTreeUnlock]);

  // Enhanced command execution handler
  const executeCommand = (
    command: CommandType, 
    element: string, 
    effects: CommandEffect[] = [{
      type: 'glow',
      intensity: 0.5,
      duration: 1000,
    }],
    newGameState?: GameState,
    skillGains?: CommandHistory['skillGains'],
    achievementProgress?: CommandHistory['achievementProgress']
  ) => {
    const commandId = `${command}-${Date.now()}`;
    const newCommand: CommandHistory = {
      id: commandId,
      type: command,
      element,
      timestamp: Date.now(),
      chainId: activeChain,
      combinationId: commandCombination.length > 0 ? `combo-${Date.now()}` : undefined,
      effects,
      gameState: newGameState,
      skillGains,
      achievementProgress,
    };

    setCommandHistory(prev => [...prev, newCommand]);
    setHistoryIndex(prev => prev + 1);
    setCommandState('executing');
    setActiveCommand(command);
    setCommandProgress(0);
    setCommandEffects(effects);

    // Simulate command execution with resonance
    const interval = setInterval(() => {
      setCommandProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setCommandState('idle');
          setActiveCommand(null);
          setCommandResonance(0);
          setCommandEffects([]);
          return 0;
        }
        setCommandResonance(prev / 100);
        return prev + 10;
      });
    }, 100);
  };

  // Keyboard shortcuts for undo/redo
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) {
        if (e.key === 'z') {
          e.preventDefault();
          if (e.shiftKey) {
            redo();
          } else {
            undo();
          }
        } else if (e.key === 'y') {
          e.preventDefault();
          redo();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo]);

  // Start command chain
  const startCommandChain = () => {
    const chainId = `chain-${Date.now()}`;
    setActiveChain(chainId);
    setCommandState('chaining');
    setCommandFeedback('Command Chain Ready');
  };

  // End command chain
  const endCommandChain = () => {
    setActiveChain(null);
    setCommandState('idle');
    setCommandFeedback('Command Chain Complete');
  };

  // Dream weaving handlers
  const handleDreamWeave = useCallback((threadId: string, patternId: string) => {
    const thread = dreamWeavingState.dreamThreads.find(t => t.id === threadId);
    const pattern = dreamWeavingState.resonancePatterns.find(p => p.id === patternId);
    
    if (!thread || !pattern) return;

    // Update presence based on pattern type
    setDreamWeavingState(prev => ({
      ...prev,
      serafinaPresence: pattern.type === 'serafina' || pattern.type === 'combined' 
        ? prev.serafinaPresence + pattern.effects.resonance 
        : prev.serafinaPresence,
      aelethiaPresence: pattern.type === 'aelethia' || pattern.type === 'combined'
        ? prev.aelethiaPresence + pattern.effects.resonance
        : prev.aelethiaPresence,
    }));

    // Add journal entry
    const newEntry: JournalEntry = {
      id: `entry-${Date.now()}`,
      title: `Dream Weaving: ${thread.name}`,
      content: `Wove the dream thread "${thread.name}" using ${pattern.name}`,
      timestamp: Date.now(),
      resonance: pattern.effects.resonance,
      associatedThreads: [threadId],
      emotions: thread.emotions,
      insights: [`Gained ${pattern.effects.skill} skill resonance`],
    };

    setDreamWeavingState(prev => ({
      ...prev,
      journalEntries: [...prev.journalEntries, newEntry],
    }));

    // Update dream state
    setDreamState(prev => ({
      ...prev,
      resonance: prev.resonance + pattern.effects.resonance,
    }));

    // Check for milestone unlocks
    dreamMilestones.forEach(milestone => {
      if (!milestone.unlocked) {
        const meetsRequirements = 
          dreamWeavingState.serafinaPresence >= milestone.requirements.serafinaPresence &&
          dreamWeavingState.aelethiaPresence >= milestone.requirements.aelethiaPresence &&
          milestone.requirements.dreamThreads.every(threadId => 
            dreamWeavingState.dreamThreads.some(t => t.id === threadId)
          ) &&
          dreamState.resonance >= milestone.requirements.resonance;

        if (meetsRequirements) {
          setDreamMilestones(prev => 
            prev.map(m => 
              m.id === milestone.id 
                ? { ...m, unlocked: true }
                : m
            )
          );

          // Add milestone insight
          const newInsight: DreamInsight = {
            id: `milestone-${milestone.id}`,
            title: `Milestone: ${milestone.name}`,
            content: milestone.description,
            resonance: milestone.resonance,
            source: 'combined',
            associatedThreads: milestone.requirements.dreamThreads,
            emotions: ['achievement', 'growth'],
            timestamp: Date.now(),
          };

          setDreamInsights(prev => [...prev, newInsight]);

          // Apply milestone rewards
          setDreamWeavingState(prev => ({
            ...prev,
            serafinaPresence: prev.serafinaPresence + milestone.rewards.serafinaPresence,
            aelethiaPresence: prev.aelethiaPresence + milestone.rewards.aelethiaPresence,
          }));

          setDreamState(prev => ({
            ...prev,
            resonance: prev.resonance + milestone.rewards.resonance,
          }));

          // Add command effect
          setCommandEffects(prev => [...prev, {
            type: 'resonance',
            intensity: 1,
            duration: 3000,
          }]);
        }
      }
    });

    // Add command effect
    setCommandEffects(prev => [...prev, {
      type: 'resonance',
      intensity: pattern.strength,
      duration: 2000,
    }]);
  }, [dreamWeavingState, dreamState, dreamMilestones]);

  // Dream Journal Display
  const DreamJournal = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed right-4 bottom-4 z-50 bg-hologram/80 backdrop-blur-md p-4 rounded-lg shadow-dream-journal"
    >
      <h3 className="text-accent font-display mb-2">Dream Journal</h3>
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {dreamWeavingState.journalEntries.map(entry => (
          <motion.div
            key={entry.id}
            className="text-sm p-2 rounded bg-hologram/30 animate-dream-journal"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-accent">{entry.title}</span>
              <span className="text-white text-xs">
                Resonance: {entry.resonance}
              </span>
            </div>
            <p className="text-gray-300 text-xs">{entry.content}</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {entry.emotions.map(emotion => (
                <span
                  key={emotion}
                  className="text-xs px-1 py-0.5 rounded bg-hologram/50 text-accent"
                >
                  {emotion}
                </span>
              ))}
            </div>
            <div className="mt-1 text-xs text-gray-400">
              {entry.insights.map((insight, i) => (
                <div key={i}>{insight}</div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  // Dream Weaving Interface
  const DreamWeavingInterface = () => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 bg-hologram/80 backdrop-blur-md p-4 rounded-lg shadow-dream-serafina"
    >
      <h3 className="text-accent font-display mb-2">Dream Weaving</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-accent">Serafina's Presence</span>
          <span className="text-white">{dreamWeavingState.serafinaPresence}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-accent">Aelethia's Presence</span>
          <span className="text-white">{dreamWeavingState.aelethiaPresence}</span>
        </div>
        <div className="space-y-2">
          {dreamWeavingState.dreamThreads.map(thread => (
            <motion.div
              key={thread.id}
              className="p-2 rounded bg-hologram/30 animate-dream-float"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center">
                <span className="text-sm text-accent">{thread.name}</span>
                <span className="text-white text-xs">
                  Resonance: {thread.resonance}
                </span>
              </div>
              <div className="mt-2 space-y-1">
                {dreamWeavingState.resonancePatterns.map(pattern => (
                  <motion.button
                    key={pattern.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full text-xs p-1 rounded ${
                      pattern.type === 'serafina' ? 'bg-dream-serafina' :
                      pattern.type === 'aelethia' ? 'bg-dream-aelethia' :
                      'bg-dream-resonance'
                    }`}
                    onClick={() => handleDreamWeave(thread.id, pattern.id)}
                  >
                    {pattern.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  // Dream Milestones Display
  const DreamMilestones = () => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed left-4 top-1/4 z-50 bg-hologram/80 backdrop-blur-md p-4 rounded-lg shadow-dream-milestone"
    >
      <h3 className="text-accent font-display mb-2">Dream Milestones</h3>
      <div className="space-y-2">
        {dreamMilestones.map(milestone => (
          <motion.div
            key={milestone.id}
            className={`p-2 rounded ${
              milestone.unlocked 
                ? 'bg-dream-milestone animate-milestone-unlock' 
                : 'bg-hologram/30'
            }`}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex justify-between items-center">
              <span className={`text-sm ${
                milestone.unlocked ? 'text-accent' : 'text-gray-400'
              }`}>
                {milestone.name}
              </span>
              <span className="text-white text-xs">
                Resonance: {milestone.resonance}
              </span>
            </div>
            <p className="text-gray-300 text-xs mt-1">{milestone.description}</p>
            {!milestone.unlocked && (
              <div className="mt-2 space-y-1">
                <div className="text-xs text-gray-400">
                  Serafina: {dreamWeavingState.serafinaPresence}/{milestone.requirements.serafinaPresence}
                </div>
                <div className="text-xs text-gray-400">
                  Aelethia: {dreamWeavingState.aelethiaPresence}/{milestone.requirements.aelethiaPresence}
                </div>
                <div className="text-xs text-gray-400">
                  Resonance: {dreamState.resonance}/{milestone.requirements.resonance}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  // Dream Insights Display
  const DreamInsights = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed right-4 top-1/4 z-50 bg-hologram/80 backdrop-blur-md p-4 rounded-lg shadow-dream-insight"
    >
      <h3 className="text-accent font-display mb-2">Dream Insights</h3>
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {dreamInsights.map(insight => (
          <motion.div
            key={insight.id}
            className="text-sm p-2 rounded bg-hologram/30 animate-insight-gain"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-accent">{insight.title}</span>
              <span className="text-white text-xs">
                Resonance: {insight.resonance}
              </span>
            </div>
            <p className="text-gray-300 text-xs">{insight.content}</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {insight.emotions.map(emotion => (
                <span
                  key={emotion}
                  className="text-xs px-1 py-0.5 rounded bg-hologram/50 text-accent"
                >
                  {emotion}
                </span>
              ))}
            </div>
            <div className="mt-1 text-xs text-gray-400">
              Source: {insight.source}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Custom Cursor */}
      <motion.div
        variants={cursorVariants}
        initial="default"
        animate="default"
        whileHover="hover"
        style={cursorStyle}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 animate-command-pulse"
      />

      {/* Command History with Undo/Redo */}
      <AnimatePresence>
        {commandHistory.length > 0 && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 bg-hologram/80 backdrop-blur-md p-4 rounded-lg shadow-hologram-glow"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-accent font-display">Command History</h3>
              <div className="space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-2 py-1 bg-hologram/50 rounded text-accent text-sm hover:bg-hologram/70 transition-colors"
                  onClick={undo}
                >
                  Undo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-2 py-1 bg-hologram/50 rounded text-accent text-sm hover:bg-hologram/70 transition-colors"
                  onClick={redo}
                >
                  Redo
                </motion.button>
              </div>
            </div>
            <div className="space-y-2">
              {commandHistory.slice(-5).map((cmd, index) => (
                <motion.div
                  key={cmd.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm ${index === historyIndex ? 'text-accent' : 'text-gray-300'}`}
                >
                  <span className="text-accent">{cmd.type}</span>
                  <span className="text-gray-400"> on </span>
                  <span className="text-white">{cmd.element}</span>
                  {cmd.chainId && (
                    <span className="text-accent/70 ml-1">(chained)</span>
                  )}
                  {cmd.combinationId && (
                    <span className="text-accent/70 ml-1">(combined)</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Game State Display */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 right-4 z-50 bg-hologram/80 backdrop-blur-md p-4 rounded-lg shadow-hologram-glow"
        >
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-accent">Level:</span>
              <span className="text-white">{gameState.level}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-accent">Power:</span>
              <span className="text-white">{gameState.power}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-accent">Realm:</span>
              <span className="text-white capitalize">{gameState.realm}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-accent">Quests:</span>
              <span className="text-white">{gameState.quests.length}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-accent">Experience:</span>
              <span className="text-white">{gameState.experience}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Skills Display */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-hologram/80 backdrop-blur-md p-4 rounded-lg shadow-hologram-glow"
        >
          <h3 className="text-accent font-display mb-2">Skills</h3>
          <div className="space-y-2">
            {gameState.skills.map(skill => (
              <motion.div
                key={skill.id}
                className="text-sm"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-accent">{skill.name}</span>
                  <span className="text-white">Lvl {skill.level}</span>
                </div>
                <div className="w-full h-1 bg-hologram/20 rounded-full mt-1">
                  <motion.div
                    className="h-full bg-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(skill.experience % 100)}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Achievements Display */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed right-4 bottom-4 z-50 bg-hologram/80 backdrop-blur-md p-4 rounded-lg shadow-hologram-glow"
        >
          <h3 className="text-accent font-display mb-2">Achievements</h3>
          <div className="space-y-2">
            {gameState.achievements.map(achievement => (
              <motion.div
                key={achievement.id}
                className="text-sm"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="flex justify-between items-center">
                  <span className={`${achievement.unlocked ? 'text-accent' : 'text-gray-400'}`}>
                    {achievement.name}
                  </span>
                  <span className="text-white">{achievement.progress}%</span>
                </div>
                <div className="w-full h-1 bg-hologram/20 rounded-full mt-1">
                  <motion.div
                    className={`h-full ${achievement.unlocked ? 'bg-accent' : 'bg-gray-400'} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${achievement.progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dream State Display */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 left-4 z-50 bg-hologram/80 backdrop-blur-md p-4 rounded-lg shadow-hologram-glow"
        >
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-accent">Current Dream:</span>
              <span className="text-white capitalize">{dreamState.current}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-accent">Resonance:</span>
              <span className="text-white">{dreamState.resonance}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-accent">Progress:</span>
              <span className="text-white">{dreamState.progress}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Skill Trees Display */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 bg-hologram/80 backdrop-blur-md p-4 rounded-lg shadow-hologram-glow"
        >
          <h3 className="text-accent font-display mb-2">Dream Skills</h3>
          <div className="space-y-4">
            {skillTrees.map(tree => (
              <motion.div
                key={tree.id}
                className={`p-3 rounded-lg ${
                  tree.unlocked ? 'bg-hologram/50' : 'bg-hologram/20'
                }`}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-sm ${tree.unlocked ? 'text-accent' : 'text-gray-400'}`}>
                    {tree.name}
                  </span>
                  <span className="text-xs text-white">
                    Resonance: {tree.resonance}
                  </span>
                </div>
                {tree.unlocked && (
                  <div className="space-y-2">
                    {tree.abilities.map(ability => (
                      <motion.div
                        key={ability.id}
                        className={`text-xs p-2 rounded ${
                          ability.unlocked ? 'bg-hologram/70' : 'bg-hologram/30'
                        }`}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex justify-between items-center">
                          <span className={ability.unlocked ? 'text-accent' : 'text-gray-400'}>
                            {ability.name}
                          </span>
                          <span className="text-white">
                            {ability.resonance}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dream Memories Display */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed right-4 bottom-4 z-50 bg-hologram/80 backdrop-blur-md p-4 rounded-lg shadow-hologram-glow"
        >
          <h3 className="text-accent font-display mb-2">Dream Memories</h3>
          <div className="space-y-2">
            {dreamState.memories.map(memory => (
              <motion.div
                key={memory.id}
                className="text-sm p-2 rounded bg-hologram/30"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-accent">{memory.title}</span>
                  <span className="text-white text-xs">
                    Resonance: {memory.resonance}
                  </span>
                </div>
                <p className="text-gray-300 text-xs">{memory.content}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {memory.emotions.map(emotion => (
                    <span
                      key={emotion}
                      className="text-xs px-1 py-0.5 rounded bg-hologram/50 text-accent"
                    >
                      {emotion}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Command Menu with Game Commands */}
      <AnimatePresence>
        {commandState === 'ready' && focusedElement && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-hologram/90 backdrop-blur-md p-4 rounded-lg shadow-hologram-glow"
          >
            <div className="grid grid-cols-2 gap-4">
              {([
                'spawn', 'level', 'power', 'evolve',
                'quest', 'realm', 'portal', 'nexus',
                'reveal', 'transform', 'summon', 'enhance',
                'merge', 'split', 'resonate', 'transcend',
                'ascend', 'descend', 'converge', 'diverge'
              ] as CommandType[]).map((cmd) => (
                <motion.button
                  key={cmd}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 bg-hologram/50 rounded-lg text-accent font-display hover:bg-hologram/70 transition-colors ${
                    commandCombination.includes(cmd) ? 'ring-2 ring-accent' : ''
                  }`}
                  onClick={() => {
                    if (['spawn', 'level', 'quest', 'realm'].includes(cmd)) {
                      handleGameCommand(cmd, focusedElement);
                    } else {
                      if (commandCombination.includes(cmd)) {
                        setCommandCombination(prev => prev.filter(c => c !== cmd));
                      } else {
                        setCommandCombination(prev => [...prev, cmd]);
                      }
                    }
                  }}
                >
                  {cmd.charAt(0).toUpperCase() + cmd.slice(1)}
                </motion.button>
              ))}
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-hologram/50 rounded-lg text-accent font-display hover:bg-hologram/70 transition-colors"
                onClick={startCommandChain}
              >
                Start Chain
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-hologram/50 rounded-lg text-accent font-display hover:bg-hologram/70 transition-colors"
                onClick={endCommandChain}
              >
                End Chain
              </motion.button>
              {commandCombination.length > 0 && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-hologram/50 rounded-lg text-accent font-display hover:bg-hologram/70 transition-colors"
                  onClick={() => combineCommands(commandCombination)}
                >
                  Combine
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Command Feedback with Resonance */}
      <AnimatePresence>
        {commandFeedback && (
          <motion.div
            variants={commandFeedbackVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-hologram/80 backdrop-blur-md px-6 py-3 rounded-lg shadow-hologram-glow"
            style={{
              boxShadow: `0 0 ${20 + commandResonance * 30}px rgba(0,113,227,${0.3 + commandResonance * 0.2})`,
            }}
          >
            <span className="text-accent font-display">{commandFeedback}</span>
            {commandState === 'executing' && (
              <motion.div 
                className="h-1 bg-accent mt-2 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: commandProgress / 100 }}
                transition={{ duration: 0.1 }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resonance Ripple Effect */}
      <AnimatePresence>
        {commandResonance > 0 && (
          <motion.div
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ 
              scale: 1 + commandResonance,
              opacity: 0,
            }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-hologram/20 animate-hologram-ripple"
            style={{
              boxShadow: `0 0 ${commandResonance * 100}px rgba(0,113,227,${0.2 + commandResonance * 0.3})`,
            }}
          />
        )}
      </AnimatePresence>

      {/* Game Effects */}
      <AnimatePresence>
        {commandEffects.map((effect, index) => (
          <motion.div
            key={`${effect.type}-${index}`}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ 
              scale: 1 + effect.intensity,
              opacity: 0,
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: effect.duration / 1000 }}
            className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-hologram/20 animate-${effect.type}`}
            style={{
              boxShadow: `0 0 ${effect.intensity * 100}px rgba(0,113,227,${0.2 + effect.intensity * 0.3})`,
            }}
          >
            {effect.gameEffect && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-accent font-display"
              >
                {effect.gameEffect.type === 'levelUp' && `Level Up! +${effect.gameEffect.value}`}
                {effect.gameEffect.type === 'powerBoost' && `Power +${effect.gameEffect.value}`}
                {effect.gameEffect.type === 'questComplete' && `Quest ${effect.gameEffect.value} Complete!`}
                {effect.gameEffect.type === 'realmShift' && 'Realm Shift!'}
              </motion.div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50 shadow-hologram"
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={backgroundVariants}
          className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-900/20 backdrop-blur-sm bg-hologram-scan animate-hologram-scan"
          style={{
            rotateX,
            rotateY,
            perspective,
            transformStyle: 'preserve-3d',
          }}
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={gradientVariants}
          className="absolute inset-0 bg-gradient-to-br from-accent/10 to-purple-500/10 animate-hologram-float"
          style={{
            rotateX,
            rotateY,
            perspective,
            transformStyle: 'preserve-3d',
          }}
        />
        <motion.div
          style={{ 
            y: parallaxY, 
            opacity: parallaxOpacity, 
            scale: parallaxScale,
            rotateX,
            rotateY,
            perspective,
            transformStyle: 'preserve-3d',
          }}
          className="text-center z-10 transform-perspective"
        >
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-8xl font-display font-bold mb-6"
          >
            {Array.from('MKWW').map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                className="inline-block hover:animate-command-pulse"
                onHoverStart={() => {
                  setFocusedElement(`letter-${i}`);
                  setCommandState('ready');
                  setCommandFeedback('Command Ready');
                }}
                onHoverEnd={() => {
                  setFocusedElement(null);
                  setCommandState('idle');
                  setCommandFeedback('');
                }}
                animate={{
                  scale: focusedElement === `letter-${i}` ? 1.2 : 1,
                  textShadow: focusedElement === `letter-${i}` 
                    ? '0 0 20px rgba(0,113,227,0.5)' 
                    : 'none',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-2xl text-gray-400 max-w-2xl mx-auto animate-hologram-flicker"
            onHoverStart={() => {
              setFocusedElement('tagline');
              setCommandState('ready');
              setCommandFeedback('Command Ready');
            }}
            onHoverEnd={() => {
              setFocusedElement(null);
              setCommandState('idle');
              setCommandFeedback('');
            }}
            style={{
              scale: focusedElement === 'tagline' ? 1.05 : 1,
              color: focusedElement === 'tagline' ? '#ffffff' : '#9ca3af',
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            Where Innovation Meets Imagination
          </motion.p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black to-surface/50 backdrop-blur-sm bg-hologram-scan animate-hologram-scan"
          style={{
            rotateX,
            rotateY,
            perspective,
            transformStyle: 'preserve-3d',
          }}
        />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={featuresVariants}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl font-display font-bold mb-6 animate-hologram-flicker"
              onHoverStart={() => {
                setFocusedElement('section-title');
                setCommandState('ready');
                setCommandFeedback('Command Ready');
              }}
              onHoverEnd={() => {
                setFocusedElement(null);
                setCommandState('idle');
                setCommandFeedback('');
              }}
              style={{
                scale: focusedElement === 'section-title' ? 1.1 : 1,
                textShadow: focusedElement === 'section-title' 
                  ? '0 0 30px rgba(0,113,227,0.3)' 
                  : 'none',
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              What We Do
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              onHoverStart={() => {
                setFocusedElement('section-desc');
                setCommandState('ready');
                setCommandFeedback('Command Ready');
              }}
              onHoverEnd={() => {
                setFocusedElement(null);
                setCommandState('idle');
                setCommandFeedback('');
              }}
              style={{
                scale: focusedElement === 'section-desc' ? 1.05 : 1,
                color: focusedElement === 'section-desc' ? '#ffffff' : '#9ca3af',
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Crafting digital experiences that inspire and transform
            </motion.p>
          </motion.div>

          <motion.div
            ref={featuresRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Web Development',
                description: 'Building modern, responsive websites that engage and convert.',
                icon: '🌐',
              },
              {
                title: 'Mobile Apps',
                description: 'Creating intuitive mobile experiences that users love.',
                icon: '📱',
              },
              {
                title: 'UI/UX Design',
                description: 'Designing beautiful, user-centered interfaces that delight.',
                icon: '🎨',
              },
            ].map((feature, index) => {
              const isFocused = focusedElement === `feature-${index}`;
              const rotation = getRotationValues(isFocused);
              
              return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
                  className="p-8 bg-hologram/50 backdrop-blur-md rounded-lg cursor-pointer shadow-hologram hover:shadow-hologram-glow transition-all duration-300 group animate-hologram-float"
                  onHoverStart={() => {
                    setFocusedElement(`feature-${index}`);
                    setCommandState('ready');
                    setCommandFeedback(`Command Ready: ${feature.title}`);
                  }}
                  onHoverEnd={() => {
                    setFocusedElement(null);
                    setCommandState('idle');
                    setCommandFeedback('');
                  }}
                  animate={{
                    scale: isFocused ? 1.05 : 1,
                    rotateX: rotation.rotateX,
                    rotateY: rotation.rotateY,
                    z: isFocused ? 50 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  style={{
                    perspective,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <motion.div 
                    className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300"
                    animate={{
                      scale: isFocused ? 1.2 : 1,
                      rotateX: rotation.rotateX,
                      rotateY: rotation.rotateY,
                    }}
                  >
                    {feature.icon}
              </motion.div>
                  <motion.h3 
                    className="text-xl font-display font-bold mb-3 group-hover:text-accent transition-colors duration-300"
                    animate={{
                      color: isFocused ? '#0071e3' : '#ffffff',
                      textShadow: isFocused 
                        ? '0 0 20px rgba(0,113,227,0.3)' 
                        : 'none',
                    }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                    animate={{
                      color: isFocused ? '#ffffff' : '#9ca3af',
                    }}
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Dream Weaving Interface */}
      <DreamWeavingInterface />
      
      {/* Dream Journal */}
      <DreamJournal />
      
      {/* Dream Milestones */}
      <DreamMilestones />
      
      {/* Dream Insights */}
      <DreamInsights />
    </div>
  );
};

export default Home; 