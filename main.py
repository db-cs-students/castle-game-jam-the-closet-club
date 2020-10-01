"""
Title: Prison Peril
Creators: Michael W. and Jason B.
Description: The guy is doing stuff! oh crap!
"""
# Merek = sprites.create(img("""
#     . . . . . . . . . . . . . . . .
#     . . . . . . . . . . . . . . . .
#     . . . . f f f f f f f f . . . .
#     . . . f 4 4 e 4 4 4 4 1 f f . .
#     . . f f 4 4 4 4 4 4 4 f 4 f . .
#     . . f 4 1 4 4 4 4 4 e 4 4 f . .
#     . f e 4 f 4 4 4 4 4 4 4 f . f .
#     . f f 4 4 4 f f f f 4 f . . f .
#     . f . f f 4 e 4 4 4 f f . . f .
#     . f . . f f f f f f f . . . f .
#     . f . . f f f . f f f . . f . f
#     f . f f f f f . f f f f . . . .
#     . . . f f f . . . f f f . . . .
#     . . . f f . . . . f f f . . . .
#     . . . f . . . . . . . f . . . .
#     . . . . . . . . . . . . . . . .
# """), SpriteKind.player)
Merek_right = img("""
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
""")
Merek_left = img("""
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
""")
Merek = sprites.create(Merek_right, SpriteKind.player)
scene.set_background_color(0)
info.set_life(3)
scene.camera_follow_sprite(Merek)
controller.move_sprite(Merek, 75, 0)
Merek.ay = 200
def on_button_event_a_pressed():
    Merek.vy = -100
controller.player1.on_button_event(ControllerButton.A, ControllerButtonEvent.PRESSED, on_button_event_a_pressed)
scene.set_tile_map(img("""
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
"""))
scene.set_tile(10, img("""
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
"""),True)
scene.set_tile(11, img("""
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
"""),True)
scene.set_tile(12, img("""
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
"""),True)
scene.set_tile(14, img("""
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
"""),True)
scene.set_tile(4, img("""
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
"""),False)
def on_overlap_tile(sprite, location):
     info.player1.change_life_by(-1)
scene.on_overlap_tile(SpriteKind.player, img("""
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
"""), on_overlap_tile)
tiles.place_on_tile(Merek, tiles.get_tile_location(2, 19))
meany = sprites.create(img("""
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
"""), SpriteKind.enemy)
tiles.place_on_tile(meany, tiles.get_tile_location(6, 19))

# Canjump = True
# def Canjump():
#     global Canjump
#     if Canjump:
#         Merek.vy = -100
#         Canjump

def on_overlap(sprite, otherSprite):
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_overlap)

def on_update():
    Merek.say(str(controller.dx()))
    if controller.dx() > 0:
        Merek.set_image(Merek_right)
    elif controller.dx() < 0:
       Merek.set_image(Merek_left) 
game.on_update(on_update)
