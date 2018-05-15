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

const whatToDo = () => {
    const optionIndex = Math.floor(Math.random() * app.options.length);
    const option = app.options[optionIndex];
    alert(option);
};

const renderTemplate = () => {
    // JSX - JavaScript XML
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <h2>{app.subtitle}</h2>}
            <p>{!app.options || app.options.length === 0 ? 'No options' : 'Here are your options:'}</p>
            {getOptionsList()}

            <button onClick={removeAll}>Remove All</button>
            <button disabled={app.options.length === 0} onClick={whatToDo}>What should I do?</button>
            <form onSubmit={onSubmitForm}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, domElement);
}
renderTemplate();