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
var template2 = (
    <div>
        <h1>{app.title}</h1>
        <p>App, what for is it?: {app.subtitle}</p>
        <p>Tags: {app.tags[0]}, {app.tags[1]}, {app.tags[2]}</p>
    </div>
);

var domElement = document.getElementById('app');
ReactDOM.render(template2, domElement);