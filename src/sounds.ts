class Sound {
  public audio: HTMLAudioElement;
  public playing: boolean;

  constructor(soundName: string) {
    this.audio = new Audio(`./assets/sounds/${soundName}.mp3`);
    this.playing = false;
  }

  public play(): void {
    if (!this.playing) {
      this.audio.play();
      this.audio.volume = 50 / 100;
      this.playing = true;
    } else {
      this.audio.pause();
      this.playing = false;
    }
  }

  public stop(): void {
    this.audio.load();
    this.playing = false;
  }

  public setVolume(volume: number): void {
    this.audio.volume = volume;
  }
}

export { Sound };
