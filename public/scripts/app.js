'use strict';

console.log('App.js tá executando!');

// JSX - JavaScript XML
var template = React.createElement(
  'h1',
  null,
  'Indecis\xE3o App'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);