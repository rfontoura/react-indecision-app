'use strict';

console.log('App.js tá executando!');

var user = {
    /*name: 'Chaves do Oito',*/
    age: 18,
    location: 'Vila, México'
};

var app = {
    title: 'Minha Grandissíssima Aplicação',
    subtitle: 'Como fazer uma aplicação Hello World',
    options: ['Um', 'Dois', 'Três', 'Quatro']
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Localiza\xE7\xE3o: ',
            location
        );
    }

    return undefined;
}

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
var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anônimo'
    ),
    user.age >= 18 && React.createElement(
        'p',
        null,
        'Idade: ',
        user.age,
        ' anos'
    ),
    getLocation(user.location)
);

var template3 = React.createElement(
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

var domElement = document.getElementById('app');
ReactDOM.render(template3, domElement);