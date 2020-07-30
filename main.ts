input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.showIcon(IconNames.SmallHeart)
})
