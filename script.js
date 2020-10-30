const game = document.getElementById('game')
const gameInitialization = document.getElementById('game-initialization')
const car = document.getElementById('car')
const counter = document.getElementById('counter')
const form = document.querySelector('form')

const move = ({ key }) => {
  switch (key) {
    case 'a':
      car.classList.remove('car-center', 'car-right')
      car.classList.add('car-left')

      break;
  
    case 's':
      car.classList.remove('car-left', 'car-right')
      car.classList.add('car-center')

      break;

    case 'd':
      car.classList.remove('car-center', 'car-left')
      car.classList.add('car-right')

      break;

    case 'ArrowLeft':
      position = car.classList
      if (position.contains('car-left')) {
        return;
      }else if (position.contains('car-center')) {
        car.classList.remove('car-center')
        car.classList.add('car-left')
      }else if (position.contains('car-right')) {
        car.classList.remove('car-right')
        car.classList.add('car-center')
      }

      break;

    case 'ArrowRight':
      position = car.classList
      if (position.contains('car-right')) {
        return;
      }else if (position.contains('car-center')) {
        car.classList.remove('car-center')
        car.classList.add('car-right')
      }else if (position.contains('car-left')) {
        car.classList.remove('car-left')
        car.classList.add('car-center')
      }

      break;

    default:
      break;
  }
}

const startGame = (gameCounter) => {
  clearInterval(gameCounter)
  gameInitialization.classList.add('hide')
  game.classList.remove('hide')
}

form.addEventListener('submit', e => {
  e.preventDefault()
  console.log(counter.innerHTML)
  form.classList.add('hide')
  counter.classList.remove('hide')

  const gameCounter = setInterval(() => {
    const time = counter.innerHTML

    time === '1'
      ? startGame(gameCounter)
      : counter.innerHTML = Number(time) - 1
  }, 1000);

})

document.addEventListener("keydown", move)
