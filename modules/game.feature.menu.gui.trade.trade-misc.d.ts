// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.trade.gui.trade-dialog
// requires game.feature.npc.gui.npc-display-gui

export {};

declare global {
  namespace sc {
    interface TradeButtonBox extends ig.GuiElementBase {
      trader: string;

      location: sc.TextGui;
    }
    interface TradeButtonBoxConstructor extends ImpactClass<TradeButtonBox> {
      new (trader: string, buttonGroup: sc.ButtonGroup, buttonStartIndex: number): TradeButtonBox;
    }
    var TradeButtonBox: TradeButtonBoxConstructor;

    interface TradeEntryButton extends sc.TradeItem {
    }
    interface TradeEntryButtonConstructor extends ImpactClass<TradeEntryButton> {
      new (text: string, trader: string, offer: number, id: sc.ItemID, desciption: string, amount: number, required: number, level: number): TradeEntryButton;
    }
    var TradeEntryButton: TradeEntryButtonConstructor;

    interface TradeCharactersView extends ig.BoxGui {
    }
    interface TradeCharactersViewConstructor extends ImpactClass<TradeCharactersView> {
    }
    var TradeCharactersView: TradeCharactersViewConstructor;

    interface TradeDetailsView extends ig.BoxGui {
      location: sc.TextGui;
      getGui: sc.TradeItemBox;
      requireGui: sc.TradeItemBox;
      _trader: string;

      setTraderData(
        this: this,
        trader: string,
        offer: any, // TODO
        buttonPos: number,
      ): void;
    }
    interface TradeDetailsViewConstructor extends ImpactClass<TradeDetailsView> {
      new (): TradeDetailsView;
    }
    var TradeDetailsView: TradeDetailsViewConstructor;
  }
}
