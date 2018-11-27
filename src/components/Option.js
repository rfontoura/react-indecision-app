import React from 'react';

export default class Option extends React.Component {
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