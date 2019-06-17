'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

/**
* @module src/models/players/players-schema
 */

/**
* @typeof players-model
* @property {schema} - model schema from child Class
 */

const players = mongoose.Schema({
  name: { type:String, required:true },
  position: { type:String, required:true, uppercase:true, enum:['P','C','1B','2B','3B','SS','LF','RF','CF'] },
  throws: { type:String, required:true, uppercase:true, enum:['R','L'] },
  bats: { type:String, required:true, uppercase:true, enum:['R','L'] },
  team: {type:String, required:true},
});

/**
* Export object
* @type {Object}
 */

module.exports = mongoose.model('players', players);
