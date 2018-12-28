import React from 'react';

export default class Option extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        // console.log('componentWillUnmount()');
    }

    render() {
        const label = "Remover elemento \"" + this.props.value + "\"";
        const estilo = { cursor: 'pointer' };

        return (<div className="option">
            <p className="option__text">{this.props.contagem}. {this.props.value}</p>
            <button 
                className="button button--link"
                onClick={(e) => { this.props.onRemoverOpcao(this.props.value) }}>
                Remover
            </button>
        </div>);
    }
}