import sum from './sum.js';
import substraction from './substraction.js';
import multiplication from './multiplication.js';
import division from './division.js';
import './index.css';

const btn = document.querySelector('#btn');
const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const op = document.querySelector('#op');
const res = document.querySelector('#res');

btn.addEventListener('click', e =>{
    switch(op.value){
        case '+':
            res.textContent = sum(n1.value, n2.value);
        break;
        case '-':
            res.textContent = substraction(n1.value, n2.value);
        break;
        case '*':
            res.textContent = multiplication(n1.value, n2.value);
        break;
        case '/':
            res.textContent = division(n1.value, n2.value);
        break;
    }
});