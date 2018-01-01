// irá conter JSX. Os arquivos transpilados para ES6 ficarão em public/scripts

console.log('App.js tá rodando!');

// JSX - JavaScritp XML
var filme = {
    title: 'Back To The Future II',
    subtitle: 'The Future Begins'
};
var template = (
    <div>
        <h1>{filme.title}</h1>
        <p>{filme.subtitle}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);

var user = {
    name: 'Rafaael',
    age: 60,
    location: 'Lugar Bacana'
};
var userName = 'Rafael';
var userAge = 65;
var userLocation = 'Algum Lugar Bacana';
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);