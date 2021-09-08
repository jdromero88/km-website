import _ from 'lodash';

console.log('hola')
const TODAY = new Date()
const YEAR = TODAY.getFullYear()
console.log(YEAR)

function yearElement() {
  const yearEl = document.getElementById('year')
  yearEl.innerText = YEAR
  return yearEl
}

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(yearElement());
document.body.appendChild(component());
