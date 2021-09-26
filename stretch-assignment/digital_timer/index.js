const digitsDiv = document.querySelector('.digits')

const secondTens = document.querySelector('#secondTens')
const secondOnes = document.querySelector('#secondOnes')
const msHundreds = document.querySelector('#msHundreds')
const color = document.querySelector('#colon')
const msTens = document.querySelector('#msTens')
const allNumbers = document.querySelectorAll('.digit')

document.querySelector('body').style.background = '#212529'
document.querySelector('body').style.color = '#f8f9fa'

const createParagraph = (innerText) => `<p>${innerText}</p>`

const values = {
  secondTens: 0,
  secondOnes: 0,
  msHundreds: 0,
  msTens: 0,
}

msTens.innerHTML = createParagraph(values.msTens)

const toggleAllRed = () => {
  secondTens.classList.toggle('redDigit')
  secondOnes.classList.toggle('redDigit')
  colon.classList.toggle('redDigit')
  msHundreds.classList.toggle('redDigit')
  msTens.classList.toggle('redDigit')
}

const getDigits = (number) => {
  const str = number.toString().padStart(4, '0').split('')

  return {
    secondTens: str[0],
    secondOnes: str[1],
    msHundreds: str[2],
    msTens: '0',
  }
}

const updateDigits = (digits) => {
  secondTens.innerHTML = createParagraph(digits.secondTens)
  secondOnes.innerHTML = createParagraph(digits.secondOnes)
  msHundreds.innerHTML = createParagraph(digits.msHundreds)
  msTens.innerHTML = createParagraph(digits.msTens)
}

let total = 0
const interval = window.setInterval(() => {
  total += 1

  const digits = getDigits(total)
  updateDigits(digits)

  if (total === 1000) {
    clearInterval(interval)
    toggleAllRed()
  }
}, 10)
