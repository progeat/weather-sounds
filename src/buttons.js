import DATA from './data';

const buttons = DATA.map((elementData) => {
  const button = document.createElement('button');
  button.setAttribute.dataId = elementData.id;
  button.classList.add('button', elementData.sound);
  button.style.backgroundImage = `url('./assets/icons/${elementData.icon}.svg')`;

  return button;
});

export { buttons };
