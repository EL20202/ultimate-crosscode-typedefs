// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
    namespace sc {
        interface ItemEquipModifier extends sc.HeaderMenuPanel {
            _createStatusDisplay(this: this,
                x: number,
                y: number,
                name: string,
                lineID: number,
                iconID: number,
                usePercent: boolean,
                maxValue: number,
                noPercentMode: boolean,
                modifier: keyof sc.MODIFIERS,
                index: number
            ): sc.SimpleStatusDisplay;
        }
        interface ItemEquipModifierConstructor extends ImpactClass<ItemEquipModifier> {
            new (): sc.ItemEquipModifier;
        }
        var ItemEquipModifier: ItemEquipModifierConstructor;
    }
}