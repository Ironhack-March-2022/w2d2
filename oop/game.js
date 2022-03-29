const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

let dice;

const player1 = {
	name: 'Bob',
	color: 'blue',
	position: 0,
	cash: 1000,
	displayName: function () {
		console.log(this)
		// return this.name
	},
	move: function () {
		dice = 1 + Math.floor(Math.random() * 6)
		this.position = (this.position + dice) % squares.length
		this.cash += squares[this.position]
	}
}
player1.displayName()


const player2 = {
	name: 'Alice',
	color: 'red',
	position: 0,
	cash: 1000,
	displayName: function () {
		console.log(this)
		// return this.name
	},
	move: function () {
		dice = 1 + Math.floor(Math.random() * 6)
		this.position = (this.position + dice) % squares.length
		this.cash += squares[this.position]
	}
}


// roll the dice
dice = 1 + Math.floor(Math.random() * 6)
// moving the player
// player1.position += dice 
// if ((player1.position + dice) > squares.length - 1) {
// 	player1.position = player1.position + dice - squares.length
// } else {
// 	player1.position += dice
// }

// or a little shorter using modulo
player1.position = (player1.position + dice) % squares.length
// change the cash
player1.cash += squares[player1.position]
// check the game over condition
if (player1.cash < 0) {
	// console.log(`${player1.name} has lost the game`)
}
// console.log(`${player1.name} has ${player1.cash} amount of cash`)

class Player {

	constructor(name, color) {
		this.name = name
		this.color = color
		this.cash = 1000
		this.position = 0
	}

	greet() {
		console.log('hello')
	}

	displayName() {
		return 'my name is ' + this.name
	}
}

const player = new Player('Bob', 'red')
// player.cash = 500
console.log(player.displayName())