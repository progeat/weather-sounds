import { buttons } from './buttons';
import { Sound } from './sounds';
import DATA from './data';
import './index.scss';

let currentSound = null;

document.addEventListener('DOMContentLoaded', () => {
  const buttonsContainer = document.querySelector('.buttons-container');
  const volumeControl = document.getElementById('volume');

  const summerSound = new Sound('summer');
  const rainSound = new Sound('rain');
  const winterSound = new Sound('winter');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const soundName = button.dataset.sound;

      const bgImg = DATA.find((obj) => obj.sound === soundName).background;

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

  volumeControl.addEventListener('input', ({ target }) => {
    const volume = target.value / 100;
    summerSound.setVolume(volume);
    rainSound.setVolume(volume);
    winterSound.setVolume(volume);
  });
});
