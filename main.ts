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
    radio.setGroup(1)
    radio.setTransmitPower(1)
    radio.sendNumber(1)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "no thx") {
        basic.showIcon(IconNames.Asleep)
        basic.pause(2000)
    } else if (receivedString == "safe") {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(2000)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("HELP")
    basic.showIcon(IconNames.No)
    radio.setGroup(1)
    radio.setTransmitPower(1)
    radio.sendNumber(1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("safe")
    basic.showIcon(IconNames.Happy)
})
let number = 0
radio.setGroup(7)
