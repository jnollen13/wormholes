namespace SpriteKind {
    export const wormhole = SpriteKind.create();
    export const wormholesprite = SpriteKind.create();
    export const star = SpriteKind.create();
    export const planet = SpriteKind.create();
    export const launcher = SpriteKind.create();
    export const transport_hole = SpriteKind.create();
    export const Commet = SpriteKind.create();
    export const NoCollision = SpriteKind.create();
}
let ishitbymeteor = false
let amplifier = 2
let speedmod= 2
let ask = game.askForNumber("dificulty?", 2, false)
if(ask==1||ask==2||ask==3||ask==0||ask==4||ask==5||ask==6||ask==7||ask==8||ask==9||ask==10||ask==11||ask==12||ask==13||ask==14||ask==15||ask==16||ask==17||ask==18||ask==19||ask==20){
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
}else{
    ask=randint(9,10)
}
let check = amplifier + ask
let startTime = 750;
let Increasingdificulty = 1;
let speed = 99*((((check-amplifier)/(amplifier*2.5))/2)+1)+1
//below is not needed to change
let iswormhole = 0
let mySprite3: Sprite = null
let MyHole1: Sprite = null
let stopped = 0
let score = 0
let luancherwormhole1: Sprite = null
let mySprite2: Sprite = null
let planet2: Sprite = null
let MyStar1: Sprite = null
let startnoodle = 0
let timer2 = 0
let noodlefacationtimer = 0
let hasEnteredWormhole = false
let mySprite4: Sprite = null
let mySprite: Sprite = null