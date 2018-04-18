'use strict';

console.log('App.js tá executando!');

var app = {
    title: 'Minha Grandissíssima Aplicação',
    subtitle: 'Como fazer uma aplicação Hello World',
    options: ['Um', 'Dois', 'Três', 'Quatro']
};

function getOptions(optionsArray) {
    var itens = [];
    for (var opcao in optionsArray) {
        itens.push(React.createElement(
            'li',
            null,
            optionsArray[opcao]
        ));
    }

    return React.createElement(
        'ul',
        null,
        itens
    );
}

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'h2',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        !app.options || app.options.length === 0 ? 'No options' : 'Here are your options:'
    ),
    app.options.length > 0 && getOptions(app.options)
);

var count = 5;
var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { id: 'meu-id', className: 'button' },
        '+1'
    )
);

var domElement = document.getElementById('app');
ReactDOM.render(template2, domElement);