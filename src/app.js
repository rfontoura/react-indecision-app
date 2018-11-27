import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption';
import Options from './components/Options';
import Action from './components/Action';
import Header from './components/Header';

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
        if (str == null) {
            return;
        }
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
                <Options values={this.state.opcoes}
                    onRemoverOpcoes={this.removerOpcoes}
                    onRemoverOpcao={this.removerOpcao} />
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));