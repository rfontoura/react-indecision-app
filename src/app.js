class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.executarAcao = this.executarAcao.bind(this);
        this.removerOpcoes = this.removerOpcoes.bind(this);
        this.onAdicionarOpcao = this.onAdicionarOpcao.bind(this);
        this.state = {
            opcoes: ['Opção 1', 'Opção dois', 'Opção IV']
        };
    }

    render() {
        const titulo = 'Indecisão';
        const subtitulo = 'Coloque sua vida nas mãos de um computador';

        return (
            <div>
                <Header title={titulo} subtitle={subtitulo} />
                <Action onExecutarAcao={this.executarAcao} habilitar={this.state.opcoes.length > 0} />
                <Options values={this.state.opcoes} onRemoverOpcoes={this.removerOpcoes} />
                <AddOption onAdicionarOpcao={this.onAdicionarOpcao} />
            </div>
        );
    }

    executarAcao() {
        const indice = Math.floor(Math.random() * this.state.opcoes.length);
        const opcao = this.state.opcoes[indice];
        alert(opcao);
    }

    onAdicionarOpcao(opcao) {
        if (!opcao) {
            return 'Digite algum valor, burro!';
        } else if (this.state.opcoes.indexOf(opcao) >= 0) {
            return 'Este valor já está na lista, jumento!'
        }

        // this.setState((estadoAtual) => {
        //     return {
        //         opcoes: estadoAtual.opcoes.concat([opcao])
        //     };
        // });

        this.setState((estadoAtual) => ({opcoes: estadoAtual.opcoes.concat([opcao])}));
    }

    removerOpcoes() {
        // this.setState(() => {
        //     return {
        //         opcoes: []
        //     };
        // });

        this.setState(() => ({opcoes: []}));
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

class Action extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onExecutarAcao} disabled={!this.props.habilitar}>O que devo fazer?</button>
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

        if (!this.props.values) {
            return '';
        }

        return (
            <div>
                <button onClick={this.props.onRemoverOpcoes}>Remover todos</button>
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
    constructor(props) {
        super(props);
        this.adicionar = this.adicionar.bind(this);
        this.state = {
            error: undefined
        };
    }

    adicionar(e) {
        e.preventDefault();
        const elementoOpcao = e.target.elements.opcao;
        const opcao = elementoOpcao.value.trim();
        const erro = this.props.onAdicionarOpcao(opcao);
        this.setState(() => {
            return {
                error: erro
            };
        });

        elementoOpcao.value = '';
        elementoOpcao.focus();
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.adicionar}>
                    <input type="text" name="opcao" />
                    <button>Adicionar opção</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
