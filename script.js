const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause-button');
const playPauseIcon = document.getElementById('play-pause-icon');
const volumeSlider = document.getElementById('volume-slider');
const trackTitle = document.getElementById('track-title');

let isPlaying = false;

// Function to toggle play/pause
function togglePlayPause() {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseIcon.src = 'play.svg';
    } else {
        audioPlayer.play();
        playPauseIcon.src = 'pause.svg';
    }
    isPlaying = !isPlaying;
}

// Event listener for play/pause button
playPauseButton.addEventListener('click', togglePlayPause);

// Event listener for volume slider
volumeSlider.addEventListener('input', function() {
    audioPlayer.volume = volumeSlider.value;
});

// Event listener for audio to update play/pause icon
audioPlayer.addEventListener('playing', function() {
    playPauseIcon.src = 'pause.svg';
    isPlaying = true;
});

audioPlayer.addEventListener('pause', function() {
    playPauseIcon.src = 'play.svg';
    isPlaying = false;
});

// Update track title (replace with your logic to get title from stream)
trackTitle.textContent = "My Awesome Radio Stream";

// Attempt autoplay and remove muted attribute
audioPlayer.addEventListener('canplay', function() {
  audioPlayer.muted = false; // Unmute
  audioPlayer.play().then(() => {
      console.log("Autoplay started successfully!");
      playPauseIcon.src = 'pause.svg';
      isPlaying = true;
  }).catch(error => {
      console.log("Autoplay prevented by browser:", error);
      // Show a message to the user or update the UI to indicate autoplay was blocked
      trackTitle.textContent = "Click Play to Start"; // e.g.
      playPauseIcon.src = 'play.svg';
      isPlaying = false;
  });
});


// Handle errors
audioPlayer.addEventListener('error', function(e) {
    console.error("Audio error:", e);
    trackTitle.textContent = "Error loading audio.";
});
