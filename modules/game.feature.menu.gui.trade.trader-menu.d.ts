// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.base-menu
// requires game.feature.menu.gui.menu-misc
// requires game.feature.trade.trade-model
// requires game.feature.menu.gui.trade.trader-list
// requires game.feature.menu.gui.trade.trade-misc

export {};

declare global {
    namespace sc {
        namespace TraderMenu {
            interface SynopInfo {
                trader: string;
                offer: number;
                index: number;
            }
        }
        interface TraderMenu extends sc.ListInfoMenu {
            list: TradersListBox;

            enterDetails(this: this): void;
            setTradeInfo(this: this): void;
            exitDetails(this: this): void;
        }
        interface TraderMenuConstructor extends ImpactClass<TraderMenu> {
            new (): TraderMenu;
        }
        var TraderMenu: TraderMenuConstructor;
    }
}