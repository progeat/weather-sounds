class SoundManager {
  private audio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private volume: number = 50 / 100;

  public playSound(soundPath: string): void {
    this.stop();

    this.audio = new Audio(soundPath);
    this.audio.loop = true;
    this.audio.volume = this.volume;
    this.audio.play();
    this.isPlaying = true;
  }

  public stop(): void {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  public togglePlayback(): void {
    if (!this.audio) return;

    if (this.isPlaying) {
      this.audio.pause();
      this.isPlaying = false;
    } else {
      this.audio.play();
      this.isPlaying = true;
    }
  }

  public setVolume(volume: number): void {
    this.volume = volume;
    if (this.audio) {
      this.audio.volume = volume;
    }
  }
}

export { SoundManager };
