class Sound {
  constructor(soundName) {
    this.audio = new Audio(`./assets/sounds/${soundName}.mp3`);
    this.playing = false;
  }

  play() {
    if (!this.playing) {
      this.audio.play();
      this.audio.volume = 50 / 100;
      this.playing = true;
    } else {
      this.audio.pause();
      this.playing = false;
    }
  }

  stop() {
    this.audio.load();
    this.playing = false;
  }

  setVolume(volume) {
    this.audio.volume = volume;
  }
}

export { Sound };
