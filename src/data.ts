interface Button {
  id: number;
  icon: string;
  background: string;
  sound: string;
}

const data: Button[] = [
  {
    id: 1,
    icon: 'sun',
    background: 'summer-bg',
    sound: 'summer',
  },
  {
    id: 2,
    icon: 'cloud-rain',
    background: 'rainy-bg',
    sound: 'rain',
  },
  {
    id: 3,
    icon: 'cloud-snow',
    background: 'winter-bg',
    sound: 'winter',
  },
];

export { data, Button };
