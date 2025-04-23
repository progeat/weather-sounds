import { SoundManager } from './sound-manager';
import { weatherConfigs, WeatherItemConfig } from './data';
import '../index.scss';

const soundManager = new SoundManager();

let playingMusicId: string | null = null;
const list = document.querySelector('.weather-list') as HTMLUListElement;

const volume = document.querySelector('.volume-controller') as HTMLInputElement;
volume.addEventListener('input', (e) => {
  const target = e.target as HTMLInputElement;
  soundManager.setVolume(Number(target.value) / 100);
});

list.addEventListener('click', (e) => {
  const target = e.target as HTMLLIElement;
  const targetId = (target.closest('[data-item-id]') as HTMLLIElement)?.dataset
    .itemId;
  if (!targetId) return;

  const item = weatherConfigs.find((i) => i.id === targetId);
  if (!item) return;

  if (playingMusicId !== item.id) {
    soundManager.stop();

    document.body.style.backgroundImage = `url('${item.background}')`;

    soundManager.playSound(item.sound);

    playingMusicId = item.id;
  } else {
    if (playingMusicId) {
      soundManager.togglePlayback();
    }
  }
});

function renderItem(item: WeatherItemConfig): void {
  const listItem = document.createElement('li') as HTMLLIElement;
  const weatherItem = document.createElement('button') as HTMLButtonElement;
  const itemIcon = document.createElement('img') as HTMLImageElement;

  listItem.classList.add('weather-list__item');
  weatherItem.classList.add('weather-item');
  itemIcon.classList.add('weather-item__icon');

  weatherItem.dataset.itemId = String(item.id);
  weatherItem.style.backgroundImage = `url('${item.background}')`;
  itemIcon.src = item.icon;

  weatherItem.append(itemIcon);
  listItem.append(weatherItem);
  list.append(listItem);
}

weatherConfigs.forEach(renderItem);
