'use strict';

const {
  Utils,
  generateCategory,
  generateDescription,
  generatePictureName,
  generateTitle,
  generateType,
  generateSum
} = require(`../../utils/index`);

const FILE_NAME = `mocks.json`;

const Count = {
  DEFAULT_COUNT: 1,
  MAX_COUNT: 1000,
};

const OfferType = {
  OFFER: `offer`,
  SALE: `sale`,
};

const SumRestrict = {
  MIN: 1000,
  MAX: 100000,
};

const PictureRestrict = {
  MIN: 1,
  MAX: 16,
};

const Path = {
  FILE_SENTENCES_PATH: `./data/sentences.txt`,
  FILE_TITLES_PATH: `./data/titles.txt`,
  FILE_CATEGORIES_PATH: `./data/categories.txt`,
};

const generateOffers = async (count) => {
  const [categories, sentences, titles] = await Promise.all([
    Utils.readContent(Path.FILE_CATEGORIES_PATH),
    Utils.readContent(Path.FILE_SENTENCES_PATH),
    Utils.readContent(Path.FILE_TITLES_PATH),
  ]);

  return Array(count).fill({}).map(() => ({
    category: generateCategory(categories),
    description: generateDescription(sentences),
    picture: generatePictureName(PictureRestrict.MIN, PictureRestrict.MAX),
    title: generateTitle(titles),
    type: generateType(OfferType),
    sum: generateSum(SumRestrict.MIN, SumRestrict.MAX),
  }));
};

module.exports = {
  name: `--generate`,
  async run(args) {
    const [count] = args;
    let countOffer = Number.parseInt(count, 10) || Count.DEFAULT_COUNT;
    if (countOffer > Count.MAX_COUNT) {
      countOffer = Count.MAX_COUNT;
    }

    return Utils.writeJSONFile(FILE_NAME, await generateOffers(countOffer));
  }
};
