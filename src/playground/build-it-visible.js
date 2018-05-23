class Visibilidade extends React.Component {
    constructor(props) {
        super(props);
        this.alternarVisibilidade = this.alternarVisibilidade.bind(this);
        this.state = {
            visivel: false
        }
    }

    alternarVisibilidade() {
        this.setState((estadoAnterior) => {
            return {
                visivel: !estadoAnterior.visivel
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Brincando com Visibilidade</h1>
                <div>
                    <button onClick={this.alternarVisibilidade}>
                        {this.state.visivel ? 'Ocultar Detalhes' : 'Exibir Detalhes'}
                    </button>
                    {this.state.visivel && (<p>Detalhes sendo exibidos...</p>)}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Visibilidade />, document.getElementById('app'));