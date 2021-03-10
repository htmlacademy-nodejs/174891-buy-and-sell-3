'use strict';

const {
  getRandomInt,
  shuffle,
  generateJSON,
} = require(`./utils`);

const {
  generateCategory,
  generateDescription,
  generatePictureName,
  generateTitle,
  generateType,
  generateSum
} = require(`./generateOffers`);

module.exports = {
  getRandomInt,
  shuffle,
  generateJSON,
  generateCategory,
  generateDescription,
  generatePictureName,
  generateTitle,
  generateType,
  generateSum
};
