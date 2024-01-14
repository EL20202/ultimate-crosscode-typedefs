// requires impact.base.game
// requires impact.feature.bgm.bgm
// requires game.feature.model.base-model
// requires game.feature.player.player-model
// requires game.feature.msg.message-model
// requires game.feature.menu.menu-model
// requires game.feature.model.options-model
// requires impact.feature.env-particles.env-particles

export {};

declare global {
  namespace sc {
    type CombatRankLabel = 'D' | 'C' | 'B' | 'A' | 'S';
    interface CombatRank {
      label: CombatRankLabel;
      dropRate: number;
    }

    let COMBAT_RANK: CombatRank[];

    interface GameMobilityBlockEntry {
      teleportBlock?: boolean;
      saveBlock?: boolean;
      checkpointBlock?: boolean;
      mapLeaveBlock?: boolean;
    }
    interface GAME_MOBILITY_BLOCK {
      NONE: GameMobilityBlockEntry;
      TELEPORT: GameMobilityBlockEntry;
      SAVE: GameMobilityBlockEntry;
      CHECKPOINT: GameMobilityBlockEntry;
      NO_MAP_LEAVE: GameMobilityBlockEntry;
    }
    let GAME_MOBILITY_BLOCK: GAME_MOBILITY_BLOCK;

    interface GameModel extends ig.GameAddon, sc.Model {
      currentSubState: sc.GAME_MODEL_SUBSTATE;
      prevSubState: sc.GAME_MODEL_SUBSTATE;
      player: sc.PlayerModel;
      message: sc.MessageModel;
      mobilityBlock: keyof GAME_MOBILITY_BLOCK;

      addChoiceGui(this: this, choiceGui: ig.GuiElementBase): void;
      removeChoiceGui(this: this, choiceGui: ig.GuiElementBase): void;
      getCombatRankDropRate(this: this): number;
      isAssistMode(this: this): boolean;
      setMobilityBlock(this: this, mobilityBlock: keyof sc.GAME_MOBILITY_BLOCK): void;
      enterCutscene(this: this, combatCutscene?: boolean): void;
      enterGame(this: this): void;
      enterPrevSubState(this: this): void;
      enterMenu(this: this, force?: Optional<boolean>): void;
      isTitle(this: this): boolean;
      isGame(this: this): boolean;
      isCutscene(this: this): boolean;
      isRunning(this: this): boolean;
      isTeleport(this: this): boolean;
      isLoading(this: this): boolean;
      isNewGame(this: this): boolean;
      isReset(this: this): boolean;
      isLoadGame(this: this): boolean;
      isMenu(this: this): boolean;
      isPaused(this: this): boolean;
      isHUDBlocked(this: this): boolean;      
      isLevelUp(this: this): boolean;      
      isQuestSolved(this: this): boolean;      
      isQuickMenu(this: this): boolean;      
      isQuickMenuElementSwapEnabled(this: this): boolean;      
      isOnMapMenu(this: this): boolean;      
      isForceCombat(this: this): boolean;      
      isCombatMode(this: this): boolean;      
      isCombatActive(this: this): boolean;      
      isCombatCooldown(this: this): boolean;      
      getCombatCooldownFactor(this: this): number;      
      isSaveAllowed(this: this): boolean;      
      isPlayerControlBlocked(this: this): boolean;      
      hasActiveChoice(this: this): boolean;      
      startSkip(this: this): void;      
      stopSkip(this: this): void;      
    }
    interface GameModelConstructor extends ImpactClass<GameModel> {
      new (): GameModel;
    }
    var GameModel: GameModelConstructor;
    var model: sc.GameModel;

    enum GAME_MODEL_MSG {
      STATE_CHANGED = 0,
      TASK_CHANGED = 1,
      SUB_STATE_CHANGED = 2,
      COMBAT_MODE_CHANGED = 3,
      COMBAT_RANK_CHANGED = 4,
      CUTSCENE_SKIP = 5,
      RESET_MENU_STATE = 6,
      PERMA_TASK_CHANGED = 7,
      CLEAR_TOP_MESSAGE = 8,
      DREAM_MODE_CHANGE = 9
    }

    enum GAME_MODEL_SUBSTATE {
      RUNNING = 0,
      TELEPORT = 1,
      LOADING = 2,
      NEWGAME = 3,
      RESET = 4,
      LOADGAME = 5,
      MENU = 6,
      PAUSE = 7,
      LEVELUP = 8,
      QUICK = 9,
      ONMAPMENU = 10,
      QUESTSOLVED = 11,
    }
  }
}
