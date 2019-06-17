'use strict';

/**
 * @module src/models/teams/teams-model
 */

const Model = require('../mongo-model.js');
const schema = require('./teams-schema.js');

/**
 * @module src/models/teams/teams-model
 */

class Teams extends Model {}

/**
 * Export object
 * @type {Object}
 */

module.exports = new Teams(schema);

