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
        return <p>Localização: {location}</p>
    }

    return undefined;
}

function getOptions(optionsArray) {
    var itens = [];
    for (var opcao in optionsArray) {
        itens.push(<li>{optionsArray[opcao]}</li>);
    }

    return <ul>{itens}</ul>;
}

// JSX - JavaScript XML
var template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anônimo'}</h1>
        {user.age >= 18 && <p>Idade: {user.age} anos</p>}
        {getLocation(user.location)}
    </div>
);

var template3 = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <h2>{app.subtitle}</h2>}
        <p>{!app.options || app.options.length === 0 ? 'No options' : 'Here are your options:'}</p>
        {app.options.length > 0 && getOptions(app.options)}
    </div>
);

var domElement = document.getElementById('app');
ReactDOM.render(template3, domElement);