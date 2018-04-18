console.log('App.js tá executando!');

const app = {
    title: 'Minha Grandissíssima Aplicação',
    subtitle: 'Como fazer uma aplicação Hello World',
    options: ['Um', 'Dois', 'Três', 'Quatro']
};

function getOptions(optionsArray) {
    const itens = [];
    for (let opcao in optionsArray) {
        itens.push(<li>{optionsArray[opcao]}</li>);
    }

    return <ul>{itens}</ul>;
}

// JSX - JavaScript XML
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <h2>{app.subtitle}</h2>}
        <p>{!app.options || app.options.length === 0 ? 'No options' : 'Here are your options:'}</p>
        {app.options.length > 0 && getOptions(app.options)}
    </div>
);

let count = 5;
const template2 = (
    <div>
        <h1>Count: {count}</h1>
        <button id="meu-id" className="button">+1</button>
    </div>
);

const domElement = document.getElementById('app');
ReactDOM.render(template2, domElement);