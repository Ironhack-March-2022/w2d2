// inheritance

class Animal {
	constructor(name, sound) {
		this.name = name
		this.sound = sound
	}

	makeSound() {
		console.log('this is the parent sound')
		return null
	}
}

class Cat extends Animal {
	constructor(name, sound, number) {
		super(name, sound)
		this.numberOfLives = number
	}
	// overriding a method from the parent class 
	makeSound() {
		// this calls the parent's makeSound method
		super.makeSound()
		console.log('this is the sound from the cat class')
	}
}

class Bird extends Animal {
	constructor(name, sound) {
		super(name, sound)
	}

	fly() {
		console.log('flying')
	}
}
const tom = new Cat('Tom', 'meow', 7)
const pete = new Bird('Pete', 'peep')
console.log(tom.makeSound())