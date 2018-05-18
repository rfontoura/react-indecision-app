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

    executarAcao() {
        alert('O que devo fazer?');
    }

    render() {
        return (
            <div>
                <button onClick={this.executarAcao}>O que devo fazer?</button>
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
    constructor(props) {
        super(props);
        this.removerOpcoes = this.removerOpcoes.bind(this); // mantém referência do método 'removerOpcoes() para o this'
    }
    
    removerOpcoes() {
        console.log(this.props);
    }

    render() {

        let opcoes;
        if (!this.props.values) {
            return '';
        }

        return (
            <div>
                <button onClick={this.removerOpcoes}>Remover todos</button>
                <ol>
                    {
                        this.props.values.map((valor, indice) => {
                            return <Option key={indice} value={valor} />;
                        })
                    }
                </ol>
            </div>
        );
    };
}

class AddOption extends React.Component {
    onSubmitForm(e) {
        e.preventDefault();

        const opcao = e.target.elements.opcao.value.trim();
        if (opcao) {
            alert(opcao);
        }
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <input type="text" name="opcao" />
                <button>Adicionar opção</button>
            </form>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));