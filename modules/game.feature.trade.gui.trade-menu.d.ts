// requires game.feature.trade.trade-model
// requires impact.base.image
// requires impact.feature.gui.gui
// requires game.feature.menu.gui.menu-misc
// requires game.feature.trade.gui.trade-dialog
// requires game.feature.trade.gui.equip-toggle-stats

export {};

declare global {
    namespace sc {
        interface TradeMenu extends ig.GuiElementBase, sc.Model.Observer {
            gfx: ig.Image;
            info: sc.InfoBar;
            buffInfo: sc.BuffInfo;
            topbar: ig.ColorGui;
            back: null; //goes completely unused, likely a typo/old name for backButton
            help: sc.ButtonGui;
            toggleEquip: sc.ButtonGui;
            helpGui: sc.HelpScreen;
            tradeDialog: sc.TradeDialogMenu;
            tradeOffer: sc.TradeOfferDisplay;
            tradeStats: sc.TradeToggleStats;
            tradeContent: sc.TradeModel.TradeOption[];
            money: ig.GuiElementBase;
            moneyValue: sc.NumberGui;
            backButton: sc.ButtonGui;

            enterTrade(this: this): void;
            _onHelpButtonCheck(this: this): void;
            _onHelpButtonPressed(this: this): void;
            _onBackButtonCheck(this: this): void;
            _onToggleButtonCheck(this: this): void;
            _createHelpGui(this: this): void;
            _exitMenu(this: this): void;
        }
        interface TradeMenuConstructor extends ImpactClass<TradeMenu> {
            new (trade: sc.TradeModel.Trader): sc.TradeMenu;
        }
        let TradeMenu: TradeMenuConstructor;
    }
}