"""
Title: Prison Peril
Creators: Michael W. and Jason B.
Description: The guy is doing stuff! oh crap!
"""
Merek = sprites.create(img("""
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
"""))
scene.set_background_color(0)
info.set_life(3)
scene.camera_follow_sprite(Merek)
controller.move_sprite(Merek, vy= 0)
Merek.ay = 150
def on_button_event_a_pressed():
    Merek.vy = -97
controller.player1.on_button_event(ControllerButton.A, ControllerButtonEvent.PRESSED, on_button_event_a_pressed)
scene.set_tile_map(img("""
    cccccccc........................................
    cccccccc........................................
    cccccccc........................................
    cccccccc........................................
    cccccccc........................................
    cccccccc........................................
    cccccccc........................................
    cccccccc........................................
    cccccccc........................................
    cccccccc........................................
    cccccccc........................................
    cccccccc........................................
    cccccccc........................................
    cccccccc........................................
    cccccccc........................................
    cccccccc........................................
    cccccccc........................................
    c.d...d............777...777....................
    c.....d............ccc999ccc....................
    c...d..............ccc999ccc....................
    abbbbbbbbbbbbbbbbbbecc999ccc....................
    cccccccccccccccccccccc999ccc....................
    cccccccccccccccccccccabbbecc....................
    cccccccccccccccccccccccccccc....................
"""))
scene.set_tile(11, img("""
    b b b b b b b b b b b b b b b b
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
scene.set_tile(12, img("""
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
"""),True)

tiles.place_on_tile(Merek, tiles.get_tile_location(2, 19))
