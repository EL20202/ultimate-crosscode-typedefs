// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.stats.stats-misc

export {};

declare global {
    namespace sc {
        interface StatusViewModifiers extends ig.GuiElementBase {
            show(this: this): void;
            hide(this: this): void;
            updatePage(this: this): void;
        }
        interface StatusViewModifiersConstructor extends ImpactClass<StatusViewModifiers> {
            new (): StatusViewModifiers;
        }
        var StatusViewModifiers: StatusViewModifiersConstructor;

        interface StatusViewModifiersContainer extends sc.MenuPanel {
            createParameterLines(this: this, b: boolean): void;
            createLine(this: this,
                modifier: keyof sc.MODIFIERS,
                lineID: number,
                iconID: number,
                hideValues: boolean,
                noPercent: boolean
            ): sc.StatusParamBar;
        }
        interface StatusViewModifiersContainerConstructor extends ImpactClass<StatusViewModifiersContainer> {
            new (): StatusViewModifiersContainer;
        }
        var StatusViewModifiersContainer: StatusViewModifiersContainerConstructor;
    }
}