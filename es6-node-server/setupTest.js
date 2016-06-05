require('babel-polyfill')
require('./src/server.js')
global.fetch = require('isomorphic-fetch')