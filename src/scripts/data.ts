import sunIcon from '@assets/icons/sun.svg';
import rainIcon from '@assets/icons/cloud-rain.svg';
import winterIcon from '@assets/icons/cloud-snow.svg';
import summerBg from '@assets/img/summer-bg.jpg';
import rainyBg from '@assets/img/rainy-bg.jpg';
import winterBg from '@assets/img/winter-bg.jpg';
import summerSound from '@assets/sounds/summer.mp3';
import rainSound from '@assets/sounds/rain.mp3';
import winterSound from '@assets/sounds/winter.mp3';

interface WeatherItemConfig {
  id: string;
  icon: string;
  background: string;
  sound: string;
}

const weatherConfigs: WeatherItemConfig[] = [
  {
    id: '1',
    icon: sunIcon,
    background: summerBg,
    sound: summerSound,
  },
  {
    id: '2',
    icon: rainIcon,
    background: rainyBg,
    sound: rainSound,
  },
  {
    id: '3',
    icon: winterIcon,
    background: winterBg,
    sound: winterSound,
  },
];

export { weatherConfigs, WeatherItemConfig };
