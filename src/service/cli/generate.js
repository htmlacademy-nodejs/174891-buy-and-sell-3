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

const TITLES = [
  `Продам книги Стивена Кинга`,
  `Продам новую приставку Sony Playstation 5`,
  `Продам отличную подборку фильмов на VHS`,
  `Куплю антиквариат`,
  `Куплю породистого кота`,
];

const SENTENCES = [
  `Товар в отличном состоянии.`,
  `Пользовались бережно и только по большим праздникам.`,
  `Продаю с болью в сердце...`,
  `Бонусом отдам все аксессуары.`,
  `Даю недельную гарантию.`,
  `Если товар не понравится — верну всё до последней копейки.`,
  `Это настоящая находка для коллекционера!`,
  `Если найдёте дешевле — сброшу цену.`,
  `Таких предложений больше нет!`,
  `При покупке с меня бесплатная доставка в черте города.`,
];

const CATEGORIES = [
  `Книги`,
  `Разное`,
  `Посуда`,
  `Игры`,
  `Животные`,
  `Журналы`,
];

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

const generateOffers = (count) => (
  Array(count).fill({}).map(() => ({
    category: generateCategory(CATEGORIES),
    description: generateDescription(SENTENCES),
    picture: generatePictureName(PictureRestrict.MIN, PictureRestrict.MAX),
    title: generateTitle(TITLES),
    type: generateType(OfferType),
    sum: generateSum(SumRestrict.MIN, SumRestrict.MAX),
  }))
);

module.exports = {
  name: `--generate`,
  run(args) {
    const [count] = args;
    let countOffer = Number.parseInt(count, 10) || Count.DEFAULT_COUNT;
    if (countOffer > Count.MAX_COUNT) {
      countOffer = Count.MAX_COUNT;
    }

    return Utils.writeJSONFile(FILE_NAME, JSON.stringify(generateOffers(countOffer)));
  }
};
