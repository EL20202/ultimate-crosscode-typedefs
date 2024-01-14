// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui

export {};

declare global {
    namespace sc {
        interface SlickBoxRawGui extends ig.BoxGui {}
        interface SlickBoxRawGuiConstructor extends ImpactClass<SlickBoxRawGui> {}
        let SlickBoxRawGui: SlickBoxRawGuiConstructor;

        interface SlickBoxGui extends ig.BoxGui {}
        interface SlickBoxGuiConstructor extends ImpactClass<SlickBoxGui> {}
        let SlickBoxGui: SlickBoxGuiConstructor;
    }
}