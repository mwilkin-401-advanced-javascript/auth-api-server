'use strict';

/**
 * Auth Module
 * @module src/auth/authModule/authBearer
 */

const User = require('../users-model.js');
const _authenticate = require('./authenticate.js');
const _authError = require('./authError.js');


function _authBearer(authString) {
  return User.authenticateToken(authString)
    .then(user => _authenticate(user))
    .catch(_authError);
}

/**
 * authBearer module export
 * @type {Object}
 */

module.exports = _authBearer;