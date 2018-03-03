const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.resolve(__dirname, '../assets');
const FUCKS_DIR = path.resolve(ASSETS_DIR, 'fucks');
const FUCKS_JSON = path.resolve(ASSETS_DIR, 'fucks.json');

const readContentsOfDir = () => {
  const readPromise = new Promise((resolve, reject) => {
    fs.readdir(FUCKS_DIR, (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(JSON.stringify(data, null, 1));
    });
  });
  return readPromise;
};

const writeFucks = (fucks) => {
  const writePromise = new Promise((resolve, reject) => {
    fs.writeFile(FUCKS_JSON, fucks, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
  return writePromise;
};

const buildFucks = async () => {
  const fucks = await readContentsOfDir();
  await writeFucks(fucks);
};

buildFucks();
