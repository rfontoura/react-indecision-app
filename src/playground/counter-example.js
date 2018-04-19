let count = 0;
const addOne = () => {
    count++;
    renderCountApp();
};

function minusOne() {
    count--;
    renderCountApp();
}

const reset = () => {
    count = 0;
    renderCountApp();
}

const domElement = document.getElementById('app');

const renderCountApp = () => {
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button id="meu-id" className="button" onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button type="reset" onClick={reset}>Reset</button>
        </div>
    );
    
    ReactDOM.render(template2, domElement);
};

renderCountApp();