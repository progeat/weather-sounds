import { data, Button } from './data';

const buttons: HTMLButtonElement[] = data.map(
  (elementData: Button): HTMLButtonElement => {
    const button: HTMLButtonElement = document.createElement('button');
    button.setAttribute('data-sound', elementData.sound);
    button.classList.add('button');
    button.style.backgroundImage = `url('./assets/img/${elementData.background}.jpg')`;
    button.style.backgroundRepeat = `no-repeat`;
    button.style.backgroundSize = `cover`;
    button.style.width = '200px';
    button.style.height = '200px';
    button.style.border = '1px solid #eee';
    button.style.borderRadius = '25px';
    button.style.cursor = 'pointer';

    const img: HTMLImageElement = new Image();
    img.src = `./assets/icons/${elementData.icon}.svg`;
    img.width = 60;
    img.height = 60;

    button.append(img);

    return button;
  }
);

export { buttons };
