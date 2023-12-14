function toggleSound() {
  var audioPlayer = document.getElementById('audioPlayer');
  var soundIcon = document.getElementById('soundIcon');

  if (audioPlayer.paused) {
      audioPlayer.play();
      soundIcon.src = 'assets/Speaker-Off.svg';
  } else {
      audioPlayer.pause();
      soundIcon.src = 'assets/Speaker-On.svg';
  }
}