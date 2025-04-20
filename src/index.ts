import { buttons } from './buttons';
import { Sound } from './sounds';
import { data } from './data';
import './index.scss';

let currentSound: Sound | null = null;

document.addEventListener('DOMContentLoaded', () => {
  const buttonsContainer: HTMLElement | null =
    document.querySelector('.buttons-container');
  const volumeControl: HTMLInputElement | null = document.getElementById(
    'volume'
  ) as HTMLInputElement;

  const summerSound = new Sound('summer');
  const rainSound = new Sound('rain');
  const winterSound = new Sound('winter');

  buttons.forEach((button: HTMLButtonElement) => {
    button.addEventListener('click', () => {
      const soundName: string = button.dataset.sound;

      const bgImg: string = data.find(
        (obj) => obj.sound === soundName
      ).background;

      document.body.style.backgroundImage = `url('./assets/img/${bgImg}.jpg')`;

      switch (soundName) {
        case 'summer':
          if (currentSound !== summerSound && currentSound !== null) {
            currentSound.stop();
          }
          summerSound.play();
          currentSound = summerSound;
          break;
        case 'rain':
          if (currentSound !== rainSound && currentSound !== null) {
            currentSound.stop();
          }
          rainSound.play();
          currentSound = rainSound;
          break;
        case 'winter':
          if (currentSound !== winterSound && currentSound !== null) {
            currentSound.stop();
          }
          winterSound.play();
          currentSound = winterSound;
          break;
      }
    });
  });

  buttonsContainer.append(...buttons);

  volumeControl.addEventListener('input', (event: Event) => {
    const target = event.target as HTMLInputElement;
    const volume = Number(target.value) / 100;
    summerSound.setVolume(volume);
    rainSound.setVolume(volume);
    winterSound.setVolume(volume);
  });
});
