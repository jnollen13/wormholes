enum RotateSpeed{
    //% block="one"
    One,
    //% block="two"
    Two,
    //% block ="three"
    Three,
    //% block ="three"
    Four,
    //% block = "five"
    Five
}


namespace spriteFx{

    /**
     * spins the selected Sprite
    */
    //% blockId=Spin
    //% block="Spin $sprite $times times, $rotateSpeed"
    //% weight=89
    //% blockGap=8
    //% help=sprites/none
    //% group="Effects"
    export function Spin(sprite: Sprite, times:number, rotateSpeed:RotateSpeed) {
        let rSpeed = 1
        if(rotateSpeed==RotateSpeed.One){

        }else if(rotateSpeed==RotateSpeed.Two){
            rSpeed=2
        }else if(rotateSpeed==RotateSpeed.Three){
            rSpeed=3
        }else if(rotateSpeed==RotateSpeed.Four){
            rSpeed=4
        }else{
            rSpeed=5
        }
        for (let i = 0; i < times*(360/rSpeed)+1; i++) {
            spriteFx.rotate(sprite, rSpeed)
            pause(1)
        }
    }
}