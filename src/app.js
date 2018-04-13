console.log('App.js tá executando!');

const user = {
    /*name: 'Chaves do Oito',*/
    age: 18,
    location: 'Vila, México'
};

const app = {
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
    const itens = [];
    for (let opcao in optionsArray) {
        itens.push(<li>{optionsArray[opcao]}</li>);
    }

    return <ul>{itens}</ul>;
}

// JSX - JavaScript XML
const template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anônimo'}</h1>
        {user.age >= 18 && <p>Idade: {user.age} anos</p>}
        {getLocation(user.location)}
    </div>
);

const template3 = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <h2>{app.subtitle}</h2>}
        <p>{!app.options || app.options.length === 0 ? 'No options' : 'Here are your options:'}</p>
        {app.options.length > 0 && getOptions(app.options)}
    </div>
);

const domElement = document.getElementById('app');
ReactDOM.render(template3, domElement);