'use strict';

/**
* @module scr/middleware/404
 */

/**
* @param {Object} request - request object
* @param {Object} response - response object
* @desc resource error handler
* Export object
* @type {Object}
 */

module.exports = (req,res,next) => {
  let error = { error: 'Resource Not Found' };
  res.status(404).json(error).end();
};
