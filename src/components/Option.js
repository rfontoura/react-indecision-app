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

        return (<li key>{this.props.value}&nbsp;
            <button 
                className="button button--link"
                onClick={(e) => { this.props.onRemoverOpcao(this.props.value) }}>
                Remover
            </button>
        </li>);
    }
}