import React from 'react';

export default class Action extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onExecutarAcao}
                    disabled={!this.props.habilitar}>
                    O que devo fazer?
                </button>
            </div>
        );
    }
}
