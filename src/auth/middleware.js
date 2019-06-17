'use strict';

/**
* Auth Middleware Module
* @module src/auth/middleware
*
 */

const User = require('./users-model.js');


module.exports = (capability) => {
  
  return (req, res, next) => {

    const _authBasic = require('./authModules/authBasic.js'); 
    const _authBearer = require('./authModules/authBearer.js');
    const _authError = require('./authModules/authError.js');

    try {
      let [authType, authString] = req.headers.authorization.split(/\s+/);

      switch (authType.toLowerCase()) {
      case 'basic':
        return _authBasic(authString);
      case 'bearer':
        return _authBearer(authString);
      default:
        return _authError();
      }
    } catch (e) {
      _authError();
    }


    // function _authBasic(str) {
    // // str: am9objpqb2hubnk=
    //   let base64Buffer = Buffer.from(str, 'base64'); // <Buffer 01 02 ...>
    //   let bufferString = base64Buffer.toString();    // john:mysecret
    //   let [username, password] = bufferString.split(':'); // john='john'; mysecret='mysecret']
    //   let auth = {username, password}; // { username:'john', password:'mysecret' }

    //   return User.authenticateBasic(auth)
    //     .then(user => _authenticate(user))
    //     .catch(_authError);
    // }

    // function _authBearer(authString) {
    //   return User.authenticateToken(authString)
    //     .then(user => _authenticate(user))
    //     .catch(_authError);
    // }

    // // way to secure route if they are a user and don't have a capability assigned
    // function _authenticate(user) {
    //   if ( user && (!capability || (user.can(capability))) ) {
    //     req.user = user;
    //     req.token = user.generateToken();
    //     next();
    //   }
    //   else {
    //     _authError();
    //   }
    // }

    // function _authError() {
    //   next('Invalid User ID/Password');
    // }

  };
  
};