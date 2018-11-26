class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.executarAcao = this.executarAcao.bind(this);
        this.removerOpcao = this.removerOpcao.bind(this);
        this.removerOpcoes = this.removerOpcoes.bind(this);
        this.onAdicionarOpcao = this.onAdicionarOpcao.bind(this);
        this.state = {
            opcoes: []
        };
    }

    componentDidMount() {
        const str = localStorage.getItem('opcoes');
        const json = JSON.parse(str);
        this.setState(() => ({ opcoes: json }));
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.opcoes != this.state.opcoes) {
            console.log('componentDidMount');
            const json = JSON.stringify(this.state.opcoes);
            localStorage.setItem('opcoes', json);
        }
    }

    render() {
        const titulo = 'Indecisão';
        const subtitulo = 'Coloque sua vida nas mãos de um computador';

        return (
            <div>
                <Header title={titulo} subtitle={subtitulo} />
                <Action onExecutarAcao={this.executarAcao} habilitar={this.state.opcoes.length > 0} />
                <Options values={this.state.opcoes} onRemoverOpcoes={this.removerOpcoes} onRemoverOpcao={this.removerOpcao} />
                <AddOption onAdicionarOpcao={this.onAdicionarOpcao} />
            </div>
        );
    }

    executarAcao() {
        const indice = Math.floor(Math.random() * this.state.opcoes.length);
        const opcao = this.state.opcoes[indice];
    }

    onAdicionarOpcao(opcao) {
        if (!opcao) {
            return 'Digite algum valor, burro!';
        } else if (this.state.opcoes.indexOf(opcao) >= 0) {
            return 'Este valor já está na lista, jumento!'
        }

        this.setState((estadoAtual) => ({ opcoes: estadoAtual.opcoes.concat([opcao]) }));
    }

    removerOpcoes() {
        this.setState(() => ({ opcoes: [] }));
    }

    removerOpcao(opcaoARemover) {
        const msg = "Confirma a remoção da opção \"" + opcaoARemover + "\"?";

        if (confirm(msg)) {
            this.setState((estado) => {
                return {
                    opcoes: estado.opcoes.filter((opcao) => {
                        return opcao !== opcaoARemover;
                    })
                };
            });
        }
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
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount()');
    }

    render() {
        const label = "Remover elemento \"" + this.props.value + "\"";
        const estilo = { cursor: 'pointer' };

        return (<li key>{this.props.value}&nbsp;
            <a onClick={(e) => { this.props.onRemoverOpcao(this.props.value) }}>
                <img src="https://image.flaticon.com/icons/png/128/70/70388.png"
                    srcSet="https://image.flaticon.com/icons/png/512/70/70388.png 4x"
                    alt={label}
                    title={label}
                    width="16"
                    height="16"
                    style={estilo}
                    href="#" />
            </a>
        </li>);
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
                {this.props.values.length === 0 && (<p>Adicione um item, burrão!</p>)}
                <ol>
                    {
                        this.props.values.map((valor, indice) => {
                            return <Option key={indice} value={valor} onRemoverOpcao={this.props.onRemoverOpcao} />;
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
