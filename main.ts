let rand_number = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Target)
})
input.onGesture(Gesture.Shake, function () {
    rand_number = randint(0, 3)
    if (rand_number == 1) {
        basic.showIcon(IconNames.Target)
    } else if (rand_number == 2) {
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Scissors)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
