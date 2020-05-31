'use strict';

require('dotenv').config();

const {
  DB_USER,
  DB_PASS,
  MONGODB_URI,
} = process.env;

module.exports = {
  url: `${MONGODB_URI}?retryWrites=true`,
};
