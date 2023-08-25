export {};

declare global {
    namespace ig {
        //note: Not an impact class!
        interface RGBColor {
            ok: boolean;
            r: number;
            g: number;
            b: number;

            toRGB(): string;
            toHex(): string;
            assign(color: RGBColor): void;
            addColor(color: RGBColor, weight: number): void;
        }
        interface RGBColorConstructor {
            new (color_string: string): RGBColor;

            interpolate(colorA: RGBColor, colorB: RGBColor, weight: number, dest: RGBColor): void;
        }
        let RGBColor: RGBColorConstructor;
    }
}