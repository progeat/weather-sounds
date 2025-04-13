class Sound {
  constructor(soundName) {
    this.audio = new Audio(`./assets/sounds/${soundName}.mp3`);
    this.playing = false;
  }

  play() {
    if (!this.playing) {
      this.audio.play();
      this.playing = true;
    } else {
      this.audio.pause();
      this.playing = false;
    }
  }
}

export { Sound };
