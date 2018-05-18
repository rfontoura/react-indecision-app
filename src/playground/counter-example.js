class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.adicionarUm = this.adicionarUm.bind(this);
        this.removerUm = this.removerUm.bind(this);
        this.zerar = this.zerar.bind(this);
    }

    adicionarUm() {
        console.log(this.props, 'adicionarUm()');
    }

    removerUm() {
        console.log(this.props, 'removerUm()');
    }

    zerar() {
        console.log(this.props, 'zerar()');
    }

    render() {
        return (
            <div>
                <h1>Contador: </h1>
                <button onClick={this.adicionarUm}>+1</button>
                <button onClick={this.removerUm}>-1</button>
                <button onClick={this.zerar}>Zerar</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter test="a" test2="b"/>, document.getElementById('app'));