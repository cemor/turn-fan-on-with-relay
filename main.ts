input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.showIcon(IconNames.SmallHeart)
})
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P1,
    true,
    false,
    true
    )
    if (dht11_dht22.readData(dataType.temperature) > 27) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showIcon(IconNames.Yes)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showIcon(IconNames.No)
    }
})
