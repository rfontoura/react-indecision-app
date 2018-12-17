import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        opcoes: [],
        opcaoSelecionada: undefined
    };

    componentDidMount = () => {
        const str = localStorage.getItem('opcoes');
        if (str == null) {
            return;
        }
        const json = JSON.parse(str);
        this.setState(() => ({ opcoes: json }));
    };

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.opcoes != this.state.opcoes) {
            const json = JSON.stringify(this.state.opcoes);
            localStorage.setItem('opcoes', json);
        }
    };

    executarAcao = () => {
        const indice = Math.floor(Math.random() * this.state.opcoes.length);
        const opcao = this.state.opcoes[indice];
        this.setState({ opcaoSelecionada: opcao });
    };

    onFecharJanela = () => {
        this.setState({ opcaoSelecionada: undefined });
    };

    onAdicionarOpcao = (opcao) => {
        if (!opcao) {
            return 'Digite algum valor, burro!';
        } else if (this.state.opcoes.indexOf(opcao) >= 0) {
            return 'Este valor já está na lista, jumento!'
        }

        this.setState((estadoAtual) => ({ opcoes: estadoAtual.opcoes.concat([opcao]) }));
    };

    removerOpcoes = () => {
        this.setState(() => ({ opcoes: [] }));
    };

    removerOpcao = (opcaoARemover) => {
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

    render() {
        const titulo = 'Indecisão';
        const subtitulo = 'Coloque sua vida nas mãos de um computador';

        return (
            <div>
                <Header title={titulo} subtitle={subtitulo} />
                <div className="container">
                    <Action onExecutarAcao={this.executarAcao} habilitar={this.state.opcoes.length > 0} />
                    <div className="widget">
                        <Options values={this.state.opcoes}
                            onRemoverOpcoes={this.removerOpcoes}
                            onRemoverOpcao={this.removerOpcao} />
                        <AddOption onAdicionarOpcao={this.onAdicionarOpcao} />
                    </div>
                </div>
                <OptionModal opcaoSelecionada={this.state.opcaoSelecionada}
                    onFecharJanela={this.onFecharJanela} />
            </div>
        );
    }
}
