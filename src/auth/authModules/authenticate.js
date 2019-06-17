'use strict';

/**
 * Authenticate Module
 * @module src/auth/authModule/authenticate
 */

const _authError = require('./authError.js');

// way to secure route if they are a user and don't have a capability assigned
function _authenticate(user, capability) {
  return (req, res, next) => {
    if ( user && (!capability || (user.can(capability))) ) {
      req.user = user;
      req.token = user.generateToken();
      next();
    } else {
      _authError();
    }
  };
}


/**
 * authenticate module export
 * @type {Object}
 */

module.exports = _authenticate;