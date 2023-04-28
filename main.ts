input.onButtonPressed(Button.A, function () {
    radio.sendString("no thx")
    basic.showIcon(IconNames.Asleep)
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
radio.setGroup(7)
