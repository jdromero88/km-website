console.log('hola')

const TODAY = new Date()
const YEAR = TODAY.getFullYear()

console.log(YEAR)

const yearEl = document.getElementById('year')
console.log(yearEl)
yearEl.innerText = YEAR
