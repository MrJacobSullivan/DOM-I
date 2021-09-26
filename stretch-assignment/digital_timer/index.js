const secondTens = document.querySelector('#secondTens')
const secondOnes = document.querySelector('#secondOnes')
const msHundreds = document.querySelector('#msHundreds')
const msTens = document.querySelector('#msTens')

const button = document.createElement('button')

const toggleAllRed = () => {
  secondTens.classList.toggle('redDigit')
  secondOnes.classList.toggle('redDigit')
  colon.classList.toggle('redDigit')
  msHundreds.classList.toggle('redDigit')
  msTens.classList.toggle('redDigit')
}

const values = {
  secondTens: 0,
  secondOnes: 0,
  msHundreds: 0,
  msTens: 0,
}

const createParagraph = (innerText) => `<p>${innerText}</p>`

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

updateDigits(getDigits(0))

let running = false

let interval
const runTimer = () => {
  running = true

  button.innerText = 'Stop Timer!'

  let total = 0
  interval = window.setInterval(() => {
    total += 1

    const digits = getDigits(total)
    updateDigits(digits)

    if (total === 1000) {
      clearInterval(interval)
      toggleAllRed()
    }
  }, 10)
}

const reset = () => {
  running = false
  button.innerText = 'Start Timer!'

  clearInterval(interval)
}

document.body.style.background = '#212529'
document.body.style.color = '#f8f9fa'
document.body.style.display = 'flex'
document.body.style.flexDirection = 'column'

button.innerText = 'Start Timer!'
button.style.padding = '2% 5%'
button.style.borderRadius = '0.5rem'

document.body.append(button)

button.onclick = () => {
  if (running) reset()
  else runTimer()
}
