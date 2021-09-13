import _ from 'lodash';
import './css/index.css';
import Icon from './assets/images/female-icon.png'
import KMInfo from './assets/data/km-info.json'

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

  // Add the image to our existing div.

  const myIcon = new Image();

  myIcon.src = Icon;


  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(yearElement());
document.body.appendChild(component());

console.log(KMInfo);
