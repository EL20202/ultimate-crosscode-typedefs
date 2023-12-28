// requires impact.base.event
// requires impact.base.game

export {};

declare global {
    namespace ig {
        enum Camera$SPEED_OPTIONS {
            NORMAL = 0.1,
            FAST = 0.05,
            FASTER = 0.0375,
            FASTEST = 0.025,
            FASTESTEST = 0.0175,
            SLOW = 0.15,
            SLOWER = 0.2,
            SLOWEST = 0.3,
            SLOWESTEST = 0.5,
            SLOWEST_DREAM = 1,
            IMMEDIATELY = 1E-6,
        }

        namespace Camera {
            interface TargetHandle extends ig.Class {

            }
            interface TargetHandleConstructor extends ImpactClass<TargetHandle> {

            }
        }
        interface Camera extends ig.GameAddon {}
        interface CameraConstructor extends ImpactClass<Camera> {
            
            TargetHandle: Camera.TargetHandleConstructor;
        }
    }
}