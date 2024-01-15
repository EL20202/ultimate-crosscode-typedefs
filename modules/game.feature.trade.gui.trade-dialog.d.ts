// requires game.feature.trade.trade-model
// requires impact.base.image
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.gui
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    interface TradeItem extends sc.ListBoxButton {}
    interface TradeItemConstructor extends ImpactClass<TradeItem> {
      new (
        name: string,
        id: sc.ItemID,
        description: string,
        amount: number,
        required: number,
        isTrade: boolean,
        level: number
      ): TradeItem;
    }
    var TradeItem: TradeItemConstructor;

    interface TradeItemBox extends ig.GuiElementBase {
      gfx: ig.Image;
      dividerColor: Optional<string>;

      setContent(this: this, items: sc.TradeModel.TradeItem[], buttongroup: sc.ButtonGroup, startIndex: number, isTrade: boolean): void;
    }
    interface TradeItemBoxConstructor extends ImpactClass<TradeItemBox> {
      new (items: sc.TradeModel.TradeItem[], buttongroup: sc.ButtonGroup, startIndex: number, width: number, isTrade: boolean): TradeItemBox;
    }
    var TradeItemBox: TradeItemBoxConstructor;

    interface TradeMoneyGui extends ig.GuiElementBase {
    }
    interface TradeMoneyGuiConstructor extends ImpactClass<TradeMoneyGui> {
    }
    var TradeMoneyGui: TradeMoneyGuiConstructor;

    interface TradeDialogMenu extends ig.BoxGui, sc.Model.Observer {
      buttongroup: sc.ButtonGroup;
      tradeButton: sc.ButtonGui;
      getItems: sc.TradeItemBox;
      requireItems: sc.TradeItemBox;
      money: sc.TradeMoneyGui;
      arrow: ig.ImageGui;
      forText: sc.TextGui;
      ownedText: sc.TextGui;
      
      onSelection(this: this, button: ig.FocusGui): void;
      showMenu(this: this): void;
      hideMenu(this: this): void;
      doTrade(this: this): void;
      _onTradeButtonCheck(this: this): void;
      _setOffer(this: this): void;
      _createContent(this: this): void;
    }
    interface TradeDialogMenuConstructor extends ImpactClass<TradeDialogMenu> {
      new (): sc.TradeDialogMenu;
    }
    var TradeDialogMenu: TradeDialogMenuConstructor;

    interface TradeOfferDisplay extends ig.GuiElementBase {
    }
    interface TradeOfferDisplayConstructor extends ImpactClass<TradeOfferDisplay> {
    }
    var TradeOfferDisplay: TradeOfferDisplayConstructor;
  }
}
