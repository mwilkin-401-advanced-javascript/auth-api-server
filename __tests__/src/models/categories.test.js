'use strict';

const rootDir = process.cwd();
const categories = require(`${rootDir}/src/models/categories/categories-model.js`);

const supergoose = require('../supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Categories Model', () => {
  it('can post() a new category', () => {
    let object = {name: 'Bunnies'};
    return categories.post(object)
      .then(record => {
        Object.keys(object).forEach(key =>{
          expect(record[key]).toEqual(object[key]);
        });
      });
  });

  it('can get() a category', () => {
    let object = {name: 'Bunnies'};
    return categories.post(object)
      .then(record => {
        return categories.get(record._id)
          .then(cat => {
            Object.keys(object).forEach(key =>{
              expect(cat[0][key]).toEqual(object[key]);
            });
          });
      });
  });
  
});