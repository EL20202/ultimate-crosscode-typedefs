// requires impact.base.game
// requires impact.base.loader
// requires impact.feature.interact.button-interact
// requires impact.feature.database.database
// requires impact.feature.storage.storage
// requires game.feature.model.base-model

export {};

declare global {
  namespace sc {
    namespace TradeModel {
      interface FoundTrader {
        characterName: string;
        map: ig.LangLabel;
        area: ig.LangLabel;
        time: number;
      }

      interface TradeItem {
        id: sc.ItemID;
        amount: number;
      }

      interface TradeOption {
        get: TradeItem[];
        require: TradeItem[];
        scale?: number;
        cost?: number;
      }

      interface Trader {
        name: ig.LangLabel.Data;
        order: number;
        area: string;
        noTrack?: boolean;
        options: TradeOption[];
        upgradeTo?: string;
        child?: string;
      }
    }

    interface TradeModel extends ig.GameAddon, sc.Model, ig.Storage.Listener {
      buttonInteract: ig.ButtonInteractEntry;
      tradeIndex: number;
      traders: Record<string, sc.TradeModel.Trader>;

      unlockTrader(this: this, trader: string, characterName: string): void
      unlockParents(this: this, trader: string, characterName: string, originalTrader: string): 0 | 1 | 2;
      getTrader(this: this, trader: string): sc.TradeModel.Trader;
      getTraderName(this: this, trader: string): string;
      getTraderAreaName(this: this, trader: string, shortName?: boolean): string;
      getFoundTrader(this: this, trader: string): sc.TradeModel.FoundTrader;
      enterTrade(this: this, options: TradeModel.TradeOption): void;
      exitTrade(this: this): void;
    }
    interface TradeModelConstructor extends ImpactClass<TradeModel> {
      new (): TradeModel;
    }
    var TradeModel: TradeModelConstructor;
    var trade: sc.TradeModel;

    interface TradeInfo extends ig.Class {
      key: string;
      settings: sc.TradeModel.Trader;
      iconGui: sc.TradeIconGui;
      event: ig.Event;
      entity: ig.ENTITY.NPC;

      startTradeMenu(this: this): void;
      clearCached(this: this): void;
    }
    interface TradeInfoConstructor extends ImpactClass<TradeInfo> {
    }
    var TradeInfo: TradeInfoConstructor;

    enum TRADE_MODEL_EVENT {
      OFFER_CHANGED = 0,
      INFO_TEXT_CHANGED = 1,
      BUFF_TEXT_CHANGED = 2,
      EQUIP_ID_CHANGED = 3,
      COMPARE_MODE_CHANGED = 4,
      TRADED = 5,
    }
  }
}
