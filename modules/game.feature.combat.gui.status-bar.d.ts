// requires impact.feature.gui.gui
export {};

declare global {
    namespace sc {
        interface StatusBarEntry {
            icon: number;
            init: unknown;
            barY: number;
            half?: boolean;
        }

        interface STATUS_BAR_ENTRY {
            BREAK: StatusBarEntry;
            BURN: StatusBarEntry;
            CHILL: StatusBarEntry;
            WEAK: StatusBarEntry;
            BRITTLE: StatusBarEntry;
        }
        var STATUS_BAR_ENTRY: STATUS_BAR_ENTRY;
    }

    namespace ig.GUI {
        namespace StatusBar {
            interface StatusEntry {
                value: number;
                timer: number;
                stick?: boolean;
            }
        }

        interface StatusBar extends ig.GuiElementBase {
            statusEntries: Record<keyof sc.STATUS_BAR_ENTRY, StatusBar.StatusEntry>;
            gfx: Image;

            drawStatusEntry(
                this: this,
                renderer: ig.GuiRenderer,
                x: number,
                y: number,
                type: keyof sc.STATUS_BAR_ENTRY,
            ): void;
        }
        interface StatusBarConstructor extends ImpactClass<StatusBar> {

        }
        var StatusBar: StatusBarConstructor;
    }
}