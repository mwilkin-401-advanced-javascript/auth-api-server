'use strict';

/**
* roles-model
* @module src/auth/roles-model
*
 */

const mongoose = require('mongoose');

const rolesSchema = new mongoose.Schema({
  role: {type: String, required:true},
  capabilities: {type: Array, required:true},
});

/**
 * Export object with roles-schema
 * @type {Object}
 */

module.exports = mongoose.model('roles', rolesSchema);
