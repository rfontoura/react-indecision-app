let detalheVisivel = false;

const exibirOuOcultarDetalhes = () => {
    detalheVisivel = !detalheVisivel;
    render();
};

const domElement = document.getElementById('app');

const render = () => {
    let conteudo;

    const template = (
        <div>
            <h1>Brincando com Visibilidade</h1>
            <div>
                <button onClick={exibirOuOcultarDetalhes}>
                    {detalheVisivel ? 'Ocultar Detalhes' : 'Exibir Detalhes'}
                </button>
                {detalheVisivel && (<p>Detalhes sendo exibidos...</p>)}
            </div>
        </div>
    );

    ReactDOM.render(template, domElement);
};

render();
