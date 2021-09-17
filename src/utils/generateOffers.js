'use strict';

const {Utils} = require(`./utils`);

const generateCategory = (categories) => {
  return Array.of(categories[Utils.getRandomInt(0, categories.length - 1)]);
};

const generateDescription = (descriptions) => {
  return Utils.shuffle(descriptions).slice(1, 5).join(` `);
};


const getPictureFileName = (number) => {
  return number > 9 ? `item${number}.jpg` : `item0${number}.jpg`;
};

const generatePictureName = (pictureMinNumber, pictureMaxNumber) => {
  return getPictureFileName(Utils.getRandomInt(pictureMinNumber, pictureMaxNumber));
};


const generateTitle = (titles) => {
  return Array.of(titles[Utils.getRandomInt(0, titles.length - 1)]);
};

const generateType = (type) => {
  return Object.keys(type)[Math.floor(Math.random() * Object.keys(type).length)];
};

const generateSum = (minSum, maxSum) => {
  return Utils.getRandomInt(minSum, maxSum);
};

module.exports = {
  generateCategory,
  generateDescription,
  generatePictureName,
  generateTitle,
  generateType,
  generateSum
};
