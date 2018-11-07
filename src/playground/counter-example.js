class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.adicionarUm = this.adicionarUm.bind(this);
        this.removerUm = this.removerUm.bind(this);
        this.zerar = this.zerar.bind(this);
        this.elevarAoQuadrado = this.elevarAoQuadrado.bind(this);

        this.state = {
            contador: 0,
        }
    }

    componentDidMount() {
        const contadorString = localStorage.getItem('contador');
        if (!isNaN(contadorString)) {
            this.setState(() => ({ contador: parseInt(contadorString) }));
        }
    }

    componentDidUpdate() {
        localStorage.setItem('contador', this.state.contador);
    }

    adicionarUm() {
        this.setState((estadoAnterior) => {
            return {
                contador: estadoAnterior.contador + 1
            };
        });
    }

    removerUm() {
        this.setState((estadoAnterior) => {
            return {
                contador: estadoAnterior.contador - 1
            };
        });
    }

    elevarAoQuadrado() {
        this.setState((prevState) => {
            return {
                contador: prevState.contador * prevState.contador
            };
        });
    }

    zerar() {
        this.setState((estadoAnterior) => {
            return {
                contador: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Contador: {this.state.contador}</h1>
                <button onClick={this.adicionarUm}>+1</button>
                <button onClick={this.removerUm}>-1</button>
                <button onClick={this.elevarAoQuadrado}>^2</button>
                <button onClick={this.zerar}>Zerar</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter contador={-15} />, document.getElementById('app'));