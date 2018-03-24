'use strict';

console.log('App.js tá executando!');

var user = {
    name: 'Rafaelo',
    age: 135,
    location: 'GYN'
};

var app = {
    title: 'Minha Grandissíssima Aplicação',
    subtitle: 'Como fazer uma aplicação Hello World perfeita',
    tags: ['shit', 'simple', 'mastering']
};

// JSX - JavaScript XML
var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        'App, what for is it?: ',
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        'Tags: ',
        app.tags[0],
        ', ',
        app.tags[1],
        ', ',
        app.tags[2]
    )
);

var domElement = document.getElementById('app');
ReactDOM.render(template2, domElement);