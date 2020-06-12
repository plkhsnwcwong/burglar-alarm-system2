radio.setGroup(20)
basic.forever(function () {
    if (input.lightLevel() > 5) {
        radio.sendNumber(1)
    }
})
