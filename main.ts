radio.onReceivedNumber(function (receivedNumber) {
    number = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    led.plotBarGraph(
    Math.map(number, -95, -42, 0, 9),
    9
    )
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("no thx")
    basic.showIcon(IconNames.Asleep)
    basic.pause(100)
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(1)
    radio.setTransmitPower(5)
    for (let index = 0; index < 100; index++) {
        radio.sendNumber(1)
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "no thx") {
        basic.showIcon(IconNames.Asleep)
    } else if (receivedString == "safe") {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("HELP")
    basic.showIcon(IconNames.No)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("safe")
    basic.showIcon(IconNames.Happy)
})
let number = 0
radio.setGroup(7)
