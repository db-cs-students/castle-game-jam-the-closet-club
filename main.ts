/** 
Title: Prison Peril
Creators: Michael W. and Jason B.
Description: The guy is doing stuff! oh crap!

 */
namespace SpriteKind {
    export const guide = SpriteKind.create()
}

namespace SpriteKind {
    export const tunnel = SpriteKind.create()
}

//  Merek = sprites.create(img("""
//      . . . . . . . . . . . . . . . .
//      . . . . . . . . . . . . . . . .
//      . . . . f f f f f f f f . . . .
//      . . . f 4 4 e 4 4 4 4 1 f f . .
//      . . f f 4 4 4 4 4 4 4 f 4 f . .
//      . . f 4 1 4 4 4 4 4 e 4 4 f . .
//      . f e 4 f 4 4 4 4 4 4 4 f . f .
//      . f f 4 4 4 f f f f 4 f . . f .
//      . f . f f 4 e 4 4 4 f f . . f .
//      . f . . f f f f f f f . . . f .
//      . f . . f f f . f f f . . f . f
//      f . f f f f f . f f f f . . . .
//      . . . f f f . . . f f f . . . .
//      . . . f f . . . . f f f . . . .
//      . . . f . . . . . . . f . . . .
//      . . . . . . . . . . . . . . . .
//  """), SpriteKind.player)
// Guide
let guide1 = sprites.create(img`
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
    . . . . . 1 1 b b 1 1 . . . . .
    . . . . . 1 b f f b 1 . . . . .
    . . . . . b f f f f b . . . . .
    . . . . . b f f f f b . . . . .
    . . . . . 1 b f f b 1 . . . . .
    . . . . . 1 1 b b 1 1 . . . . .
`, SpriteKind.guide)
guide1.setPosition(330, 264)
guide1.say("Keep an Eye Out For Coins!")
let guide2 = sprites.create(img`
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
    . . . . . 1 1 b b 1 1 . . . . .
    . . . . . 1 b f f b 1 . . . . .
    . . . . . b f f f f b . . . . .
    . . . . . b f f f f b . . . . .
    . . . . . 1 b f f b 1 . . . . .
    . . . . . 1 1 b b 1 1 . . . . .
`, SpriteKind.guide)
guide2.setPosition(500, 328)
guide2.say("Push the Box, and Jump on Top When it Finishes Moving")
let guide3 = sprites.create(img`
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
    . . . . . 1 1 b b 1 1 . . . . .
    . . . . . 1 b f f b 1 . . . . .
    . . . . . b f f f f b . . . . .
    . . . . . b f f f f b . . . . .
    . . . . . 1 b f f b 1 . . . . .
    . . . . . 1 1 b b 1 1 . . . . .
`, SpriteKind.guide)
guide3.setPosition(895, 168)
guide3.say("Clearly Nothing This Way....")
let guide4 = sprites.create(img`
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
    . . . . . 1 1 b b 1 1 . . . . .
    . . . . . 1 b f f b 1 . . . . .
    . . . . . b f f f f b . . . . .
    . . . . . b f f f f b . . . . .
    . . . . . 1 b f f b 1 . . . . .
    . . . . . 1 1 b b 1 1 . . . . .
`, SpriteKind.guide)
guide4.setPosition(645, 120)
guide4.say("Look For Holes In the Wall")
let guide5 = sprites.create(img`
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
    . . . . . 1 1 b b 1 1 . . . . .
    . . . . . 1 b f f b 1 . . . . .
    . . . . . b f f f f b . . . . .
    . . . . . b f f f f b . . . . .
    . . . . . 1 b f f b 1 . . . . .
    . . . . . 1 1 b b 1 1 . . . . .
`, SpriteKind.guide)
guide5.setPosition(1495, 312)
guide5.say("Space Jumps to Get Higher")
let guide6 = sprites.create(img`
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
    . . . . . 1 1 b b 1 1 . . . . .
    . . . . . 1 b f f b 1 . . . . .
    . . . . . b f f f f b . . . . .
    . . . . . b f f f f b . . . . .
    . . . . . 1 b f f b 1 . . . . .
    . . . . . 1 1 b b 1 1 . . . . .
`, SpriteKind.guide)
guide6.setPosition(62, 312)
guide6.say("Excape the Dungeon to Escape! Watch for Lava and Other Obstacles")
let Merek_right = img`
    . . . . . . . . . . . . . . . .
    . . . . . . 1 1 1 1 1 . . . . .
    . . . . . 1 d d d d d 1 . . . .
    . . . . . 1 d d f d f 1 . . . .
    . . . . . 1 d d d d d 1 . . . .
    . . . . . . 1 1 4 1 1 . . . . .
    . . . . . 1 4 4 4 4 4 1 . . . .
    . . . . . 1 4 4 4 4 4 1 . . . .
    . . . . . 1 4 4 4 4 4 1 . . . .
    . . . . . 1 4 4 4 4 4 1 . . . .
    . . . . . 1 d f f f d 1 . . . .
    . . . . . . 1 4 4 4 1 . . . . .
    . . . . . . 1 4 1 4 1 . . . . .
    . . . . . . 1 4 1 4 1 . . . . .
    . . . . . . 1 4 1 4 1 . . . . .
    . . . . . 1 e e 1 e e 1 . . . .
`
let Merek_left = img`
    . . . . . . . . . . . . . . . .
    . . . . . . 1 1 1 1 1 . . . . .
    . . . . . 1 d d d d d 1 . . . .
    . . . . . 1 f d f d d 1 . . . .
    . . . . . 1 d d d d d 1 . . . .
    . . . . . . 1 1 4 1 1 . . . . .
    . . . . . 1 4 4 4 4 4 1 . . . .
    . . . . . 1 4 4 4 4 4 1 . . . .
    . . . . . 1 4 4 4 4 4 1 . . . .
    . . . . . 1 4 4 4 4 4 1 . . . .
    . . . . . 1 d f f f d 1 . . . .
    . . . . . . 1 4 4 4 1 . . . . .
    . . . . . . 1 4 1 4 1 . . . . .
    . . . . . . 1 4 1 4 1 . . . . .
    . . . . . . 1 4 1 4 1 . . . . .
    . . . . . 1 e e 1 e e 1 . . . .
`
let Merek_jump_right = img`
    . . . . 1 . . . . . . . 1 . . .
    . . . 1 d 1 1 1 1 1 1 1 d 1 . .
    . . . 1 4 1 d d d d f 1 4 1 . .
    . . . 1 4 1 d d f d d 1 4 1 . .
    . . . 1 4 1 d d d d d 1 4 1 . .
    . . . . 1 4 1 1 4 1 1 4 1 . . .
    . . . . . 1 4 4 4 4 4 1 . . . .
    . . . . . . 1 4 4 4 1 . . . . .
    . . . . . . 1 4 4 4 1 . . . . .
    . . . . . . 1 4 4 4 1 . . . . .
    . . . . . . 1 f f f 1 . . . . .
    . . . . . . 1 4 4 4 1 . . . . .
    . . . . 1 1 1 4 1 4 1 . . . . .
    . . . 1 e 4 4 e 4 1 . . . . . .
    . . . 1 e 1 1 e 1 . . . . . . .
    . . . . 1 . . 1 . . . . . . . .
`
let Merek_jump_left = img`
    . . . . 1 . . . . . . . 1 . . .
    . . . 1 d 1 1 1 1 1 1 1 d 1 . .
    . . . 1 4 1 f d d d d 1 4 1 . .
    . . . 1 4 1 d d f d d 1 4 1 . .
    . . . 1 4 1 d d d d d 1 4 1 . .
    . . . . 1 4 1 1 4 1 1 4 1 . . .
    . . . . . 1 4 4 4 4 4 1 . . . .
    . . . . . . 1 4 4 4 1 . . . . .
    . . . . . . 1 4 4 4 1 . . . . .
    . . . . . . 1 4 4 4 1 . . . . .
    . . . . . . 1 f f f 1 . . . . .
    . . . . . . 1 4 4 4 1 . . . . .
    . . . . . . 1 4 1 4 1 1 1 . . .
    . . . . . . . 1 4 e 4 4 e 1 . .
    . . . . . . . . 1 e 1 1 e 1 . .
    . . . . . . . . . 1 . . 1 . . .
`
let coin = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . 5 5 2 4 . . . . . .
    . . . . . 5 5 5 5 2 4 . . . . .
    . . . . 5 5 5 5 5 5 2 4 . . . .
    . . . . 5 5 5 4 5 5 2 4 . . . .
    . . . . 5 5 5 4 5 5 2 4 . . . .
    . . . . 5 5 5 4 5 5 2 4 . . . .
    . . . . 5 5 5 4 5 5 2 4 . . . .
    . . . . 5 5 5 4 5 5 2 4 . . . .
    . . . . 5 5 5 4 5 5 2 4 . . . .
    . . . . 5 5 5 4 5 5 2 4 . . . .
    . . . . 5 5 5 5 5 5 2 4 . . . .
    . . . . 5 5 5 5 5 5 2 4 . . . .
    . . . . . 5 5 5 5 2 4 . . . . .
    . . . . . . 5 5 5 4 . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Projectile)
coin.setPosition(1175, 100)
//  SpriteKind.create(movable) 
let block = sprites.create(img`
    444444444444444444444444444444444444444444444444444444444444444e
    44444444444444444444444444444444444444444444444444444444444f44ee
    4444444444444444444444444444444444444444444444444444444444444eee
    444444f44444444444444444444444444444444444444444444444444444eeee
    44444444444444444444444444444444444444444444444444444444444eeefe
    4444444444444444444444444444444444444444444444444444444444eeeeee
    44f44444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeee
    444444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeee
    4444444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeee
    44444444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeee
    444444444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeee
    444444b444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeee
    444444bb444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeee
    444444bbb444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeee
    444444bbbb444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeee
    444444bbbbb444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeee
    444444bbbbbb444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeee
    444444bbbbbbb444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeee
    444444bbbbbbbb444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeee
    444444bbbbbbbbb444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeee
    444444bbbbbbbbbb444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeee
    444444bbbbbbbbbbb444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeee
    444444bbbbbbbbbbbb444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeee
    444444bbbbbbbbbbbbb444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeee
    444444bbbbbbbbbbbbbb444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeee
    444444bbbbbbbbbbbbbbb444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeee
    444444bbbbbbbbbbbbbbbb444444444bbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeee
    444444bbbbbbbbbbbbbbbbb444444444bbbbbbbbbbbbbbbbbbbbbbbbbbeeeeee
    444444bbbbbbbbbbbbbbbbbb444444444bbbbbbbbbbbbbbbbbbbbbbbbbeeeeee
    444444bbbbbbbbbbbbbbbbbbb444444444bbbbbbbbbbbbbbbbbbbbbbbbeeeeee
    444444bbbbbbbbbbbbbbbbbbbb44444444ebbbbbbbbbbbbbbbbbbbbbbbeeeeee
    444444bbbbbbbbbbbbbbbbbbbbb444444eeebbbbbbbbbbbbbbbbbbbbbbeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbb4444eeeeebbbbbbbbbbbbbbbbbbbbbeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbb44eeeeeeebbbbbbbbbbbbbbbbbbbbeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbbbbbbbbbbbbbbbbeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbbbbbbbbbbbbbbbeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbbbbbbbbbbbbbbeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbbbbbbbbbbbbbeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbbbbbbbbbbbbeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbbbbbbbbbbbeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbbbbbbbbbbeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbbbbbbbbbeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbbbbbbbbeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbbbbbbbeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbbbbbbeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbbbbbeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbbbbeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbbbeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbbeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbbeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbbeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebbeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeebeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeee
    444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeefee
    444444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeee
    44444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    4f44eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeee
    44eefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
`, SpriteKind.Food)
block.setFlag(SpriteFlag.ShowPhysics, true)
//  scene.place_on_random_tile(block, 3)
let Merek = sprites.create(Merek_right, SpriteKind.Player)
scene.setBackgroundColor(0)
info.setLife(3)
Merek.setFlag(SpriteFlag.ShowPhysics, true)
scene.cameraFollowSprite(Merek)
controller.moveSprite(Merek, 75, 0)
let coin1 = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . 5 5 2 4 . . . . . .
    . . . . . 5 5 5 5 2 4 . . . . .
    . . . . 5 5 5 5 5 5 2 4 . . . .
    . . . . 5 5 5 4 5 5 2 4 . . . .
    . . . . 5 5 5 4 5 5 2 4 . . . .
    . . . . 5 5 5 4 5 5 2 4 . . . .
    . . . . 5 5 5 4 5 5 2 4 . . . .
    . . . . 5 5 5 4 5 5 2 4 . . . .
    . . . . 5 5 5 4 5 5 2 4 . . . .
    . . . . 5 5 5 4 5 5 2 4 . . . .
    . . . . 5 5 5 5 5 5 2 4 . . . .
    . . . . 5 5 5 5 5 5 2 4 . . . .
    . . . . . 5 5 5 5 2 4 . . . . .
    . . . . . . 5 5 5 4 . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Projectile)
coin1.setPosition(370, 215)
Merek.ay = 300
block.ay = 99999
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function on_button_event_a_pressed() {
    Merek.vy = -150
    if (controller.dx() > 0) {
        Merek.setImage(Merek_jump_right)
    } else if (controller.dx() < 0) {
        Merek.setImage(Merek_jump_left)
    }
    
})
scene.setTileMap(img`
    cccccccc666666666666666666666ccccccccccccc.....................ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccc666666666666666666666ccccccccccccc......................cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccc6666666366666666666666cccccccccccc.......................ccccccccccccccccccccccccccccc66666666666666666666666ccc
    cccccccc66666666666666366666666ccccccccccc.......................ccccc......ccccccccccccccccc6666666666666666666666666cc
    cccccccc666666666666666666666666cccccccccc......................cccc.........cccccccccccccccc6666666666366666666666666cc
    cccccccc6666666666666666666666666ccccccccc......................cccc.........cccccccccccccccc66666cccc6666666666666666cc
    cccccccc66666666666666666666666666cccc6666...................................cccccccccccccccc6666cccccc666666666666666cc
    cccccccc666636666666666666666666666ccc.6666..................................cccccccccccccccc6666cccccc666666666666666cc
    cccccccc6666666663666666666666666666cabbbbb......................ccccc......cccccccccccccccccb666cccccc666666666666666cc
    cccccccc6666666663666663666666366666666666.....................cccccccccccccccccccccccccccccc6666cccccc666636666666666cc
    cccccccc666666666666666666666666666666666.....bbbb.............cccccccccccccccccccccccccccccc6366cccccc666666666666666cc
    cccccccc663666666666666666666666666666666......1f.....bbbb.....cccccccccccccccccccccccccccccc636bcccccc666666666666666cc
    cccccccc66666666666666666666666666666636.......1f......1f......cccccccccccccccccccccccccccccc6666cccccc666666666666666cc
    cccccccc66666336666663666666666666666633.......1f..bbbb1f......cccccccccccccccccccccccccccccc6666cccccc666666666666666cc
    cccccccc6666663666663666666636666636663........1f...1f.1f......ccccccccccccccccccccccccccccccb663cccccc666336666666666cc
    cccccccc66666663666666666666666666366666..bbbbbbbb..1f.1f......ccccccccccccccccccccccccccccc66666cccccc666666666666666cc
    cccccccc6666666666666666666666666666666....1f..1f...1f.1f......ccc666666666666666cccccccccc666666cccccc666666666636666cc
    c.8...8.66666666666777777777666666665555...1f..1f...1f.1f......ccc6666663366666663666666666666666cccccc666666666636666cc
    c.......6666666666becccccccc666666666666...1f..1f...1f.1f......ccc666663366666666636666663666666beccccc999977777666666cc
    c...d...666666666beccccccccc6666336666636..1f..1f...1f.1f......ccc66666666666666666666666666666becccccabbbbecccc777666cc
    abbbbbbbbbbbbbbbbecccccccccc666633666666b..1f..1f...1f.1f......ccc666666666666666bbbbbbbbbbbbbbeccccccccccccccccccc666cc
    cccccccccccccccccccccccccccabbbbbbbbbbbbe441f441f4441f41f444444cccbbbbbbbbbbbbbbbeccccccccccccccccccccccccccccccccc666cc
    ccccccccccccccccccccccccccccccccccccccccc221f221f2221f21f222222cccccccccccccccccccccccccccccccccccccccccccccccccccc666cc
    ccccccccccccccccccccccccccccccccccccccccc221f221f2221f21f222222cccccccccccccccccccccccccccccccccccccccccccccccccccc663cc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc666cc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc666cc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc666cc
    .cc..............ccccccccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666cc
    .................ccccccccccc666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666cc
    .................ccccccccccc666366666666636666666666663677776666666666666666666663666666666666333666666666666366666666cc
    .................ccccccccccc6666666666666666666666666366cccc6666666666636666666666666666666666666666666666666666666bbbec
    .................ccccccccccc6666666663666666666666666666cccc6677776666663666666.6666.66666666666666666666666666666becccc
    .................ccccccccccc66666666666.66666666666666..cccc66cccc66..6666666666666666666666666666.66666666666666beccccc
    .................ccccccccccc666666666666666.............cccc.6cccc6..6..66.6.77777777.6....6...6666..666...66666becccccc
    .................ccccccccccabbbbbbbbb77777.......777....cccc..cccc..777777...cccccccc........777777.......777777eccccccc
    .................ccccccccccccccccccccccccc4444444ccc4444cccc44cccc44cccccc444cccccccc44444444cccccc4444444cccccccccccccc
    .................ccccccccccccccccccccccccc22222222cc2222ccc2222ccc222cccc22222cccccc2222222222cccc222222222ccccccccccccc
    .................cccccccccccccccccccccccc222222222cc2222cc222222c2222ccc2c2222ccccc2222222222222cc2222222222cccccccccccc
    .................ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    .................ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
`)
scene.setTile(10, img`
    b b b b b b b b b b b b b d d d
    b c c c c c c c b c c c c c c c
    b c c c c c c c b c c c c c c c
    b c c c c c c c b c c c c c c c
    b b b b b b b b b b b b b b b b
    c c c c c b c c c c c c b c c c
    c c c c c b c c c c c c b c c c
    c c c c c b c c c c c c b c c c
    b b b b b b b b b b b b b b b b
    b c c c c c c c b c c c c c c c
    b c c c c c c c b c c c c c c c
    b c c c c c c c b c c c c c c c
    b b b b b b b b b b b b b b b b
    c c c c c b c c c c c c b c c c
    c c c c c b c c c c c c b c c c
    c c c c c b c c c c c c b c c c
`, true)
scene.setTile(11, img`
    d d d d d d d d d d d d d d d d
    d c c c c c c c d c c c c c c c
    b c c c c c c c b c c c c c c c
    b c c c c c c c b c c c c c c c
    b b b b b b b b b b b b b b b b
    c c c c c b c c c c c c b c c c
    c c c c c b c c c c c c b c c c
    c c c c c b c c c c c c b c c c
    b b b b b b b b b b b b b b b b
    b c c c c c c c b c c c c c c c
    b c c c c c c c b c c c c c c c
    b c c c c c c c b c c c c c c c
    b b b b b b b b b b b b b b b b
    c c c c c b c c c c c c b c c c
    c c c c c b c c c c c c b c c c
    c c c c c b c c c c c c b c c c
`, true)
scene.setTile(12, img`
    b b b b b b b b b b b b b b b b
    b c c c c c c c b c c c c c c c
    b c c c c c c c b c c c c c c c
    b c c c c c c c b c c c c c c c
    b b b b b b b b b b b b b b b b
    c c c c b c c c c c c c b c c c
    c c c c b c c c c c c c b c c c
    c c c c b c c c c c c c b c c c
    b b b b b b b b b b b b b b b b
    b c c c c c c c b c c c c c c c
    b c c c c c c c b c c c c c c c
    b c c c c c c c b c c c c c c c
    b b b b b b b b b b b b b b b b
    c c c c b c c c c c c c b c c c
    c c c c b c c c c c c c b c c c
    c c c c b c c c c c c c b c c c
`, true)
scene.setTile(14, img`
    d d d d b b b b b b b b b b b b
    d c c c c c c c b c c c c c c c
    b c c c c c c c b c c c c c c c
    b c c c c c c c b c c c c c c c
    b b b b b b b b b b b b b b b b
    c c c c b c c c c c c c b c c c
    c c c c b c c c c c c c b c c c
    c c c c b c c c c c c c b c c c
    b b b b b b b b b b b b b b b b
    b c c c c c c c b c c c c c c c
    b c c c c c c c b c c c c c c c
    b c c c c c c c b c c c c c c c
    b b b b b b b b b b b b b b b b
    c c c c b c c c c c c c b c c c
    c c c c b c c c c c c c b c c c
    c c c c b c c c c c c c b c c c
`, true)
scene.setTile(4, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . 4 4 . . 4 4 4 . 4 4 . 4 4 4 .
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 2 2 4 4
    4 2 2 4 4 2 2 4 4 2 2 4 2 2 2 4
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
`, true)
scene.setTile(13, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . f . . . . . .
    . . . . . . . . f b f . . . . .
    . . . . . . . f b b f . . . . .
    . . . . . . f b 1 b f . . . . .
    . . . . . . f b 1 1 f . . . . .
    . . . . . f b 1 1 1 f . . . . .
    . . . . . f 1 1 1 1 f . . . . .
    . . . . . f 1 1 1 1 f . . . . .
    . . . . . f 1 1 1 1 f . . . . .
    . . . . . f 1 1 1 1 f . . . . .
    . . . . . f 1 1 1 1 f . . . . .
    . . . . . f 1 1 1 1 f . . . . .
    . . . . . f 1 1 1 1 f . . . . .
`, false)
scene.setTile(8, img`
    . . . . . 1 1 1 1 1 . . . . . .
    . . . . . d 1 1 1 1 . . . . . .
    . . . . . d 1 1 1 1 . . . . . .
    . . . . . d 1 d 1 1 . . . . . .
    . . . . . d d 1 1 1 . . . . . .
    . . . . . d d 1 b 1 . . . . . .
    . . . . . d 1 1 b 1 . . . . . .
    . . . . . b 1 1 1 1 . . . . . .
    . . . . . b 1 1 1 1 . . . . . .
    . . . . . 1 1 1 1 1 . . . . . .
    . . . . . 1 1 1 b b . . . . . .
    . . . . . 1 1 1 1 b . . . . . .
    . . . . . . 1 1 1 b . . . . . .
    . . . . . . . 1 1 b . . . . . .
    . . . . . . . . 1 1 . . . . . .
    . . . . . . . . . 1 . . . . . .
`, false)
scene.setTile(7, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 7 7 7 6 7 7 7 6 6 7 7 7 7 7 7
    6 7 7 6 b 6 7 7 6 6 7 7 7 6 6 7
    c 6 6 c c b 6 6 c 6 7 7 7 6 6 6
    7 c c c c b c c c 6 6 7 7 6 c c
    c c c c c b c c c c 6 7 6 c c c
    b b b b b b b b b b 6 6 b b b b
    b c c c c c c c b c c c c c c c
    b c c c c c c c b c 7 c c c c c
    b c c c c c c c b c c c c c c c
    b b b b b b b b b b b b b b b b
    c c c c c b c c c c c c b c c c
    c c c c c b c c c c c c b c c c
    c c c c c b c c c c c c b c c c
`, true)
scene.setTile(9, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    8 8 8 8 8 7 3 7 7 7 8 8 8 8 8 8
    8 8 8 8 7 3 5 3 7 7 7 8 8 8 8 8
    8 8 8 8 8 7 3 7 7 7 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
`)
scene.setTile(3, img`
    c 6 7 7 7 c c c c c c c c c c c
    c 6 7 6 b b b b b b b b b b b b
    c b 6 7 b b b b b b b b b b b b
    c b b 6 6 7 7 b b b b b b b b b
    c b b b b 6 6 7 6 b b b b b b b
    c b b b b b 6 6 6 b b b b b b b
    c b b b b b b 6 7 7 b b b b b b
    c b b b b b 6 6 6 6 7 b b b b b
    c c c c c c 7 6 c c 6 7 7 7 c c
    b b b b b 7 6 6 c b b 6 6 7 b b
    b b b b b 7 6 6 c b b b b 6 b b
    b b b b 7 6 7 6 c b b b b 6 7 b
    b b b b 6 6 6 7 c b b b b b 7 b
    b b b b b 6 6 6 c b b b b 7 b b
    b b 6 6 7 7 7 7 c b b b b b b b
    b 6 6 7 6 7 b b c b b b b b b b
`, false)
scene.setTile(6, img`
    c c c c c c c c c c c c c c c c
    c b b b b b b b b b b b b b b b
    c b b b b b b b b b b b b b b b
    c b b b b b b b b b b b b b b b
    c b b b b b b b b b b b b b b b
    c b b b b b b b b b b b b b b b
    c b b b b b b b b b b b b b b b
    c b b b b b b b b b b b b b b b
    c c c c c c c c c c c c c c c c
    b b b b b b b b c b b b b b b b
    b b b b b b b b c b b b b b b b
    b b b b b b b b c b b b b b b b
    b b b b b b b b c b b b b b b b
    b b b b b b b b c b b b b b b b
    b b b b b b b b c b b b b b b b
    b b b b b b b b c b b b b b b b
`, false)
scene.setTile(5, img`
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
`, false)
scene.setTile(1, img`
    . . d b c b b c c b b c c b b c
    . . d b c b b c c b b c c b b c
    . . d b c b b c c b b c c b b c
    . . d b c b b c c b b c c b b c
    . . d b c b b c c b b c c b b c
    . . d b c b b c c b b c c b b c
    . . d b c b b c c b b c c b b c
    . . d b c b b c c b b c c b b c
    . . d b c b b c c b b c c b b c
    . . d b c b b c c b b c c b b c
    . . d b c b b c c b b c c b b c
    . . d b c b b c c b b c c b b c
    . . d b c b b c c b b c c b b c
    . . d b c b b c c b b c c b b c
    . . d b c b b c c b b c c b b c
    . . d b c b b c c b b c c b b c
`, false)
scene.setTile(15, img`
    c b b c c b b c c b b c b a . .
    c b b c c b b c c b b c b a . .
    c b b c c b b c c b b c b a . .
    c b b c c b b c c b b c b a . .
    c b b c c b b c c b b c b a . .
    c b b c c b b c c b b c b a . .
    c b b c c b b c c b b c b a . .
    c b b c c b b c c b b c b a . .
    c b b c c b b c c b b c b a . .
    c b b c c b b c c b b c b a . .
    c b b c c b b c c b b c b a . .
    c b b c c b b c c b b c b a . .
    c b b c c b b c c b b c b a . .
    c b b c c b b c c b b c b a . .
    c b b c c b b c c b b c b a . .
    c b b c c b b c c b b c b a . .
`, false)
scene.onHitTile(SpriteKind.Player, 4, function on_hit_tile(sprite: Sprite) {
    info.changeLifeBy(-3)
})
scene.onOverlapTile(SpriteKind.Player, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . 4 4 . . 4 4 4 . 4 4 . 4 4 4 .
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 2 2 4 4
    4 2 2 4 4 2 2 4 4 2 2 4 2 2 2 4
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
`, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    info.player1.changeLifeBy(-1)
})
tiles.placeOnTile(Merek, tiles.getTileLocation(2, 19))
let meany = sprites.create(img`
    . . . . 2 2 2 2 2 2 . . . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . 2 2 f 2 2 2 2 2 2 2 2 . . .
    . . 2 2 2 2 2 2 2 2 2 2 2 . . .
    . . 2 2 2 2 2 2 2 2 f 2 2 . . .
    . . . 2 2 f f f 2 2 2 2 2 . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . 5 2 2 2 5 . . . . . .
    . . . . 2 2 5 2 5 2 2 . . . . .
    . . . 2 . 2 2 5 2 2 . 2 . . . .
    . . . 2 . 2 5 2 5 2 . 2 . . . .
    . . . 2 . 5 2 2 2 5 . 2 . . . .
    . . . . . 2 . . . 2 . . . . . .
    . . . . . 2 . . . 2 . . . . . .
    . . . . . 2 . . . 2 . . . . . .
    . . . . . 2 . . . 2 . . . . . .
`, SpriteKind.Enemy)
tiles.placeOnTile(meany, tiles.getTileLocation(6, 19))
tiles.placeOnTile(block, tiles.getTileLocation(33, 18))
block.ay = 200
let canDoublejump = true
controller.moveSprite(Merek, 75, 0)
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function on_jump() {
    
    if (Merek.isHittingTile(CollisionDirection.Bottom) || canDoublejump) {
        Merek.vy = -150
        canDoublejump = Merek.isHittingTile(CollisionDirection.Bottom)
    }
    
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_overlap(sprite: Sprite, otherSprite: Sprite) {
    info.changeLifeBy(-1)
})
function on_update() {
    if (controller.dx() > 0) {
        Merek.setImage(Merek_right)
    } else if (controller.dx() < 0) {
        Merek.setImage(Merek_left)
    }
    
}

game.onUpdate(on_update)
game.onUpdate(on_update)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_push(sprite: Sprite, otherSprite: Sprite) {
    scene.cameraShake(2)
    otherSprite.setVelocity(10, 0)
})
game.onUpdate(function on_update2() {
    if (block.x == 608) {
        scene.setTile(5, img`
    c c c c c c c c c c c c c c c c
    c b b b b b b b b b b b b b b b
    c b b b b b b b b b b b b b b b
    c b b b b b b b b b b b b b b b
    c b b b b b b b b b b b b b b b
    c b b b b b b b b b b b b b b b
    c b b b b b b b b b b b b b b b
    c b b b b b b b b b b b b b b b
    c c c c c c c c c c c c c c c c
    b b b b b b b b c b b b b b b b
    b b b b b b b b c b b b b b b b
    b b b b b b b b c b b b b b b b
    b b b b b b b b c b b b b b b b
    b b b b b b b b c b b b b b b b
    b b b b b b b b c b b b b b b b
    b b b b b b b b c b b b b b b b
`, true)
    }
    
})
let vent = sprites.create(img`
    c c c c c c c c c f f f f f f c
    c b b b b c c c f f f f f f b b
    c b f f f f f f f f f f f b b b
    c f f f f f f f f f f f c b b b
    c b b c f f f f f f f f c b b b
    c b b c f f f f f f f f f f f f
    c b c f f f f f f f f f f f f b
    c b c f f f f f f f f f f f c b
    c c c f f f f f f f f f f f c c
    b b c f f f f f f f f f f f c b
    b b c f f f f f f f f f f f c b
    b f f f f f f f f f f f f f c b
    b c b f f f f f f f f f f f b f
    f c b f f f f f f c f f c f f f
    b b b f b f f c c b b f f b b b
    b b b f f b b b c b b b f f b b
`, SpriteKind.tunnel)
vent.setPosition(615, 120)
let ventout = sprites.create(img`
    c c c c c c c c c f f f f f f c
    c b b b b c c c f f f f f f b b
    c b f f f f f f f f f f f b b b
    c f f f f f f f f f f f c b b b
    c b b c f f f f f f f f c b b b
    c b b c f f f f f f f f f f f f
    c b c f f f f f f f f f f f f b
    c b c f f f f f f f f f f f c b
    c c c f f f f f f f f f f f c c
    b b c f f f f f f f f f f f c b
    b b c f f f f f f f f f f f c b
    b f f f f f f f f f f f f f c b
    b c b f f f f f f f f f f f b f
    f c b f f f f f f c f f c f f f
    b b b f b f f c c b b f f b b b
    b b b f f b b b c b b b f f b b
`)
ventout.setPosition(1080, 328)
//  Vent Mechanic
sprites.onOverlap(SpriteKind.Player, SpriteKind.tunnel, function on_overlap2(sprite: Sprite, otherSprite: Sprite) {
    tiles.placeOnTile(Merek, tiles.getTileLocation(66, 20))
})
let flagpole = sprites.create(img`
    . . . . . . . 2 2 2 . . . . . .
    . . . . . . . 2 2 2 2 2 . . . .
    . . . . . . . 2 2 2 2 2 2 2 . .
    . . . . . . . 2 2 2 2 2 2 2 . .
    . . . . . . . 2 2 2 2 2 . . . .
    . . . . . . . 2 2 2 . . . . . .
    . . . . . . . 2 b . . . . . . .
    . . . . . . . 1 b . . . . . . .
    . . . . . . . 1 b . . . . . . .
    . . . . . . . 1 b . . . . . . .
    . . . . . . . 1 b . . . . . . .
    . . . . . . . 1 b . . . . . . .
    . . . . . . . 1 b . . . . . . .
    . . . . . . . 1 b . . . . . . .
    . . . 5 5 5 5 5 4 4 4 4 4 . . .
    . . 5 5 5 5 5 5 5 5 5 5 4 4 . .
`, SpriteKind.Player)
flagpole.setPosition(513, 536)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function on_flag_grab(sprite: Sprite, otherSprite: Sprite) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function on_overlap3(sprite: Sprite, otherSprite: Sprite) {
    coin.destroy()
    info.changeScoreBy(1)
})
