import { buttons } from './buttons';
import { Sound } from './sounds';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  const buttonsContainer = document.querySelector('.buttons-container');
  const volumeControl = document.getElementById('volume');

  console.log(buttons);

  const summerSound = new Sound('summer');
  const rainSound = new Sound('rain');
  const winterSound = new Sound('winter');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const soundName = button.dataset.sound;

      switch (soundName) {
        case 'summer':
          summerSound.play();
          break;
        case 'rain':
          rainSound.play();
          break;
        case 'winter':
          winterSound.play();
          break;
      }
    });
  });

  buttonsContainer.append(...buttons);

  volumeControl.addEventListener('input', ({ target }) => {
    const volume = target.value / 100;
    document.querySelectorAll('audio').forEach((audio) => {
      audio.volume = volume;
    });
  });
});
