// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.interact.button-interact
// requires game.feature.menu.gui.base-menu
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.help.help-misc

export {};

declare global {
    namespace sc {
        namespace HelpScreen {
            type BackCallback = () => void
        }
        interface HelpScreen extends ig.GuiElementBase {
            backCallback?: Optional<HelpScreen.BackCallback>;
            openMenu(this: this): void;
        }
        interface HelpScreenConstructor extends ImpactClass<HelpScreen> {
            new (base: sc.BaseMenu, manualTitle: string, manualContent: string[], backCallback?: HelpScreen.BackCallback, fillEmptySpaces?: boolean): HelpScreen;
        }
        var HelpScreen: HelpScreenConstructor;
    }
}