'use strict';

var winston = require('winston');

module.exports = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: 'info',
      pattern: /info\:/,
      formatter: function(params) {
        return undefined !== params.message ? params.message : '';
      }
    })
  ]
});
