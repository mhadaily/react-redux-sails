/**
 * Funeral.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    type:{
      type: 'string',
      enum: ['Sea', 'Tree', 'Cremation', 'Burial'],
    },
    owner: {
      model: 'case',
      unique: true
    }
  }
};

