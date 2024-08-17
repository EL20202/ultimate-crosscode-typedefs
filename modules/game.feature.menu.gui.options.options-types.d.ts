// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box
// requires game.feature.gui.base.text
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.options.options-misc
// requires game.feature.model.options-model

export {};

declare global {
  namespace sc {
    namespace OPTION_GUIS_DEFS {
      interface BUTTON_GROUP extends ig.GuiElementBase {}
      interface BUTTON_GROUP_CONSTRUCTOR extends ImpactClass<BUTTON_GROUP> {}

      interface ARRAY_SLIDER extends ig.GuiElementBase {}
      interface ARRAY_SLIDER_CONSTRUCTOR extends ImpactClass<ARRAY_SLIDER> {}

      interface OBJECT_SLIDER extends ig.GuiElementBase {}
      interface OBJECT_SLIDER_CONSTRUCTOR extends ImpactClass<OBJECT_SLIDER> {}

      interface CHECKBOX extends ig.GuiElementBase {
        button: sc.CheckboxGui;
      }
      interface CHECKBOX_CONSTRUCTOR extends ImpactClass<CHECKBOX> {}

      interface CONTROLS extends ig.GuiElementBase {}
      interface CONTROLS_CONSTRUCTOR extends ImpactClass<CONTROLS> {}

      interface LANGUAGE extends ig.GuiElementBase {}
      interface LANGUAGE_CONSTRUCTOR extends ImpactClass<LANGUAGE> {}
    }
    interface OPTION_GUIS {
      [sc.OPTION_TYPES.BUTTON_GROUP]: OPTION_GUIS_DEFS.BUTTON_GROUP_CONSTRUCTOR;
      [sc.OPTION_TYPES.ARRAY_SLIDER]: OPTION_GUIS_DEFS.ARRAY_SLIDER_CONSTRUCTOR;
      [sc.OPTION_TYPES.OBJECT_SLIDER]: OPTION_GUIS_DEFS.OBJECT_SLIDER_CONSTRUCTOR;
      [sc.OPTION_TYPES.CHECKBOX]: OPTION_GUIS_DEFS.CHECKBOX_CONSTRUCTOR;
      [sc.OPTION_TYPES.CONTROLS]: OPTION_GUIS_DEFS.CONTROLS_CONSTRUCTOR;
      [sc.OPTION_TYPES.LANGUAGE]: OPTION_GUIS_DEFS.LANGUAGE_CONSTRUCTOR;
    }
    var OPTION_GUIS: OPTION_GUIS;

    interface OptionInfoBox extends ig.GuiElementBase {
      text: sc.TextGui;
      box: sc.CenterBoxGui;
    }
    interface OptionInfoBoxConstructor extends ImpactClass<OptionInfoBox> {
      new (option: sc.OptionDefinition.INFO, width: number): OptionInfoBox;
    }
    var OptionInfoBox: OptionInfoBoxConstructor;

    interface OptionRow extends ig.GuiElementBase {
      gfx: ig.Image;
      row: number,
      option: sc.OptionDefinition;
      optionDes: string;
      nameGui: sc.TextGui;
      typeGui:
        | sc.OPTION_GUIS_DEFS.BUTTON_GROUP
        | sc.OPTION_GUIS_DEFS.ARRAY_SLIDER
        | sc.OPTION_GUIS_DEFS.OBJECT_SLIDER
        | sc.OPTION_GUIS_DEFS.CHECKBOX
        | sc.OPTION_GUIS_DEFS.CONTROLS
        | sc.OPTION_GUIS_DEFS.LANGUAGE;
      _hasEntered: boolean;
    }
    interface OptionRowConstructor extends ImpactClass<OptionRow> {
      new (
        option: string,
        row: number,
        rowGroup: sc.RowButtonGroup,
        local?: boolean,
        width?: number,
        height?: number,
      ): OptionRow;
    }
    var OptionRow: OptionRowConstructor;
  }
}
