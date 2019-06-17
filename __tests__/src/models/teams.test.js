'use strict';

const rootDir = process.cwd();
const teams = require(`${rootDir}/src/models/teams/teams-model.js`);

const supergoose = require('../supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Teams Model', () => {

  it('can post() a new player', () => {
    let object = {name: 'Ortiz'};
    return teams.post(object)
      .then(record => {
        Object.keys(object).forEach(key => {
          expect(record[key]).toEqual(object[key]);
        });
      });
  });

  it('can get() a player', () => {
    let object = {name: 'Pedro'};
    return teams.post(object)
      .then(record => {
        return teams.get(record._id)
          .then(team => {
            Object.keys(object).forEach(key => {
              expect(team[0][key]).toEqual(object[key]);
            });
          });
      });
  });

});