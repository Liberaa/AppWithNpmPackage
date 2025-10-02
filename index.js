import { Game, Obstacle, Coin, SceneManager, Menu, score } from './node_modules/learn2dgame-js/dist/learn2dgame-js.js'
const menu = new Menu()
document.addEventListener('keydown', e => {
    if (e.key.toLowerCase() === 'm') {
        menu.create({
            title: 'Pause',
            buttons: [
                { text: 'Resume', onClick: () => menu.close() },
                { text: 'Reset Score', onClick: () => score.reset() }
            ]
        })
    }
})
const music = new Audio('./music/background.mp3')
music.loop = true
music.volume = 0.3

const scenes = new SceneManager()
function level4() {
    new Obstacle({ positionX: -5, positionY: 780, width: 2800, height: 507, color: 'purple' })
    new Obstacle({ positionX: 100, positionY: 600, width: 80, height: 50, color: 'purple' })
    new Obstacle({ positionX: 400, positionY: 500, width: 80, height: 50, color: 'purple' })
    new Obstacle({ positionX: 700, positionY: 400, width: 80, height: 50, color: 'purple' })
    new Obstacle({ positionX: 1000, positionY: 300, width: 80, height: 50, color: 'purple' })
    new Obstacle({ positionX: 1300, positionY: 500, width: 80, height: 50, color: 'red' })
    new Coin({ positionX: 1330, positionY: 450 })
    new Coin({ positionX: 870, positionY: 250 })
}
function level2() {
    new Obstacle({ positionX: -5, positionY: 780, width: 2400, height: 507, color: 'purple' })
    new Obstacle({ positionX: 250, positionY: 600, width: 80, height: 50, color: 'purple' })
    new Obstacle({ positionX: 450, positionY: 500, width: 80, height: 50, color: 'purple' })
    new Obstacle({ positionX: 250, positionY: 400, width: 80, height: 50, color: 'purple' })
    new Obstacle({ positionX: 450, positionY: 300, width: 80, height: 50, color: 'purple' })
    new Obstacle({ positionX: 975, positionY: 400, width: 80, height: 50, color: 'purple' })
    new Obstacle({ positionX: 1300, positionY: 250, width: 80, height: 50, color: 'red' })
    new Coin({ positionX: 200, positionY: 50 })
    new Coin({ positionX: 1200, positionY: 50 })
}
function level3() {
    new Obstacle({ positionX: -5, positionY: 780, width: 2200, height: 507, color: 'purple' })
    new Obstacle({ positionX: 1300, positionY: 500, width: 30, height: 30, color: 'brown' })
    new Obstacle({ positionX: 100, positionY: 570, width: 150, height: 10 })
    new Obstacle({ positionX: 100, positionY: 170, width: 150, height: 10 })

    new Obstacle({ positionX: 250, positionY: 690, width: 150, height: 90 })
    new Obstacle({ positionX: 400, positionY: 350, width: 50, height: 50 })
    new Obstacle({ positionX: 520, positionY: 110, width: 150, height: 290 })

    new Obstacle({ positionX: 900, positionY: 330, width: 10, height: 5 })

    new Coin({ positionX: 1500, positionY: 430 })
    new Coin({ positionX: 330, positionY: 430 })
    new Coin({ positionX: 630, positionY: 10 })
    new Coin({ positionX: 2, positionY: 750 })

}

function level5() {

    if(music.paused) {
    music.play()
}
  // Ground + statiska plattformar
  new Obstacle({ positionX: -5, positionY: 780, width: 1800, height: 507, color: 'purple' })
  new Obstacle({ positionX: 1000, positionY: 500, width: 300, height: 50, color: 'brown' })
  new Obstacle({ positionX: 100, positionY: 570, width: 150, height: 10 })
  new Obstacle({ positionX: 100, positionY: 170, width: 150, height: 10 })
  new Obstacle({ positionX: 250, positionY: 690, width: 150, height: 90 })
  new Obstacle({ positionX: 400, positionY: 350, width: 150, height: 50 })
  new Obstacle({ positionX: 900, positionY: 330, width: 150, height: 50 })

  // --- Rörliga obstacles ---
  new Obstacle({ positionX: 200, positionY: 250, width: 120, height: 20, color: 'red', velocityX: 3 })
  new Obstacle({ positionX: 700, positionY: 200, width: 100, height: 20, color: 'orange', velocityY: 2 })
  new Obstacle({ positionX: 500, positionY: 600, width: 50, height: 50, color: 'green', velocityX: -4 })

  // --- Gömmer sig (försvinner när man landar) ---
  new Obstacle({ positionX: 300, positionY: 450, width: 120, height: 20, color: 'pink', disappearOnLand: true })
  new Obstacle({ positionX: 750, positionY: 150, width: 150, height: 20, color: 'cyan', disappearOnLand: true })

  // --- Dödliga obstacles ---
  new Obstacle({ positionX: 1200, positionY: 700, width: 150, height: 20, color: 'black', deadly: true })
  new Obstacle({ positionX: 600, positionY: 500, width: 100, height: 20, color: 'darkred', deadly: true, velocityX: 2 })

  // Coins
  new Coin({ positionX: 1500, positionY: 430 })
  new Coin({ positionX: 330, positionY: 430 })
  new Coin({ positionX: 630, positionY: 130 })
  new Coin({ positionX: 2, positionY: 750 })
}

function level1() {
  // Ground
  new Obstacle({ id: 'ground', positionX: -5, positionY: 780, width: 2000, height: 300, color: 'purple' })

  // Start platform
  new Obstacle({ id: 'start-platform', positionX: 50, positionY: 650, width: 200, height: 30, color: 'gray' })

  // Moving platforms
  new Obstacle({ id: 'move-x', positionX: 300, positionY: 600, width: 120, height: 20, color: 'red', velocityX: 4 })
  new Obstacle({ id: 'move-y', positionX: 600, positionY: 500, width: 120, height: 20, color: 'orange', velocityY: 3 })

  // Disappearing platforms
  new Obstacle({ id: 'disappear-1', positionX: 500, positionY: 300, width: 150, height: 20, color: 'pink', disappearOnLand: true })
  new Obstacle({ id: 'disappear-2', positionX: 750, positionY: 200, width: 150, height: 20, color: 'cyan', disappearOnLand: true })

  // Deadly traps
  new Obstacle({ id: 'lava-floor', positionX: 400, positionY: 750, width: 200, height: 30, deadly: true })
  new Obstacle({ id: 'spike-block', positionX: 1300, positionY: 500, width: 80, height: 80, deadly: true, velocityY: 4 })

  // Coins
  new Coin({ id: 'gold-coin', positionX: 350, positionY: 550 })
  new Coin({ id: 'rare-coin', positionX: 1200, positionY: 150 })
}



scenes.add(level1, 20)
scenes.add(level2, 20)
scenes.add(level3, 20)
scenes.add(level4, 20)
scenes.add(level5, 20)
scenes.set(0)
new Game('wasd', {
    movementSpeed: 30,
    jumpStrengthValue: 15,
})