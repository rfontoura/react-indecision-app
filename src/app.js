console.log('App.js tá executando!');

var user = {
    name: 'Chaves do Oito',
    age: 12,
    location: 'Vila, México'
};

var app = {
    title: 'Minha Grandissíssima Aplicaçãoadsf',
    subtitle: 'Como fazer uma aplicação Hello World perfeita',
    tags: ['shit', 'simpled', 'mastering']
};

function getLocation(location) {
    return location ? location : '(desconhecida)';
}

// JSX - JavaScript XML
var template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Idade: {user.age} anos</p>
        <p>Localização: {getLocation(user.location)}</p>
    </div>
);

var domElement = document.getElementById('app');
ReactDOM.render(template2, domElement);