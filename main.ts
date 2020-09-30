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
`, SpriteKind.Player)
scene.setBackgroundColor(0)
info.setLife(3)
scene.cameraFollowSprite(Merek)
controller.moveSprite(Merek, 75, 0)
Merek.ay = 150
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
    abbbbbbbbbbbbbbbbbbecc999ccc...333....c.........................................
    cccccccccccccccccccccc999cccccccccccccc444444444444444444444444ccccccccccccccccc
    cccccccccccccccccccccabbbeccccccccccccc444244442224442422422444ccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccc222222222222222222222222ccccccccccccccccc
`)
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
