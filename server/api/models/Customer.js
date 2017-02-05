/**
 * Customer.js
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
    email: {
      type: 'email',
      unique: true
    },
    phone: {
      type: 'string',
    },
    contactWay: {
      type: 'string',
      enum: ['tel', 'phone', 'post'],
    },
    timeToCall: {
      type: 'datetime',
    },
    owner: {
      model: 'case',
      unique: true
    }
  }
};

