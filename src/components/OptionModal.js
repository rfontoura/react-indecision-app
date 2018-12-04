import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.opcaoSelecionada}
        onRequestClose={props.onFecharJanela}
        contentLabel={'Título do Modal'}
    >
        <h1>ÉOQ??</h1>
        {props.opcaoSelecionada && <p>{props.opcaoSelecionada}</p>}
        <button onClick={props.onFecharJanela}>Belezz</button>
    </Modal>
);

export default OptionModal;
