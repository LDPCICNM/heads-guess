input.onGesture(Gesture.LogoUp, function () {
    INDEX = randint(0, text_list.length - 1)
    basic.showString("" + (text_list[INDEX]))
})
input.onGesture(Gesture.ScreenUp, function () {
    game.removeLife(1)
})
input.onGesture(Gesture.ScreenDown, function () {
    game.addScore(1)
})
let INDEX = 0
let text_list: string[] = []
text_list = ["PUPPY", "CLOCK", "NIGHT"]
game.startCountdown(30000)
basic.forever(function () {
	
})
