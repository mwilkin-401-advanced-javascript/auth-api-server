'use strict';

/**
 * @module src/middleware/model-finder
 */

/**
  * @param {Object} req - request object
  * @param {Object} res - response object
  * @param {function} next - calls next middleware
  * @desc Middleware that gets modelnames for pathing
  */

module.exports = (req,res,next) => {
  let modelName = req.params.model.replace(/[^a-z0-9-_]/gi, '');
  req.model = require(`../models/${modelName}/${modelName}-model.js`);
  next();
};
