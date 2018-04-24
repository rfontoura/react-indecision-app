console.log('App.js tá executando!');

const app = {
    title: 'Minha Grandissíssima Aplicação',
    subtitle: 'Como fazer uma aplicação Hello World',
    options: []
};

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

function getOptionsList() {
    if (app.options.length > 0) {
        const optionsLi = app.options.map((numero, indice) => {
            return <li key={indice}>{numero}</li>;
        });
        return <ol>{optionsLi}</ol>;
    }

    return '';
}

// {app.options.length > 0 && getOptions(app.options)}

const renderTemplate = () => {
    // JSX - JavaScript XML
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <h2>{app.subtitle}</h2>}
            <p>{!app.options || app.options.length === 0 ? 'No options' : 'Here are your options:'}</p>
            {getOptionsList()}

            <p><button onClick={removeAll}>Remove All</button></p>            
            <form onSubmit={onSubmitForm}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, domElement);
}
renderTemplate();