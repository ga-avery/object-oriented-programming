function House(bedrooms, bathrooms, garage) {
  this.bedrooms = bedrooms
  this.bathrooms = bathrooms
  this.garage = garage
}
// class House {
//   constructor(bedrooms, bathrooms, garage) {
//     this.bedrooms = bedrooms
//     this.bathrooms = bathrooms
//     this.garage = garage
//   }
// }
const jennyHouse = new House(3, 3, true)
console.log(jennyHouse)
jennyHouse.__proto__.paintHouse = () => {
  console.log('Jenny paints house')
}
jennyHouse.paintHouse()

class BasketballPlayer {
  constructor(name, threePointAccuracy) {
    this.name = name
    this.threePointAccuracy = threePointAccuracy
    this.shoot3Point = function () {
      if (Math.random() < this.threePointAccuracy) {
        console.log(this.name, ' hits a 3 pointer!')
        return true
      }
      console.log(this.name, ' misses')
      return false
    }
  }
}
const shaq = new BasketballPlayer('Shaq', 1 / 22)
shaq.shoot3Point()

class Animal {
  constructor(name, legs, eyes) {
    this.name = name
    this.legs = legs
    this.eyes = eyes
  }
}
class Mammal extends Animal {
  constructor(name, legs) {
    super(name, legs, 2)
    this.fur = true
  }
  speak() {
    console.log(`${this.name} makes a noise`)
  }
}
class Dog extends Mammal {
  constructor(name, breed) {
    super(name, 4)
    this.breed = breed
  }

  speak() {
    console.log(`${this.name} barks, wan wan!`)
  }
}
class Cat extends Mammal {
  constructor(name, breed) {
    super(name, 4)
    this.breed = breed
  }

  speak() {
    console.log(`${this.name} meows, nyaa nyaa!`)
  }
}

let max = new Dog('max', 'lab')
max.speak()
let picatso = new Cat('picatso', 'american shorthair')
picatso.speak()
// let counts = []
// while (counts.length < 1_000_000) {
//   let curCount = 1
//   while (!shaq.shootBall()) {
//     curCount++
//   }
//   counts.push(curCount)
// }
// console.log(counts.reduce((acc, curr) => acc + curr) / counts.length)

class Person {
  constructor(name) {
    this.name = name
  }
  greet() {
    return "Hello, my name is " + this.name
  }
}
class Student extends Person {
  constructor(name, course) {
    super(name)
    this.course = course
  }

  greet() {
    return super.greet() + " and my major is " + this.course
  }

  doHomework(assignment) {
    console.log(`Deliverable: ${assignment} completed`)
  }
}

const avery = new Student('avery', 'computer science')
const bob = new Person('bob')
console.log(bob.greet())
console.log(avery.greet())
avery.doHomework('object-oriented-programming')