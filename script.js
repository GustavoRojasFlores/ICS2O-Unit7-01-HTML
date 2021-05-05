const text = document.getElementById('text')
const inp = document.getElementById('inp')
document.getElementById('btn').addEventListener('click', guess)

function guess () {
  const input = parseInt(inp.value)
  const rand = Math.ceil(Math.random() * 6)
  if (input > 0 && input < 7) {
    if (input === rand) {
      text.innerHTML = 'You got it right! Enter a new number and press Guess to try again.'
    } else {
      text.innerHTML = 'Oops, try again! The number was ' + rand + '. Enter a new number and press Guess to try again.'
    }
  } else {
    text.innerHTML = 'Please enter a valid number between 1 and 6. Enter a new number and press Guess to try again.'
  }
  inp.value = null
}
