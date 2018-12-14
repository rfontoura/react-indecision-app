import React from 'react';
import Option from './Option';

export default class Options extends React.Component {
    render() {

        if (!this.props.values) {
            return '';
        }

        return (
            <div>
                <button onClick={this.props.onRemoverOpcoes}
                    disabled={this.props.values.length == 0}
                    className="button button--link">
                    Remover todos
                </button>
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
