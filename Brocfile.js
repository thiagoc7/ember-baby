/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/moment/min/moment.min.js');

module.exports = app.toTree();
