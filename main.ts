/** 
Title: Prison Peril
Creators: Michael W. and Jason B.
Description: The guy is doing stuff! oh crap!

 */
let Merek = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . f f f f f f f f . . . .
    . . . f 4 4 e 4 4 4 4 1 f f . .
    . . f f 4 4 4 4 4 4 4 f 4 f . .
    . . f 4 1 4 4 4 4 4 e 4 4 f . .
    . f e 4 f 4 4 4 4 4 4 4 f . f .
    . f f 4 4 4 f f f f 4 f . . f .
    . f . f f 4 e 4 4 4 f f . . f .
    . f . . . f f f f f . . . . f .
    . f . . f f f . f f f . . f . f
    f . f f f f f . f f f f . . . .
    . . . f f f . . . f f f . . . .
    . . . f f . . . . f f f . . . .
    . . . f . . . . . . . f . . . .
    . . . . . . . . . . . . . . . .
`)
scene.setBackgroundColor(0)
info.setLife(3)
controller.moveSprite(Merek)
scene.cameraFollowSprite(Merek)
Merek.ay = 150
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function on_button_event_a_pressed() {
    Merek.vy = -75
})
scene.setTileMap(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`)
