// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.base.image
// requires game.feature.gui.base.boxes

export {};

declare global {
    namespace sc {
        interface RightHudGui extends ig.GuiElementBase {
            addHudBox(this: this, hudBox: sc.SideBoxGui, index?: number): void;
            addHudBoxBefore(this: this, boxToInsert: sc.SideBoxGui, beforeBox: sc.SideBoxGui): void;
        }
        interface RightHudGuiConstructor extends ImpactClass<RightHudGui> {
            new (): RightHudGui;
        }
        var RightHudGui: RightHudGuiConstructor;


        interface RightHudBoxGui extends sc.SideBoxGui {}
        interface RightHudBoxGuiConstructor extends ImpactClass<RightHudBoxGui> {
            new (title: string): RightHudBoxGui;
        }
        let RightHudBoxGui: RightHudBoxGuiConstructor;
    }
}