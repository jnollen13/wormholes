namespace functions{
    export function backgroundnoodlefacation(sprite: Sprite, interval: number) {
        if (!(timer2 - noodlefacationtimer > 400)) {
            scaling.scaleByPixels(sprite, -1 * interval, ScaleDirection.Horizontally, ScaleAnchor.Middle)
            scaling.scaleByPixels(sprite, 5 * interval, ScaleDirection.Vertically, ScaleAnchor.Middle)
        } else if (timer2 - noodlefacationtimer < 700) {
            game.setGameOverEffect(false, effects.melt)
            game.setGameOverMessage(false, "You got Noodlefied!")
            game.setGameOverPlayable(false, music.melodyPlayable(music.powerDown), false)
            game.gameOver(false)
        }
    }

    export function shrinkandkill(sprite: Sprite) {
        spriteFx.setRotation(sprite, 0)
        for (let i = 0; i < 101; i++) {
            sprite.changeScale(-0.01, ScaleAnchor.Middle)
            pause(1)
        }
        let mySprite5 = sprites.create(assets.image`star`, SpriteKind.star)
        mySprite5.setPosition(sprite.x, sprite.y)
        sprites.destroy(sprite)
        for (let i = 0; i < 211; i++) {
            spriteFx.rotate(mySprite5, 1)
            pause(1)
        }
        for (let i = 0; i < 101; i++) {
            mySprite5.changeScale(-0.01, ScaleAnchor.Middle)
            pause(1)
        }
        sprites.destroy(mySprite5)
    }

    export function normalwormhole() {
        mySprite3 = sprites.create(assets.image`wormholenormal`, SpriteKind.wormholesprite)
        mySprite3.setPosition(randint(15, 145), 0)
        mySprite3.vy = randint(75, 150);
        mySprite3.setFlag(SpriteFlag.AutoDestroy, true)
    }

    export function Transportwormhole(newhole: Sprite) {
        newhole = sprites.create(assets.image`wormhole`, SpriteKind.transport_hole)
        newhole.setPosition(randint(15, 145), 0)
        console.log("transport hole nearby")
        newhole.vy = randint(75, 150);
        newhole.setFlag(SpriteFlag.AutoDestroy, true)
    }

    export function planet3() {
        planet2 = sprites.create(assets.image`planet`, SpriteKind.planet)
        planet2.setPosition(randint(5, 155), 0)
        planet2.vy = 50 * ((check - amplifier) + 1)
        planet2.z = -2
        planet2.setFlag(SpriteFlag.AutoDestroy, true)
    }
    
    export function launchwormholeandplace(sprite: Sprite): void {
        timer.after(555, function () {
        let amySprite4: Sprite = null
            amySprite4 = sprites.create(meteors[randint(0, meteors.length - 1)], SpriteKind.Enemy)
        amySprite4.setPosition(sprite.x, sprite.y - 10)
        if(Math.percentChance(75)){
            amySprite4.vy = randint(52, 100)
            console.log("meteor exits wormhole")
        }else{
            amySprite4.vy = randint(52, 100) * ((check - amplifier) + 1)/2
            amySprite4.startEffect(effects.strong_fire)
            console.log("Commet exits wormhole")
            amySprite4.setKind(SpriteKind.Commet)
        }
            music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.InBackground)
            amySprite4.setFlag(SpriteFlag.AutoDestroy, true)
            timer.after(232, function () {
                sprites.destroy(sprite)
            })
        if(Math.percentChance(10)){
            spriteFx.Spin(amySprite4, 2, RotateSpeed.One);
        }
        })
    }

    export function wormholesummon() {
        if (Math.percentChance(75)) {
            normalwormhole()
        } else if(Math.percentChance(90)){
            functions.launcherwormhole(luancherwormhole1)
        }else{
            Transportwormhole(MyHole1)
            music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.InBackground)
        }
    }

    export function launcherwormhole(hole: Sprite) {
        hole = sprites.create(assets.image`meatorsummoner`, SpriteKind.launcher)
        hole.setPosition(randint(7, 153), 10)
        functions.launchwormholeandplace(hole)
    }
    export function noodlefacation(sprite: Sprite, interval: number) {
        controller.moveSprite(sprite, 0, 0)
        spriteFx.setRotation(mySprite, 0)
        scaling.scaleByPixels(sprite, -1 * interval, ScaleDirection.Horizontally, ScaleAnchor.Middle)
        scaling.scaleByPixels(sprite, 5 * interval, ScaleDirection.Vertically, ScaleAnchor.Middle)
        animation.runMovementAnimation(
            mySprite,
            animation.animationPresets(animation.flyToCenter),
            2000,
            false)
        noodlefacationtimer = timer2
        startnoodle = 1
    }
}