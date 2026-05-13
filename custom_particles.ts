namespace effects {

    //% fixedInstances
    export interface BackgroundEffect {
        startScreenEffect(): void;
    }

    //% fixedInstances
    export class newParticleEffect {
        protected sourceFactory: (anchor: particles.ParticleAnchor, pps: number) => particles.ParticleSource;
        protected defaultRate: number;
        protected defaultLifespan: number;

        constructor(defaultParticlesPerSecond: number, defaultLifespan: number,
            sourceFactory: (anchor: particles.ParticleAnchor, particlesPerSecond: number) => particles.ParticleSource) {
            this.sourceFactory = sourceFactory;
            this.defaultRate = defaultParticlesPerSecond;
            this.defaultLifespan = defaultLifespan;
        }

        /**
         * Attaches a new particle animation to the sprite or anchor for a short period of time
         * @param anchor
         * @param duration
         * @param particlesPerSecond
         */
        start(anchor: particles.ParticleAnchor, duration?: number, particlesPerSecond?: number, relativeToCamera?: boolean): void {
            if (!this.sourceFactory) return;
            const src = this.sourceFactory(anchor, particlesPerSecond ? particlesPerSecond : this.defaultRate);
            src.setRelativeToCamera(!!relativeToCamera);
            if (duration)
                src.lifespan = duration > 0 ? duration : this.defaultLifespan;
        }

        /**
         * Destroy the provided sprite with an effect
         * @param sprite
         * @param duration how long the sprite will remain on the screen. If set to 0 or undefined,
         *                  uses the default rate for this effect.
         * @param particlesPerSecond
         */
        destroy(anchor: Sprite, duration?: number, particlesPerSecond?: number) {
            anchor.setFlag(SpriteFlag.Ghost, true);
            this.start(anchor, particlesPerSecond, null, !!(anchor.flags & sprites.Flag.RelativeToCamera));
            anchor.lifespan = duration ? duration : this.defaultLifespan >> 2;
            effects.dissolve.applyTo(anchor);
        }
    }

    /**
     * Anchor used for effects that occur across the screen.
     */
    class SceneAnchor implements particles.ParticleAnchor {
        private camera: scene.Camera;

        constructor() {
            this.camera = game.currentScene().camera;
        }

        get x() {
            return this.camera.offsetX + (screen.width >> 1);
        }

        get y() {
            return this.camera.offsetY + (screen.height >> 1);
        }

        get width() {
            return screen.width;
        }

        get height() {
            return screen.height;
        }
    }

    function createEffect(defaultParticlesPerSecond: number, defaultLifespan: number,
        factoryFactory: (anchor?: particles.ParticleAnchor) => particles.ParticleFactory): ParticleEffect {
        return new ParticleEffect(defaultParticlesPerSecond, defaultLifespan,
            (anchor: particles.ParticleAnchor, pps: number) =>
                new particles.ParticleSource(anchor, pps, factoryFactory()));
    }
    //% fixedInstance whenUsed block="fires"
    export const strong_fires = new ParticleEffect(50, 5000, function (anchor: particles.ParticleAnchor, particlesPerSecond: number) {
        const factory = new particles.FireFactory(50);
        const src = new particles.FireSource(anchor, particlesPerSecond, factory);
        src.setAcceleration(0, -20);
        return src;
    });
    //% fixedInstance whenUsed block="fires"
    export const strong_fire = new ParticleEffect(50, 5000, function (anchor: particles.ParticleAnchor, particlesPerSecond: number) {
        const factory = new particles.FireFactory(5);
        const src = new particles.FireSource(anchor, particlesPerSecond, factory);
        src.setAcceleration(0, -20);
        src.setRate(200)
        return src;
    });

}