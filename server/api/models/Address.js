/**
 * Address.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    line1: {
      type: "string"
    },
    city: {
      type: "string"
    },
    postcode: {
      type: "integer"
    },
    country: {
      type: "string"
    },
    owner: {
      model: 'deceased',
      unique: true
    }
  }
};

