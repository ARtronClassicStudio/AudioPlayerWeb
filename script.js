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
        playPauseIcon.src = 'play.svg'; // Замените на ваш значок play
    } else {
        audioPlayer.play();
        playPauseIcon.src = 'pause.svg'; // Замените на ваш значок pause
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
trackTitle.textContent = "My Awesome Radio Stream"; // Hardcoded title

// Handle errors
audioPlayer.addEventListener('error', function(e) {
    console.error("Audio error:", e);
    trackTitle.textContent = "Error loading audio.";
});

// Optional: Fetch title from stream metadata (more complex)
// This requires server-side support or stream that provides metadata in a predictable format.
// Example (not guaranteed to work):
// fetch('/stream-metadata')
//   .then(response => response.json())
//   .then(data => {
//     trackTitle.textContent = data.title;
//   });
