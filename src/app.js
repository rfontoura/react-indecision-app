import ehVelho, { isAdult, canDrink } from './person.js';
import React from 'react';
import ReactDOM from 'react-dom';

console.log('isAdult(18)', isAdult(18));
console.log('canDrink(18)', canDrink(18));
console.log('ehVelho(61)', ehVelho(61));

const template = <p>THIS IS JSX FROM REACT</p>;
ReactDOM.render(template, document.getElementById('app'));