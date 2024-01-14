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
    }
    interface TradeItemBoxConstructor extends ImpactClass<TradeItemBox> {
      new (): TradeItemBox;
    }
    var TradeItemBox: TradeItemBoxConstructor;

    interface TradeMoneyGui extends ig.GuiElementBase {
    }
    interface TradeMoneyGuiConstructor extends ImpactClass<TradeMoneyGui> {
    }
    var TradeMoneyGui: TradeMoneyGuiConstructor;

    interface TradeDialogMenu extends ig.BoxGui {
    }
    interface TradeDialogMenuConstructor extends ImpactClass<TradeDialogMenu> {
    }
    var TradeDialogMenu: TradeDialogMenuConstructor;

    interface TradeOfferDisplay extends ig.GuiElementBase {
    }
    interface TradeOfferDisplayConstructor extends ImpactClass<TradeOfferDisplay> {
    }
    var TradeOfferDisplay: TradeOfferDisplayConstructor;
  }
}
