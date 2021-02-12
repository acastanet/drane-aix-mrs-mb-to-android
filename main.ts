bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.House)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Angry)
})
basic.showIcon(IconNames.Heart)
let v = 0
basic.forever(function () {
    v += 1
    bluetooth.uartWriteValue("x", v)
    basic.pause(1000)
})
