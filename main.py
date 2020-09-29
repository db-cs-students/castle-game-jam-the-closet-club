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
controller.move_sprite(Merek)
tiles.set_tilemap(tilemap("""level"""))
scene.camera_follow_sprite(Merek)
Merek.ay = 150
def on_button_event_a_pressed():
    Merek.vy = -75
controller.player1.on_button_event(ControllerButton.A, ControllerButtonEvent.PRESSED, on_button_event_a_pressed)