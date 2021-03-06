import React from 'react';

const Action = (props) => (
    <div>
        <button onClick={props.onExecutarAcao}
            disabled={!props.habilitar}
            className="big-button">
            O que devo fazer?
        </button>
    </div>
);

export default Action;
