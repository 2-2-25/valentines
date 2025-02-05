// chocolate.js

const yesBtn = document.getElementById("yBtn");
const music = document.getElementById("backgroundMusic");

// Play the song
function playSong() {
    music.play();
}

// Pause the song
function pauseSong() {
    music.pause();
}

// Stop the song (pause and reset)
function stopSong() {
    music.pause();
    music.currentTime = 0; // Reset to the beginning
}

function redirectTo(url) {
    window.open(url, '_blank'); // Opens the URL in a new tab
}

document.getElementById("yBtn").addEventListener("click", function() {
    window.close(); // Closes the current tab
});
