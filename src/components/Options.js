import React from 'react';
import Option from './Option';

export default class Options extends React.Component {
    render() {

        if (!this.props.values) {
            return '';
        }

        return (
            <div>
                <div className="widget-header">
                    <h3 className="widget-header__title">Suas opções</h3>
                    <button onClick={this.props.onRemoverOpcoes}
                        disabled={this.props.values.length == 0}
                        className="button button--link">
                        Remover todos
                    </button>
                </div>
                {this.props.values.length === 0 && (<p className="widget__message">Adicione um item, burrão!</p>)}
                {
                    this.props.values.map((valor, indice) => {
                        return <Option
                            key={valor}
                            value={valor}
                            contagem={indice + 1}
                            onRemoverOpcao={this.props.onRemoverOpcao} />;
                    })
                }
            </div>
        );
    };
}
