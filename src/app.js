class IndecisionApp extends React.Component {
    render() {

        const titulo = 'Indecisão';
        const subtitulo = 'Coloque sua vida nas mãos de um computador';
        const opcoes = ['Opção 1', 'Opção dois', 'Opção IV'];

        return (
            <div>
                <Header title={titulo} subtitle={subtitulo} />
                <Action />
                <Options values={opcoes}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
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
        return <li key>{this.props.value}</li>;
    }
}

class Options extends React.Component {
    render() {

        let opcoes;
        if (!this.props.values) {
            return '';
        }

        return (
            <ol>
                {
                    this.props.values.map((valor, indice) => {
                        return <Option key={indice} value={valor} />;
                    })
                }
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