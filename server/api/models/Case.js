/**
 * Case.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    adminName: {
      type: 'string',
      defaultsTo: ''
    },
    isActivate: {
      type: "boolean",
      defaultsTo: true
    },
    deceased: {
      collection: 'Deceased',
      via: 'owner'
    },
    customer: {
      collection: 'Customer',
      via: 'owner'
    },
    funeral: {
      collection: 'Funeral',
      via: 'owner'
    },
  },
};

