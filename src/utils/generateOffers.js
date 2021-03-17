'use strict';

const {getRandomInt, shuffle} = require(`./utils`);

const generateCategory = (categories) => {
  return Array.of(categories[getRandomInt(0, categories.length - 1)]);
};

const generateDescription = (descriptions) => {
  return shuffle(descriptions).slice(1, 5).join(` `);
};


const getPictureFileName = (number) => {
  return number > 9 ? `item${number}.jpg` : `item0${number}.jpg`;
};

const generatePictureName = (pictureMinNumber, pictureMaxNumber) => {
  return getPictureFileName(getRandomInt(pictureMinNumber, pictureMaxNumber));
};


const generateTitle = (titles) => {
  return Array.of(titles[getRandomInt(0, titles.length - 1)]);
};

const generateType = (type) => {
  return Object.keys(type)[Math.floor(Math.random() * Object.keys(type).length)];
};

const generateSum = (minSum, maxSum) => {
  return getRandomInt(minSum, maxSum);
};

module.exports = {
  generateCategory,
  generateDescription,
  generatePictureName,
  generateTitle,
  generateType,
  generateSum
};
