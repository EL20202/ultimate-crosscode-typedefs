// requires impact.feature.gui.gui

export {};

declare global {
  namespace sc {
    interface BaseMenu extends ig.GuiElementBase {
      visible: boolean;

      addObservers(this: this): void;
      removeObservers(this: this): void;
      showMenu(this: this, previousMenu?: sc.BaseMenu, prevSubmenu?: sc.MENU_SUBMENU): void;
      hideMenu(this: this, afterMenu?: sc.BaseMenu, nextSubmenu?: sc.MENU_SUBMENU): void;
      exitMenu(this: this): void;
    }
    interface BaseMenuConstructor extends ImpactClass<BaseMenu> {
      new (): BaseMenu;
    }
    var BaseMenu: BaseMenuConstructor;

    interface ListInfoMenu extends sc.BaseMenu {
      hotkeyHelp: sc.ButtonGui;
      hotkeySort?: sc.ButtonGui;
      list: ig.GuiElementBase;
      onAddHotkeys(this: this, b?: boolean): void;
      commitHotKeysToTopBar(this: this, b?: boolean): void;
    }
    interface ListInfoMenuConstructor extends ImpactClass<ListInfoMenu> {
      new(list?: ig.GuiElementBase, info?: ig.GuiElementBase | null, helpMenu?: boolean): ListInfoMenu;
    }
    var ListInfoMenu: ListInfoMenuConstructor;
  }
}
