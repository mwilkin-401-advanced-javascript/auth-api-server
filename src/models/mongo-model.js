'use strict';

/**
* @module src/models/mongo-model
 */

/**
* @Class Mongo Model
* @desc Mongo model for get, post, put, and delete requests
 */


class Model {

  /**
  * @method constructor
  * @param {players} schema - schema from players
  * @param {teams} schema - schema from teams
   */

  constructor(schema) {
    this.schema = schema;
  }

  /**
  * @method get
  * @param {string} _id - Id for specific players
  * @desc Get on or all items from database
  */

  get(_id) {
    let queryObject = _id ? {_id} : {};
    return this.schema.find(queryObject);
  }

  /**
  * @method post
  * @param {string} record - information about what should be added
  * @desc Add an item to the database
  */

  post(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  /**
  * @method put
  * @param {string} _id - Id for specific entry
  * @param {string} record - information about what should be added or updated
  * @desc Modify one item in the database
  */

  put(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, {new:true});
  }

  /**
  * @method delete
  * @param {string} _id - Id for specific entry that should be deleted
  * @desc Delete an item from the database
  */
  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }

}

/**
* Export object
* @type {Object}
 */

module.exports = Model;
