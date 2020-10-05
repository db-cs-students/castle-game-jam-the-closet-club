/** 
Title: Prison Peril
Creators: Michael W. and Jason B.
Description: The guy is doing stuff! oh crap!

 */
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
scene.cameraFollowSprite(Merek)
controller.moveSprite(Merek, 75, 0)
Merek.ay = 300
block.ay = 99999
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function on_button_event_a_pressed() {
    Merek.vy = -150
})
scene.setTileMap(img`
    cccccccc666666666666666666666666666666666......................66666666666666666666666666666cccccccccccccccccccccccccccc
    cccccccc666666666666666666666666666666666......................66666666666666666666666666666cccccccccccccccccccccccccccc
    cccccccc666666636666666666666666666666666......................66666666666666666666666666666cc66666666666666666666666ccc
    cccccccc666666666666663666666666666666666......................66666666666666666666666666666c6666666666666666666666666cc
    cccccccc666666666666666666666666666666666......................66666666666666666666666666666c6666666666666666666666666cc
    cccccccc666666666666666666666666666366666......................66666666666666666666666666666c66666cccc6666666666666666cc
    cccccccc666666666666666666666666666666666......................66666666666666666666666666666c6666c6666c666666666666666cc
    cccccccc666636666666666666666666666666666......................66666666666666666666666666666c6666c6666c666666666666666cc
    cccccccc66666666636666666666666666666666666666.................66666666666666666666666666666c6666c6666c666666666666666cc
    cccccccc666666666366666366666636666666666......................66666666666666666666666666666c6666c6666c666666666666666cc
    cccccccc666666666666666666666666666666666......................66666666666666666666666666666c6666c6666c666666666666666cc
    cccccccc663666666666666666666666666666666.....bbbb.............66666666666666666666666666666c6666c6666c666666666666666cc
    cccccc5c666666666666666666666666666666366......1f.....bbbb.....66666666666666666666666666666c6666c6666c666666666666666cc
    c5cccccc666663366666636666666666666666336......1f......1f......66666666666666666666666666666c6666c6666c666666666666666cc
    cccc5ccc666666366666366666663666663666366......1f..bbbb1f......66666666666666666666666666666c6666c6666c666666666666666cc
    cccccccc666666636666666666666666663666666......1f...1f.1f......cccccccccccccccccc6666666666c66666c6666c666666666666666cc
    cccccccc666666666666666666666666666666666.bbbbbbbb..1f.1f......666666666666666666cccccccccc666666c6666c666666666666666cc
    c.8...8.666666666667777777776666666666666..1f..1f...1f.1f......6666666666666666666666666666666666c6666c666666666666666cc
    c.......6666666666becccccccc6666666666666..1f..1f...1f.1f......666666666666666666666666666666666c66666a999977777666666cc
    c...d...666666666becc5cccccc6666336666636..1f..1f...1f.1f......66666666666666666666666666666666c666666abbbbebbbb777666cc
    abbbbbbbbbbbbbbbbecccccccccc666633666666b..1f..1f...1f.1f......666666666666666666bbbbbbbbbbbbbcc666666666666666666c666cc
    c5cccccccccccccccccccccccccabbbbbbbbbbbbe441f441f4441f41f444444bbbbbbbbbbbbbbbbbb666666666666666666666666666666666c666cc
    cccccc5ccccc5ccccccc5ccccccccc5cccccccccc221f221f2221f21f222222ccccccccccccccccc6666666666666666666666666666666666c666cc
    ccccccccccccccccccccccccccccccccccccccc5c221f221f2221f21f222222ccccccccccccccccc6666666666666666666666666666666666c666cc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...cc
    .cc.....................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
    ........................................................................................................................
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
`, false)
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
    b b b b b b b b b b b b b b b b
    b c c c c c c c b c c c c c c c
    b c c c c c c c b c c c c c c c
    b c c c c c c c b c c c c c c c
    b b b b b b b b b b b b b b b b
    c c c c c b c c c c c c b c c c
    c c c c c b c c c c c c b c c c
    c c c c c b c c c c c c b c c c
    b b b b b b b b b b b b b b b b
    b c c c c c c c b f f f f f f f
    b c c c c c c c b f f f f f f f
    b c c c c c c c b f f f f f f f
    b b b b b b b b b b b b b b b b
    c c c c c b c c c c c c b c c c
    c c c c c b c c c c c c b c c c
    c c c c c b c c c c c c b c c c
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
meany.say("Plz dont touch me")
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_overlap(sprite: Sprite, otherSprite: Sprite) {
    info.changeLifeBy(-1)
})
game.onUpdate(function on_update() {
    Merek.say("" + controller.dx())
    if (controller.dx() > 0) {
        Merek.setImage(Merek_right)
    } else if (controller.dx() < 0) {
        Merek.setImage(Merek_left)
    }
    
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_push(sprite: Sprite, otherSprite: Sprite) {
    otherSprite.setVelocity(10, 0)
})
