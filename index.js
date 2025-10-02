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
const scenes = new SceneManager()
function level1() {
    new Obstacle({ positionX: -5, positionY: 780, width: 1800, height: 507, color: 'purple' })
    new Obstacle({ positionX: 100, positionY: 600, width: 80, height: 50, color: 'purple' })
    new Obstacle({ positionX: 400, positionY: 500, width: 80, height: 50, color: 'purple' })
    new Obstacle({ positionX: 700, positionY: 400, width: 80, height: 50, color: 'purple' })
    new Obstacle({ positionX: 1000, positionY: 300, width: 80, height: 50, color: 'purple' })
    new Obstacle({ positionX: 1300, positionY: 500, width: 80, height: 50, color: 'red' })
    new Coin({ positionX: 1330, positionY: 450 })
    new Coin({ positionX: 870, positionY: 250 })
}
function level2() {
    new Obstacle({ positionX: -5, positionY: 780, width: 1800, height: 507, color: 'purple' })
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
    new Obstacle({ positionX: -5, positionY: 780, width: 1800, height: 507, color: 'purple' })
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

function level4() {
    new Obstacle({ positionX: -5, positionY: 780, width: 1800, height: 507, color: 'purple' })
    new Obstacle({ positionX: 1000, positionY: 500, width: 300, height: 50, color: 'brown' })
    new Obstacle({ positionX: 100, positionY: 570, width: 150, height: 10 })
    new Obstacle({ positionX: 100, positionY: 170, width: 150, height: 10 })

    new Obstacle({ positionX: 250, positionY: 690, width: 150, height: 90 })
    new Obstacle({ positionX: 400, positionY: 350, width: 150, height: 50 })
    new Obstacle({ positionX: 900, positionY: 330, width: 150, height: 50 })

    new Coin({ positionX: 1500, positionY: 430 })
    new Coin({ positionX: 330, positionY: 430 })
    new Coin({ positionX: 630, positionY: 130 })
    new Coin({ positionX: 2, positionY: 750 })


}
scenes.add(level1, 20)
scenes.add(level2, 20)
scenes.add(level3, 40)
scenes.add(level4, 40)
scenes.set(0)
new Game('platform', {
    movementSpeed: 5,
    jumpStrengthValue: 15,
    color: 'green'
})