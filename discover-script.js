// script.js
const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause');
const volumeSlider = document.getElementById('volume-slider');

playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused || audioPlayer.ended) {
        audioPlayer.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = 'Play';
    }
});

volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value;
});

audioPlayer.addEventListener('ended', () => {
    playPauseButton.textContent = 'Play';
});
