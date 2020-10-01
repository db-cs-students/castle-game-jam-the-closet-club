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
    . f f f f f f f f f f f f f f .
    f . . . . . . . . . . . . . . f
    f . . f 1 . f f f f f . 1 f . f
    f . . 1 1 . f 2 2 f . . 1 1 . f
    . f . . . . . f f 9 . . . . f .
    f . . . . . d d . 9 . . . . . .
    f . . . . . d . . 1 . . . . . f
    d d . . . . . . . . . . . . d f
    d d d f . . . . . . . . f d d f
    d d f . . . . . . d . . f d d f
    d d f . . . . . . . . . f d d f
    f f . . . . . . . . . . . f d f
    . . . . . . . . . . . . . . f .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`
let Merek = sprites.create(Merek_right, SpriteKind.Player)
scene.setBackgroundColor(0)
info.setLife(3)
scene.cameraFollowSprite(Merek)
controller.moveSprite(Merek, 75, 0)
Merek.ay = 200
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function on_button_event_a_pressed() {
    Merek.vy = -100
})
scene.setTileMap(img`
    cccccccc........................................................................
    cccccccc........................................................................
    cccccccc........................................................................
    cccccccc........................................................................
    cccccccc........................................................................
    cccccccc..........................66............................................
    cccccccc........................................................................
    cccccccc........................................................................
    cccccccc................................666666..................................
    cccccccc........................................................................
    cccccccc........................................................................
    cccccccc........................................................................
    cccccccc............................................66666.......................
    cccccccc........................................................................
    cccccccc........................................................................
    cccccccc...................................666666...............................
    cccccccc........................................................................
    c.d...d............777...777....................................................
    c.....d............ccc999ccc...333..............................................
    c...d..............ccc999ccc...333..............................................
    abbbbbbbbbbbbbbbbbbecc999ccc...333....b.........................................
    cccccccccccccccccccccc999ccabbbbbbbbbbe444444444444444444444444bbbbbbbbbbbbbbbbb
    cccccccccccccccccccccabbbeccccccccccccc222222222222222222222222ccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccc222222222222222222222222ccccccccccccccccc
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
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . 5 . . . . . . . . . . .
    . . . 5 5 5 5 . . 5 5 5 . . . .
    . . 5 5 5 5 5 . . . . . 5 . . .
    . 5 5 5 5 5 5 5 . . . . . 5 . .
    . 5 5 5 5 5 . 5 5 . . . . . 5 .
    . . 5 5 5 . . . . 5 5 . . . 5 .
    . . . 5 5 . . . . . 5 5 . . 5 .
    . . . . . . . . . . . 5 5 5 . .
    . . . . . 5 . . . . . . 5 . . .
    . . . . 5 . 5 . . . . 5 5 5 . .
    . . 5 5 . . . 5 5 5 5 . . . 5 .
    . . 5 5 . . . . . . . . . . 5 .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Enemy)
tiles.placeOnTile(meany, tiles.getTileLocation(6, 19))
//  Canjump = True
//  def Canjump():
//      global Canjump
//      if Canjump:
//          Merek.vy = -100
//          Canjump
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
