// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box
// requires game.feature.gui.base.text
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.list-boxes
// requires game.feature.menu.gui.new-game.new-game-misc

export {};

declare global {
    namespace sc {
        interface NewGameList extends ig.GuiElementBase {
        }
        interface NewGameListConstructor extends ImpactClass<NewGameList> {
            new(): NewGameList;
        }
        var NewGameList: NewGameListConstructor;
    }
}