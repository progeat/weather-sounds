import DATA from './data';

const buttons = DATA.map((elementData) => {
  const button = document.createElement('button');
  button.setAttribute.dataSound = elementData.sound;
  button.classList.add('button');
  button.style.backgroundImage = `url('./assets/icons/${elementData.icon}.svg')`;

  return button;
});

export { buttons };
