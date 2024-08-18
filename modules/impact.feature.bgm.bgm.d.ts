// requires impact.base.event
// requires impact.base.game
// requires impact.base.sound
// requires impact.feature.storage.storage

export {};

declare global {
  namespace ig {
    namespace BGM_SWITCH_MODE {
      interface Mode {
        fadeIn: number;
        fadeOut: number;
      }

      var IMMEDIATELY: Mode;
      var FAST_OUT: Mode;
      var MEDIUM_OUT: Mode;
      var SLOW_OUT: Mode;
      var VERY_SLOW_OUT: Mode;
      var FAST: Mode;
      var MEDIUM: Mode;
      var SLOW: Mode;
      var VERY_SLOW: Mode;
    }
    type BGM_SWITCH_MODE = keyof typeof BGM_SWITCH_MODE;

    interface BGM_TRACK {
      path: string;
      loopEnd: number;
      volume: number;
      introPath?: string;
      introEnd?: number;
    }
    var BGM_TRACK_LIST: Record<string, BGM_TRACK>;

    interface Bgm extends ig.GameAddon {
      loadTrack(this: this, name: string): void;
      clear(this: this, mode?: ig.BGM_SWITCH_MODE): void;
    }
    interface BgmConstructor extends ImpactClass<Bgm> {}
    var Bgm: BgmConstructor;
    var bgm: Bgm;
  }
}
