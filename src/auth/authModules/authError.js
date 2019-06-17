'use strict';

/**
  * Auth Module
  * @module src/auth/authModule/authError
  */

/**
  * @desc Handles all auth errors
  */


function _authError() {
  return (req, res, next) => {
    next('Invalid User ID/Password');

  };
}

/**
  * authError module export
  * @type {Object}
  */

module.exports = _authError;