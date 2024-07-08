const video = document.querySelector('video');
const playButton = document.querySelector('.player__button');
const volumeSlider = document.querySelector('.player__slider[name="volume"]');
const playbackSpeedSlider = document.querySelector('.player__slider[name="playbackRate"]');
const skipButtons = document.querySelectorAll('.player__button[data-skip]');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
playButton.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    playButton.textContent = '❚ ❚'; // Pause icon
  } else {
    video.pause();
    playButton.textContent = '►'; // Play icon
  }
});
volumeSlider.addEventListener('input', function() {
  video.volume = volumeSlider.value;
});

playbackSpeedSlider.addEventListener('input', function() {
  video.playbackRate = playbackSpeedSlider.value;
});
// Skip Buttons: You can add event listeners to the skip buttons. When clicked, update the video’s current time by adding the skip value.
skipButtons.forEach(button => {
  button.addEventListener('click', function() {
    video.currentTime += parseFloat(button.dataset.skip);
  });
});
// Progress Bar: You can add an event listener to the video’s timeupdate event. When the video’s current time changes, update the progress bar’s width.
video.addEventListener('timeupdate', function() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
});
progress.addEventListener('click', function(e) {
  const newTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = newTime;
});