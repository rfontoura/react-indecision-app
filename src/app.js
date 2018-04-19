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
const addOne = () => {
    console.log("addOne");
};

function minusOne() {
    console.log("minusOne");
    count = count -1;
}

const template2 = (
    <div>
        <h1>Count: {count}</h1>
        <button id="meu-id" className="button" onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button type="reset" onClick={() => console.log("reset")}>Reset</button>
    </div>
);

const domElement = document.getElementById('app');
ReactDOM.render(template2, domElement);