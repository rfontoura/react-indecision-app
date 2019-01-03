import React from 'react';
import Modal from 'react-modal';

export default class OptionModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        Modal.setAppElement(document.getElementById('app'));
        return (
            <Modal
                isOpen={!!this.props.opcaoSelecionada}
                onRequestClose={this.props.onFecharJanela}
                closeTimeoutMS={200}
                className="modal"
            >
                <h3 className="modal__title">Opção Selecionada</h3>
                {this.props.opcaoSelecionada && <p className="modal__body">{this.props.opcaoSelecionada}</p>}
                <button className="button" onClick={this.props.onFecharJanela}>Okay</button>
            </Modal>
        );
    }
}
