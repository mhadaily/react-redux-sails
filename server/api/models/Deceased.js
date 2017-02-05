/**
 * Deceased.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
    },
    sureName: {
      type: 'string',
    },
    address: {
      collection: 'Address',
      via: 'owner'
    },
    dob: {
      type: 'datetime',
    },
    martialStatus: {
      type: 'string',
      enum: ['single', 'married', 'divorced'],
    },
    owner: {
      model: 'case',
      unique: true
    }
  }
};

