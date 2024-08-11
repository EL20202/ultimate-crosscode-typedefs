// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
    namespace ig.ENTITY {
        interface BombPanel extends ig.AnimatedEntity {
            bomb?: sc.BombEntity;
            onBombStart(this: this): void;
            onBombExplode(this: this): void;
        }
        interface BombPanelConstructor extends ImpactClass<BombPanel> {
        }
        var BombPanel: BombPanelConstructor;
    }

    namespace sc {
        interface BombEntity extends ig.AnimatedEntity {
            panel?: ig.ENTITY.BombPanel;
            timer?: number;
            combatant?: sc.BasicCombatant;
            heatMode: boolean;
            effects: Record<string, ig.EffectSheet>;
            cameraHandle?: ig.Camera.TargetHandle; 
            noHeatFocus: boolean;

            explode(this: this): void;
            enterHeatMode(this: this, vel: Vec2, combatant?: sc.BasicCombatant): void;
        }
        interface BombEntityConstructor extends ImpactClass<BombEntity> {
        }
        var BombEntity: BombEntityConstructor;
    }
} 