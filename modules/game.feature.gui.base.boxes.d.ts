// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui

export {};

declare global {
  namespace sc {
    interface BlackWhiteBox extends ig.BoxGui {}
    interface BlackWhiteBoxConstructor extends ImpactClass<BlackWhiteBox> {}
    var BlackWhiteBox: BlackWhiteBoxConstructor;

    interface CenterBoxGui extends ig.GuiElementBase {
      centerBox: sc.BlackWhiteBox;

      resize(this: this): void;
    }
    interface CenterBoxGuiConstructor extends ImpactClass<CenterBoxGui> {
      new (content: ig.GuiElementBase): CenterBoxGui;
    }
    var CenterBoxGui: CenterBoxGuiConstructor;

    interface LineGui extends ig.BoxGui {
      ninepatch: ig.NinePatch;
    }
    interface LineGuiConstructor extends ImpactClass<LineGui> {
      new (width: number): sc.LineGui
    }
    var LineGui: LineGuiConstructor;

    interface SideBoxGui extends ig.GuiElementBase {
      contentEntries: sc.SlickBoxGui[];

      pushContent(this: this, contentGui: ig.GuiElementBase, show: boolean, paddingX?: number, paddingY?: number): void;
      replaceContent(this: this, index: number, contentGui: ig.GuiElementBase): void;
      removeContent(this: this, index: number): void;
      clearContent(this: this): void;
      popContent(this: this): void;
      hide(this: this, skip?: boolean, callback?: Optional<(() => void)>): void;
      show(this: this, skip?: boolean, delay?: number): void;
      remove(this: this): void;
    }
    interface SideBoxGuiConstructor extends ImpactClass<SideBoxGui> {}
    var SideBoxGui: SideBoxGuiConstructor;

    type SmallBoxAlign = (dest: Vec2, coll: ig.CollEntry) => void;
    let SMALL_BOX_ALIGN: Record<string, SmallBoxAlign>;

    interface SmallEntityBox extends ig.GuiElementBase {}
    interface SmallEntityBoxConstructor extends ImpactClass<SmallEntityBox> {
      new (entity: ig.Entity, text: string, time: number, align?: SmallBoxAlign, offY?: number): SmallEntityBox;
    }
    let  SmallEntityBox: SmallEntityBoxConstructor;
  }
}
