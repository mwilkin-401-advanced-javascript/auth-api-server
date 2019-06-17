'use strict';

const uuid = require('uuid/v4');

/**
* @module src/models/memory-model
 */

/**
 * @Class Memory Model
 * @desc memory model for count, get, post, delete and put requests
  */

class Model {
  
  /**
  * @method constructor
  * @param {categories} schema - schema from categories
   */

  constructor(schema) {
    this.schema = schema;
    this.database = [];
  }

  /**
  * @method sanitize
  * @param {object} entry - Entry to be sanitized
  * @desc Sanitize entry
   */

  sanitize(entry) {

    let valid = true;
    let record = {};

    Object.keys(this.schema).forEach( field => {
      if ( this.schema[field].required ) {
        if (entry[field]) {
          record[field] = entry[field];
        } else {
          valid = false;
        }
      }
      else {
        record[field] = entry[field];
      }
    });
    
    return valid ? record : undefined;
  }
  
  /**
  * @method count
  * @desc Keep count of how many entries in the database
   */

  count() {
    return this.database.length;
  }

  /**
  * @method get
  * @param {string} id - Id for specific entries
  * @desc Keep count of how many entries in the database
   */

  get(id) {
    const records = id ? this.database.filter( (record) => record._id === id ) : this.database;
    return Promise.resolve(records);
  }

  /**
  * @method post
  * @param {string} entry - information about what should be added
  * @desc Add a entry to the database
   */

  post(entry) {
    entry._id = uuid();
    let record = this.sanitize(entry);
    if ( record._id ) { this.database.push(record); }
    return Promise.resolve(record);
  }

  /**
  * @method delete
  * @param {string} id - Id for specific entries
  * @desc Delete a particular entry from the database
   */

  delete(id) {
    this.database = this.database.filter((record) => record._id !== id );
    return this.get(id);
  }

  /**
  * @method put
  * @param {string} id - Id for specific entries
  * @param {string} entry - Information that should be added or changed
  * @desc Modify one entry in the database
   */

  put(id, entry) {
    let record = this.sanitize(entry);
    if( record._id ) { this.database = this.database.map((item) => (item._id === id) ? record : item  ); }
    return this.get(id);
  }

}

/**
* Export object
* @type {Object}
 */

module.exports = Model;