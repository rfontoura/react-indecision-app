class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
            <h1>Aplicação da Decisão</h1>
            <h2>Colocando sua vida nas mãos de um computador</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>O que devo fazer?</button>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return <li></li>;
    }
}

class Options extends React.Component {
    render() {
        return (
            <ol>
                <Option />
                <Option />
            </ol>
        );
    };
}

class AddOption extends React.Component {
    adicionarOpcao() {
        console.log('blsah');
    }

    render() {
        return <button onClick={this.adicionarOpcao}>Adicionar opção</button>;
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));