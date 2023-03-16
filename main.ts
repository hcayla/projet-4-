input.onSound(DetectedSound.Loud, function () {
    basic.showString("chut")
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showString("cool")
})
basic.forever(function () {
	
})
