/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  sassOptions: {
    includePaths: [
      'bower_components/materialize/sass'
    ]
  }
});

app.import('bower_components/moment/min/moment.min.js');

app.import('bower_components/materialize/font/roboto/Roboto-Thin.woff2', { destDir: 'font/roboto' });
app.import('bower_components/materialize/font/roboto/Roboto-Thin.woff', { destDir: 'font/roboto' });
app.import('bower_components/materialize/font/roboto/Roboto-Thin.ttf', { destDir: 'font/roboto' });

app.import('bower_components/materialize/font/roboto/Roboto-Light.woff2', { destDir: 'font/roboto' });
app.import('bower_components/materialize/font/roboto/Roboto-Light.woff', { destDir: 'font/roboto' });
app.import('bower_components/materialize/font/roboto/Roboto-Light.ttf', { destDir: 'font/roboto' });

app.import('bower_components/materialize/font/roboto/Roboto-Regular.woff2', { destDir: 'font/roboto' });
app.import('bower_components/materialize/font/roboto/Roboto-Regular.woff', { destDir: 'font/roboto' });
app.import('bower_components/materialize/font/roboto/Roboto-Regular.ttf', { destDir: 'font/roboto' });

app.import('bower_components/materialize/font/roboto/Roboto-Medium.woff2', { destDir: 'font/roboto' });
app.import('bower_components/materialize/font/roboto/Roboto-Medium.woff', { destDir: 'font/roboto' });
app.import('bower_components/materialize/font/roboto/Roboto-Medium.ttf', { destDir: 'font/roboto' });

app.import('bower_components/materialize/font/roboto/Roboto-Bold.woff2', { destDir: 'font/roboto' });
app.import('bower_components/materialize/font/roboto/Roboto-Bold.woff', { destDir: 'font/roboto' });
app.import('bower_components/materialize/font/roboto/Roboto-Bold.ttf', { destDir: 'font/roboto' });

app.import('bower_components/materialize/font/material-design-icons/Material-Design-Icons.eot', { destDir: 'font/material-design-icons' });
app.import('bower_components/materialize/font/material-design-icons/Material-Design-Icons.ttf', { destDir: 'font/material-design-icons' });
app.import('bower_components/materialize/font/material-design-icons/Material-Design-Icons.svg', { destDir: 'font/material-design-icons' });
app.import('bower_components/materialize/font/material-design-icons/Material-Design-Icons.woff', { destDir: 'font/material-design-icons' });
app.import('bower_components/materialize/font/material-design-icons/Material-Design-Icons.woff2', { destDir: 'font/material-design-icons' });

app.import('bower_components/materialize/dist/js/materialize.js');

module.exports = app.toTree();
