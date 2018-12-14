import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }

    adicionar = (e) => {
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
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.adicionar}>
                    <input type="text" name="opcao" />
                    <button className="button">Adicionar opção</button>
                </form>
            </div>
        );
    }
}