import React from 'react';
import Modal from 'react-modal';

export default class OptionModal extends React.Component {
    constructor(props) {
        super(props);
        Modal.setAppElement(document.getElementById('app'));
    }

    render(props) {
        return (
            <Modal
                isOpen={!!this.props.opcaoSelecionada}
                onRequestClose={this.props.onFecharJanela}
                contentLabel={'Título do Modal'}
            >
                <h1>ÉOQ??</h1>
                {this.props.opcaoSelecionada && <p>{this.props.opcaoSelecionada}</p>}
                <button onClick={this.props.onFecharJanela}>Belezz</button>
            </Modal>
        );
    }
}