function updateNotification(message) {
    var notificationElement = documentgetElementById('notification'); notificationElement.innerText = message;
}

function dabooAchieved() {
    updateNotification('Congratulations! You achieved DABOO!');
}

function playSoundEffect(soundFile) { var audio = new Audio('sounds/' + soundFile); audio.play(); }

function dabooAchieved() {
    playSoundEffect('daboo.wav');
}