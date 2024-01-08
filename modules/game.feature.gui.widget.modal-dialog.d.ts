// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.interact.gui.focus-gui
// requires game.feature.interact.button-group

export {};

declare global {
  namespace sc {
    enum DIALOG_INFO_ICON {
      NONE = 0,
      INFO = 1,
      WARNING = 2,
      ERROR = 3,
      QUESTION = 4,
    }

    namespace ModalButtonInteract {
      type Callback = (button: sc.ButtonGui & {data: unknown}, dialog: sc.ModalButtonInteract) => void
    }
    interface ModalButtonInteract extends ig.GuiElementBase {
      msgBox: sc.CenterBoxGui;
      textGui: sc.TextGui;
      content: ig.GuiElementBase;
      buttons: sc.ButtonGui[];
      buttonInteract: ig.ButtonInteractEntry;
      buttongroup: sc.ButtonGroup;
      back: sc.ButtonGui;
      keepOpen: boolean;
      callback?: Optional<ModalButtonInteract.Callback>;

      show(this: this): void;
      hide(this: this): void;
      onBackButtonCheck(this: this): boolean;
    }
    interface ModalButtonInteractConstructor extends ImpactClass<ModalButtonInteract> {
      new (
        text: sc.TextLike,
        icon: Optional<sc.DIALOG_INFO_ICON>,
        options: sc.TextLike[],
        callback?: Optional<ModalButtonInteract.Callback>,
        disableSubmitSound?: Optional<boolean>,
      ): ModalButtonInteract;
    }
    var ModalButtonInteract: ModalButtonInteractConstructor;

    interface Dialogs {
      showChoiceDialog(
        this: this,
        text: Optional<sc.TextLike>,
        icon: Optional<sc.DIALOG_INFO_ICON>,
        choices: Optional<sc.TextLike>[],
        callback?: Optional<ModalButtonInteract.Callback>,
        noSubmitSound?: boolean,
      ): void
      showYesNoDialog(
        this: this,
        text?: Optional<sc.TextLike>,
        icon?: Optional<sc.DIALOG_INFO_ICON>,
        callback?: Optional<ModalButtonInteract.Callback>,
        noSubmitSound?: boolean,
      ): void;
    }
    var Dialogs: Dialogs;
  }
}
