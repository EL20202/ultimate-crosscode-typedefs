// requires impact.feature.gui.gui
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    enum LIST_COLUMNS {
      ONE = 1,
      TWO = 2,
    }

    interface ButtonListBox extends sc.ScrollPane {
      buttonGroup: sc.ButtonGroup;
      contentPane: ig.GuiElementBase;
      paddingTop: number;
      paddingBetween: number;
      columnPadding: number;
      buttonWidth: number;
      useShoulderScroll: boolean;
      forceLastScroll: boolean;
      pageSize: number;
      buttonInteract: ig.ButtonInteractEntry;
      offsets: Vec2;
      columns: number;
      _prevIndex: number,
      _skipFirst: boolean,
      _prevScrollBarHeight: number,

      activate(buttonInteract?: Optional<ig.ButtonInteractEntry>): void;
      addButton(
        button: ig.GuiElementBase,
        skipButtonGroup: true,
        xOffset?: Optional<number>,
        yOffset?: Optional<number>,
      ): void;
      addButton(
        button: ig.FocusGui,
        skipButtonGroup?: Optional<false>,
        xOffset?: Optional<number>,
        yOffset?: Optional<number>,
      ): void;
      clear(this: this, skip?: Optional<boolean>): void;
      scrollToY(this: this, y: number, b: boolean): void;
    }
    interface ButtonListBoxConstructor extends ImpactClass<ButtonListBox> {}
    var ButtonListBox: ButtonListBoxConstructor;

    interface ItemListBox extends ig.GuiElementBase {
      list: sc.ButtonListBox;

      clear(this: this, skip?: Optional<boolean>): void;
      addButton(this: this, gui: ig.FocusGui): void;
      getChildren(this: this): ig.FocusGui[];
    }
    interface ItemListBoxConstructor extends ImpactClass<ItemListBox> {
      new (topPadding: number, noHeader: boolean, buttonInteract: ig.ButtonInteractEntry): ItemListBox;
    }
    var ItemListBox: ItemListBoxConstructor;

    interface MultiColumnItemListBox extends ig.GuiElementBase {
      list: sc.ButtonListBox;

      addButton(this: this, button: sc.ListBoxButton, addFocusGui?: boolean): void;
      clear(this: this, refocus: boolean): void;
      setSelectState(this: this, state: string, immediate: boolean): void;
      setQuantityState(this: this, state: string, immediate: boolean): void;
      buttonGroup(this: this): sc.ButtonGroup;
      activate(this: this): void;
      deactivate(this: this): void;
    }
    interface MultiColumnItemListBoxConstructor extends ImpactClass<MultiColumnItemListBox> {
      new (topPadding: number, buttonWidth: number, columns: sc.LIST_COLUMNS, columnPadding: number): sc.MultiColumnItemListBox;
    }
    var MultiColumnItemListBox: MultiColumnItemListBoxConstructor;
  }
}
