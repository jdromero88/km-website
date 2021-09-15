import _ from 'lodash';
import printMe from './print.js';
import KMInfo from './assets/data/km-info.json'
import './css/main.css'

console.log('hola soy nuevo')
const TODAY = new Date()
const YEAR = TODAY.getFullYear()
console.log(YEAR)

function yearElement() {
  // const yearEl = document.getElementById('year')
  const element = document.createElement('span')
  element.innerText = YEAR
  return element
}

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';

  btn.onclick = printMe;

  element.appendChild(btn);
  return element;
}

document.body.appendChild(yearElement());
document.body.appendChild(component());

console.log(KMInfo);
console.log(KMInfo.name);
