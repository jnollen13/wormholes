let meteors = [
    assets.image`meateor`,
    assets.image`small meteor`,
    assets.image`meateor2`,
    assets.image`meateor3`,
    assets.image`meateor4`
]

sprites.onOverlap(SpriteKind.Player, SpriteKind.wormhole, function (sprite, otherSprite) {
    mySprite2.setImage(assets.image`wormhole`)
    mySprite2.setStayInScreen(true)
    info.setScore(score)
    timer2 += 200
    mySprite.fy = 55
    mySprite.vy = -100
    mySprite.ay = 0
    mySprite.y = 190
    mySprite2.y = 115
    mySprite2.y += 7
    console.log("went through transport hole")
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
    mySprite2.setKind(SpriteKind.Projectile)
    mySprite2.setStayInScreen(false)
    mySprite2.setFlag(SpriteFlag.AutoDestroy, true)
    mySprite2.fy = 0
    mySprite2.ay = 2
    sprites.destroyAllSpritesOfKind(SpriteKind.star)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.transport_hole, function (sprite, otherSprite) {
    otherSprite.setImage(assets.image`transport_wormhole`)
    timer2 += 500
    info.setScore(score)
    mySprite.fy = 55
    mySprite.vy = -22
    mySprite.ay = 0
    mySprite.y = 190
    otherSprite.y = 115
    console.log("went through transport hole")
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
    otherSprite.setKind(SpriteKind.Projectile)
    otherSprite.fy = 0
    otherSprite.ay = 2
    sprites.destroyAllSpritesOfKind(SpriteKind.star);
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy);
    sprites.destroyAllSpritesOfKind(SpriteKind.planet);
    sprites.destroyAllSpritesOfKind(SpriteKind.wormholesprite);
    sprites.destroyAllSpritesOfKind(SpriteKind.launcher);
    timer.after(250, function(){
        sprites.destroy(otherSprite)
        mySprite.setStayInScreen(true)
        sprites.destroyAllSpritesOfKind(SpriteKind.transport_hole)
    }
    )
})
sprites.onOverlap(SpriteKind.wormholesprite, SpriteKind.transport_hole, function (sprite, othersprite) {
    sprites.destroy(sprite, effects.strong_fires, 50); sprites.destroy(othersprite, effects.strong_fires, 50)
    console.log("wormholes exploding")
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.transport_hole, SpriteKind.transport_hole, function (sprite, othersprite) {
    sprites.destroy(sprite, effects.strong_fires, 50); sprites.destroy(othersprite, effects.strong_fires, 50)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    console.log("wormholes exploding")
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.transport_hole, function (sprite, othersprite) {
    functions.shrinkandkill(sprite)
    console.log("meteor going through wormhole")
    music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.wormholesprite, SpriteKind.Enemy, function (sprite, othersprite) {
    functions.shrinkandkill(othersprite)
     sprites.destroy(sprite, effects.strong_fires, 50)
    console.log("meteor going through wormhole")
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, othersprite) {
    sprites.destroy(sprite, effects.strong_fires, 50); sprites.destroy(othersprite, effects.strong_fires, 50)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    console.log("meteor hitting another meteor")
    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Commet, SpriteKind.Commet, function (sprite, othersprite) {
    sprites.destroy(sprite, effects.strong_fires, 250); sprites.destroy(othersprite, effects.strong_fire, 250)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    console.log("Commets hitting each other")
    music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Commet, SpriteKind.wormholesprite, function (sprite, othersprite) {
    sprite.vy =0
    sprite.follow(othersprite)
    functions.shrinkandkill(sprite)
    console.log("Commet going through wormhole")
     sprites.destroy(othersprite, effects.strong_fire, 10)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Commet, function (sprite, othersprite) {
    sprites.destroy(sprite, effects.strong_fires, 210); sprites.destroy(othersprite, effects.strong_fire, 10)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    console.log("Commet shot down")
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
    timer2 += 10
})
sprites.onOverlap(SpriteKind.wormholesprite, SpriteKind.wormholesprite, function (sprite, othersprite) {
    sprite.follow(othersprite)
    othersprite.follow(sprite)
    othersprite.setKind(SpriteKind.NoCollision)
    sprite.setKind(SpriteKind.NoCollision)
    console.log("wormholes exploding")
    music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
    sprites.destroy(othersprite, effects.strong_fires, 50)
    functions.shrinkandkill(sprite);
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.wormholesprite, function (sprite, otherSprite) {
    stopped = 0
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.LoopingInBackground)
    sprites.destroyAllSpritesOfKind(SpriteKind.wormholesprite)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.star)
    console.log("getting Noodlefied")
    hasEnteredWormhole = true
    if(!ishitbymeteor){
    functions.noodlefacation(sprite, 0.1)
    }else{
        game.setGameOverMessage(false, "Your Wrekage got Noodled!")
        game.setGameOverSound(false, music.magicWand)
        game.setGameOverEffect(false, effects.splatter)
        timer2 += 25
        info.setScore(score)
        game.gameOver(false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    stopped = 0
    ishitbymeteor=true
    console.log("Hit by Meteor")
    sprites.destroy(otherSprite, effects.spray, 208)
    timer.after(250, function(){
        sprites.destroy(sprite, effects.strong_fires, 208)
    timer.after(750, function(){
        if(!(hasEnteredWormhole==true)){
        game.setGameOverMessage(false, "You got hit by a meteor!")
        game.setGameOverSound(false, music.bigCrash)
        music.setVolume(255)
        game.setGameOverEffect(false, effects.splatter)
        game.gameOver(false)
        }else if(hasEnteredWormhole==true){
            game.setGameOverMessage(false, "Hit by meteor in Wormhole!")
            game.setGameOverSound(false, music.bigCrash)
            game.setGameOverEffect(false, effects.melt)
            timer2 += 100
            info.setScore(score)
            game.gameOver(false)
        }else{
            game.gameOver(false)
        }
    })
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Commet, function (sprite, otherSprite) {
    if(ishitbymeteor){
        game.setGameOverMessage(false, "Smashed Wreckage")
        game.setGameOverSound(false, music.bigCrash)
        music.setVolume(255)
        game.setGameOverEffect(false, effects.slash)
        game.gameOver(false)
    }
    stopped = 0
    console.log("hit by Commet")
    ishitbymeteor = true
    sprites.destroy(otherSprite, effects.strong_fire, 208)
    timer.after(250, function () {
        sprites.destroy(sprite, effects.strong_fires, 750)
        timer.after(750, function () {
            if (!(hasEnteredWormhole == true)) {
                game.setGameOverMessage(false, "You got hit by a Commet")
                game.setGameOverSound(false, music.bigCrash)
                music.setVolume(255)
                game.setGameOverEffect(false, effects.splatter)
                game.gameOver(false)
            } else if (hasEnteredWormhole == true) {
                game.setGameOverMessage(false, "Hit by Commet in Wormhole!")
                game.setGameOverSound(false, music.bigCrash)
                game.setGameOverEffect(false, effects.melt)
                timer2 += 100
                info.setScore(score)
                game.gameOver(false)
            } else {
                game.gameOver(false)
            }
        })
    })
})
mySprite = sprites.create(assets.image`spaceship`, SpriteKind.Player)
mySprite.y += 39
info.showScore(false)
mySprite.setScale(0.51, ScaleAnchor.Bottom)
mySprite.z = 1
let textSprite = textsprite.create("")
textSprite.setFlag(SpriteFlag.StayInScreen, true)
textSprite.setPosition(0, 0)
textSprite.z +=-1;
music.setVolume(255)
//game onUpdate start
game.onUpdate(function () {
    if(!hasEnteredWormhole && !ishitbymeteor){
        score = (timer2-startTime)*(((check-amplifier)/5)+1);
    }
    info.setScore(score)
    if(stopped==1){
        speed = (99 * ((((check - amplifier) / (amplifier * 2.5)) / 2) + 1) + 1)*(speedmod/2)
    }
})
game.onUpdateInterval((250*amplifier)/Increasingdificulty, function () {
    if (stopped == 1) {
        if (Math.percentChance(check*11.21374+(Increasingdificulty-1))) {
            functions.wormholesummon()
        }
    }
})
game.onUpdateInterval(10000, function () {
    if (stopped == 1) {
        music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.InBackground)
    }
})
game.onUpdateInterval(96, function () {
    if (startnoodle == 1) {
        functions.backgroundnoodlefacation(mySprite, 0.2)
    }
})
game.onUpdateInterval(1000, function () {
    if (hasEnteredWormhole == false) {
        if (Math.percentChance(5)) {
            functions.summonstar4()
        } else if (Math.percentChance(25)) {
            functions.summonstar1()
        }else{
            functions.starcheck()
        }
    } else {
        if (Math.percentChance(90)) {
            functions.starcheck()
        }
    }
})
game.onUpdateInterval(250, function () {
    if (stopped == 1&&browserEvents.F.isPressed()) {
        let mySprite5 = sprites.create(assets.image`fire-_`, SpriteKind.Projectile)
        mySprite5.setPosition(mySprite.x, mySprite.y);
        mySprite5.vy = -500;
        mySprite5.setFlag(SpriteFlag.AutoDestroy, true);
        mySprite5.setFlag(SpriteFlag.DestroyOnWall, true);
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
        console.log("lasers fire")
    }
})

game.onUpdateInterval(1, function () {
    if (hasEnteredWormhole == false) {
        if (Math.percentChance(1)) {
            functions.starcheck()
        } else if (Math.percentChance(1)) {
            functions.summonstar1()
        } else if (Math.percentChance(15)) {
            if (Math.percentChance(90)) {
                functions.summonstar1()
            } else {
                functions.summonstar5()
            }
        }
    } else {
        functions.starcheck()
    }
})
game.onUpdateInterval(1, function () {
    timer2 += 1
    if (timer2 == 50) {
        iswormhole = 1
        mySprite2 = sprites.create(assets.image`transport_wormhole`, SpriteKind.wormhole)
        mySprite2.y += -100
        music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.InBackground)
        mySprite2.vy = 100
        console.log("transport hole nearby")
        mySprite2.fy = 50
    } else if (timer2 == 212) {
        mySprite.ay = -18
    } else if (timer2 == 650) {
        mySprite.ay = 10
    } else if (timer2 == 705) {
        mySprite.ay = 0
    } else if (timer2 == startTime) {
        controller.moveSprite(mySprite, speed, 0)
        info.showScore(true)
        mySprite.setStayInScreen(true)
        stopped = 1
    }
})
game.onUpdateInterval(100, function () {
    if (!hasEnteredWormhole) {
        if (Math.percentChance(5)) {
            functions.summonstar1()
        }else if(Math.percentChance(57)){
            functions.starcheck()
        }
    } else {
        functions.starcheck()
    }
})
game.onUpdateInterval(59500, function () {
    if(stopped==1)
     Increasingdificulty+=1
    if(Increasingdificulty==2){
    textSprite.setText("Easy")
    }else if(Increasingdificulty==1){
        textSprite.setText("Very Easy")
    }else if(Increasingdificulty==3){
        textSprite.setText("Normal")
    }else if(Increasingdificulty==4){
        textSprite.setText("Hard")
    }else if(Increasingdificulty==5){
        textSprite.setText("Very Hard")
    }else if(Increasingdificulty==6){
        textSprite.setText("You're a cookie")
    }else if(Increasingdificulty==7){
        textSprite.setText("Impossible")
    }else if(Increasingdificulty==8){
        textSprite.setText("impresive")
    }else if(Increasingdificulty==9){
        textSprite.setText("Godly")
    }else if(Increasingdificulty==10){
        textSprite.setText("...")
    }else if(Increasingdificulty==11){
        textSprite.setText("max dificulty")
    }
    for (let i = 0; i < 11; i++) {
    functions.starcheck()
    functions.starcheck()
    functions.starcheck()
    functions.starcheck()
    functions.starcheck()
    functions.starcheck()
    }

})
browserEvents.J.onEvent(browserEvents.KeyEvent.Pressed, function() {
    if(speedmod==1){
        speedmod=2
    }else if (speedmod==2){
        speedmod=3
    }else{
        mySprite.sayText("max speed!", 750, true, 2, 0)
    }
})
browserEvents.K.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (speedmod == 3) {
        speedmod = 2
    } else if (speedmod == 2) {
        speedmod = 1
    } else {
        mySprite.sayText("Lowest Speed!", 750, true, 2, 0)
    }
})
browserEvents.F.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if(stopped==1){
    let mySprite5 =sprites.create(assets.image`fire-_`, SpriteKind.Projectile)
    mySprite5.setPosition(mySprite.x, mySprite.y);
    mySprite5.vy= -500;
    mySprite5.setFlag(SpriteFlag.AutoDestroy, true);
    mySprite5.setFlag(SpriteFlag.DestroyOnWall, true);
        console.log("lasers fire")
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function() {
    if(stopped==1){
    if(speedmod==2){
        spriteFx.setRotation(mySprite, 17)
    }else if(speedmod==1){
        spriteFx.setRotation(mySprite, 10)
    }else if(speedmod==3){
        spriteFx.setRotation(mySprite, 25)
    }
}
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (stopped == 1)
        spriteFx.setRotation(mySprite, 0)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (stopped == 1)
    if(speedmod==2){
        spriteFx.setRotation(mySprite, -17)
    }else if (speedmod == 1) {
        spriteFx.setRotation(mySprite, -10)
    } else if (speedmod == 3) {
        spriteFx.setRotation(mySprite, -25)
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (stopped == 1)
        spriteFx.setRotation(mySprite, 0)
})