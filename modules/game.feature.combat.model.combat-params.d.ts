// requires game.feature.model.base-model

export {};

declare global {
  namespace sc {
    enum ELEMENT {
      NEUTRAL = 0,
      HEAT = 1,
      COLD = 2,
      SHOCK = 3,
      WAVE = 4,
    }

    enum COMBAT_PARAM_MSG {
      HP_CHANGED = 1,
      SP_CHANGED = 2,
      STATS_CHANGED = 3,
      BUFF_ADDED = 4,
      BUFF_REMOVED = 5,
      RESET_STATS = 6,
      MAX_SP_CHANGED = 7,
      SP_CONSUME = 8,
      BUFFS_CLEARED = 9,
    }

    var ELEMENT_MAX: number;
    var ELEMENT_COUNTER: Record<ELEMENT, ELEMENT>;
    var SP_REGEN_SPEED: { [maxSp: number]: number };
    var SP_REGEN_FACTOR: number;
    var HP_LOW_WARNING: number;

    namespace CombatParams {
      interface Params {
        hp: number;
        attack: number;
        defense: number;
        focus: number;
      }
      type ParamName = keyof sc.CombatParams.Params;

      interface BaseParams extends Params {
        elemFactor: number[];
        statusInflict: number[];
        statusEffect: number[];
      }

      interface HealAmount {
        value: number;
        absolute?: boolean;
      }

      interface DamageResult {
        damage: number;
        defReduced: number;
        offensiveFactor: number;
        baseOffensiveFactor: number;
        elementalDef: number;
        defensiveFactor: number;
        critical: number;
        status: number;
      }
    }
    interface CombatParams extends ig.Class, sc.Model {
      combatant: ig.ENTITY.Combatant;
      baseParams: sc.CombatParams.BaseParams;
      modifiers: Record<keyof sc.MODIFIERS, number>;
      currentHp: number;
      maxSp: number;
      spHoldTimer: number;
      currentItemBuffs: number;
      tmpElemFactor: number[];
      tmpStatusInflict: number[];
      damageFactor: number;
      ballFactor: number;
      defeated: boolean;
      statusStates: sc.CombatStatusBase[];
      hpRegTime: number;
      hpHealTimer: number;
      criticalDmgFactor: number;

      getStat<K extends sc.CombatParams.ParamName>(
        this: this,
        key: K,
        noHack?: boolean | null,
      ): sc.CombatParams.Params[K];
      getModifier<K extends keyof sc.MODIFIERS>(this: this, modifier: K): number;
      getHealAmount(this: this, amount: CombatParams.HealAmount): number;
      increaseHp(this: this, amount: number): void;
      getHpFactor(this: this): number;
      getRelativeSp(this: this): number;
      update(this: this, inCombat: boolean): void;
    }
    interface CombatParamsConstructor extends ImpactClass<CombatParams> {}
    var CombatParams: CombatParamsConstructor;
  }
}
