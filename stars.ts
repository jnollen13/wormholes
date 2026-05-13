game.onUpdateInterval(100, function() {
    if(Math.percentChance(50.4268736274)){
        functions.starcheck()
    } else if (Math.percentChance(1 * ((check - amplifier) + 1))){
        functions.summonswormholestar1
    }
})

game.onUpdateInterval(1000/(((check-amplifier)*((check-amplifier))) + 1), function () {
    if (Math.percentChance(50.4268736274)) {
        functions.starcheck()
    } else if (Math.percentChance(1 * ((check - amplifier) + 1))) {
        functions.summonswormholestar1
    }else{
        functions.starcheck()
    }
})

namespace functions {

    export function summonstar3() {
        MyStar1 = sprites.create(assets.image`blue`, SpriteKind.star)
        MyStar1.setPosition(randint(1, 159), 0)
        MyStar1.vy = randint(15, 200)*(((check-amplifier)/randint(3,9))+1)
        MyStar1.setFlag(SpriteFlag.AutoDestroy, true)
        MyStar1.z += -1
    }
    
    export function summonswormholestar3() {
        MyStar1 = sprites.create(img`
        9 
        1 
        `, SpriteKind.star)
        MyStar1.setPosition(randint(20, 140), 0)
        MyStar1.vy = randint(25, 500) * (((check - amplifier) / randint(3, 9)) + 1)
        MyStar1.setFlag(SpriteFlag.AutoDestroy, true)
        MyStar1.z += -1
    }

    export function summonswormholestar2() {
        MyStar1 = sprites.create(assets.image`wormholestar2`, SpriteKind.star)
        MyStar1.setPosition(randint(10, 150), 0)
        MyStar1.vy = randint(50, 1000) * (((check - amplifier) / randint(3, 9)) + 1)
        MyStar1.setFlag(SpriteFlag.AutoDestroy, true)
        MyStar1.z += -1
    }

    export function summonswormholestar1() {
        MyStar1 = sprites.create(assets.image`wormholestar`, SpriteKind.star)
        MyStar1.setPosition(randint(25, 245), 0)
        MyStar1.vy = randint(75, 1000)
        MyStar1.setFlag(SpriteFlag.AutoDestroy, true)
        MyStar1.z += -1
    }

    export function summonstar2() {
        MyStar1 = sprites.create(assets.image`red`, SpriteKind.star)
        MyStar1.setPosition(randint(1, 159), 0)
        MyStar1.vy = randint(5, 150) * (((check - amplifier) / randint(3, 9)) + 1)
        MyStar1.setFlag(SpriteFlag.AutoDestroy, true)
        MyStar1.z += -1
    }

    export function summonstar4() {
        MyStar1 = sprites.create(assets.image`largestar`, SpriteKind.star)
        MyStar1.setPosition(randint(0, 160), 0)
        MyStar1.vy = randint(5, 1000) * (((check - amplifier) / randint(3, 9)) + 1)
        MyStar1.setFlag(SpriteFlag.AutoDestroy, true)
        MyStar1.z += -1
    }

    export function summonstar5() {
        MyStar1 = sprites.create(assets.image`white`, SpriteKind.star)
        MyStar1.setPosition(randint(0, 160), 0)
        MyStar1.vy = randint(5, 100) * (((check - amplifier) / randint(3, 9)) + 1)
        MyStar1.setFlag(SpriteFlag.AutoDestroy, true)
        MyStar1.z += -1
    }

    export function summonstar1() {
        MyStar1 = sprites.create(assets.image`white`, SpriteKind.star)
        MyStar1.setPosition(randint(1, 159), 0)
        MyStar1.vy = randint(10, 225) * (((check - amplifier) / randint(3, 13)) + 1)
        MyStar1.setFlag(SpriteFlag.AutoDestroy, true)
        MyStar1.z += -1
    }

    export function starcheck() {
        if (hasEnteredWormhole == false) {
            if (Math.percentChance(5)) {
                summonstar1()
            } else if (Math.percentChance(0.031415926)) {
                summonstar5()
            }
            if (Math.percentChance(0.75269655)) {
                summonstar3()
            } else if (Math.percentChance(1.1415926535497865)) {
                summonstar2()
            } else if (Math.percentChance(0.1)) {
                if (Math.percentChance(1)) {
                    planet3()
                } else {
                    summonstar1()
                }
            }
        } else {
            if (Math.percentChance(75.36848234783643)) {
                summonswormholestar1()
            } else {
                summonswormholestar2()
            }
            if (Math.percentChance(20.75269655)) {
                summonswormholestar3()
            } else if (Math.percentChance(35.141592653549786)) {
                summonswormholestar2()
            } else if (Math.percentChance(99.99)) {
                summonswormholestar1()
            }else{
                planet3()
            }
        }
    }

}