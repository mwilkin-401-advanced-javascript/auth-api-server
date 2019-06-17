'use strict';

/**
 * @module scr/middleware/500
 */

/**
 * @param {Object} request - request object
 * @param {Object} response - response object
 * @desc server error handler
 * Export object
 * @type {Object}
 */

module.exports = (err, req, res, next) => {
  let error = { error: err };
  res.status(500).json(error).end();
};
