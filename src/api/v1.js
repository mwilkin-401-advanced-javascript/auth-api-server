'use strict';

/**
 * API Router Module (V1)
 * Integrates with various models through a common Interface (.get(), .post(), .put(), .delete())
 * @module src/api/v1
 */

const cwd = process.cwd();

const express = require('express');

const modelFinder = require(`${cwd}/src/middleware/model-finder.js`);

const router = express.Router();

// Evaluate the model, dynamically
router.param('model', modelFinder);


// API Routes

/**
 * Get a list of records for model provided
 * @route GET /{model}
 * @param {string} model.path.required - Resource model name
 * @returns {Object} 500 - Server error
 * @returns {Object} 200 - { count: 2, results: [{}, {}]}
 */

/**
 * Creates a list of records for model provided
 * @route POST /{model}
 * @param {string} model.path.required - Resource model name
 * @returns {Object} 500 - Server error
 * @returns {Object} 200 - { count: 2, results: [{}, {}]}
 */

/**
 * Gets a list of records for model id provided
 * @route GET /{model}/{id}
 * @param {string} model.path.required - Resource model name
 * @param {number} id.path.required - Resource model name
 * @returns {Object} 500 - Server error
 * @returns {Object} 200 - { count: 2, results: [{}, {}]}
  */

/**
 * Modifies a list of records for model provided
 * @route GET /{model}/{id}
 * @param {string} model.path.required - Resource model name
 * @param {number} id.path.required - Resource model name
 * @consumes application/json application/xml
 * @returns {Object} 500 - Server error
 * @returns {Object} 200 - { count: 2, results: [{}, {}]}
  */
/**
 * Deletes records for model id provided
 * @route GET /{model}/{id}
 * @param {string} model.path.required - Resource model name
 * @param {number} id.path.required - Resource model name
 * @returns {Object} 500 - Server error
 * @returns {Object} 200 - { count: 2, results: [{}, {}]}
  */

router.get('/api/v1/:model', handleGetAll);
router.post('/api/v1/:model', handlePost);

router.get('/api/v1/:model/:id', handleGetOne);
router.put('/api/v1/:model/:id', handlePut);
router.delete('/api/v1/:model/:id', handleDelete);

router.get('/api/v1/doc');

// Route Handlers

/**
* @function handleGetAll
* @param {Object} request - request object
* @param {Object} response - response object
* @param {function} next - calls next middleware
* @desc Middleware that handle get all route call
*
* */

function handleGetAll(request,response,next) {
  request.model.get()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch( next );
}

/**
* @function handleGetOne
* @param {Object} request - request object
* @param {Object} response - response object
* @param {function} next - calls next middleware
* @desc Middleware that handles get one route call
 */

function handleGetOne(request,response,next) {
  request.model.get(request.params.id)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

/**
* @function handlePost
* @param {Object} request - request object
* @param {Object} response - response object
* @param {function} next - calls next middleware
* @desc Middleware that handles post route call
 */

function handlePost(request,response,next) {
  request.model.post(request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

/**
* @function handlePut
* @param {Object} request - request object
* @param {Object} response - response object
* @param {function} next - calls next middleware
* @desc Middleware that handles put route call
 */

function handlePut(request,response,next) {
  request.model.put(request.params.id, request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

/**
* @function handleDelete
* @param {Object} request - request object
* @param {Object} response - response object
* @param {function} next - calls next middleware
* @desc Middleware that handles delete route call
 */

function handleDelete(request,response,next) {
  request.model.delete(request.params.id)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

/**
 * Export object
 * @type {Object}
 */

module.exports = router;
