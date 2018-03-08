const CONFIG_URL = 'http://master-atul.github.io/TheoryOfFApp/assets/fucks.json';
const FUCKS_BASE_URL = 'http://master-atul.github.io/TheoryOfFApp/assets/fucks/';

let config = null;


const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomImageUrl = async () => {
  if (!config) {
    const data = await fetch(CONFIG_URL);
    const fucksConfig = await data.json();
    config = fucksConfig;
  }
  const maxNoFucks = config.length;
  const selected = getRandomInt(0, maxNoFucks);
  const imageUrl = FUCKS_BASE_URL + config[selected];
  return imageUrl;
};

