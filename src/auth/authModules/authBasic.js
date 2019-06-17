'use strict';

/**
 * Auth Module
 * @module src/auth/authModule/authBasic
 */

const User = require('../users-model.js');
const _authenticate = require('./authenticate.js');
const _authError = require('./authError.js');


function _authBasic(str) {
  // str: am9objpqb2hubnk=
  let base64Buffer = Buffer.from(str, 'base64'); // <Buffer 01 02 ...>
  let bufferString = base64Buffer.toString();    // john:mysecret
  let [username, password] = bufferString.split(':'); // john='john'; mysecret='mysecret']
  let auth = {username, password}; // { username:'john', password:'mysecret' }

  return User.authenticateBasic(auth)
    .then(user => _authenticate(user))
    .catch(_authError);
}

/**
 * authBasic module export
 * @type {Object}
 */

module.exports = _authBasic;