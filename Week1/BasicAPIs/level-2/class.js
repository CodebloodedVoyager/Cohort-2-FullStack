class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

// Example by me

// class Car {
//   constructor(seats, engine, color, name){
//     this.seats = 5
//     this.engine = 9000
//     this.color = red
//     this.name = bugatti
//   }
//   describe() {
//     return `${this.name} has ${this.seats} and has ${this.engine} hoursepower engine with ${this.color} color`
//   }
// }
