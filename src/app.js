console.log('App.js tá executando!');

const app = {
    title: 'Minha Grandissíssima Aplicação',
    subtitle: 'Como fazer uma aplicação Hello World',
    options: []
};

function getOptions(optionsArray) {
    const itens = [];
    for (let opcao in optionsArray) {
        itens.push(<li>{optionsArray[opcao]}</li>);
    }

    return <ul>{itens}</ul>;
}

const onSubmitForm = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplate();
    }
};

const removeAll = () => {
    app.options = [];
    renderTemplate();
}

const domElement = document.getElementById('app');

// {app.options.length > 0 && getOptions(app.options)}

const renderTemplate = () => {
    // JSX - JavaScript XML
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <h2>{app.subtitle}</h2>}
            <p>{!app.options || app.options.length === 0 ? 'No options' : 'Here are your options:'}</p>
            {app.options.length > 0 && getOptions(app.options)}

            <form onSubmit={onSubmitForm}>
                <input type="text" name="option" />
                <button>Add Option</button>
                <button onClick={removeAll}>Remove All</button>
            </form>
        </div>
    );
    ReactDOM.render(template, domElement);
}
renderTemplate();