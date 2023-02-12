'use strict';
//1. Constructor Function and new Operator
const Person = function (firstName, birthYear) {
     //Instances Properties
     this.firstName = firstName;
     this.birthYear = birthYear;     
      
};

const damilola = new Person('Damilola', 2001);
console.log(damilola);
console.log(damilola instanceof Person);

//2. PROTOTYPE
//CalcAge is a method that has been defined on the 'Person' constructor function
//All the object that are created through the Person constructor function will inherit/get access to all methods and properties that are defined on this prototype property
Person.prototype.calcAge = function () {
     console.log(2037 - this.birthYear);
}
 console.log(Person.prototype);
 
 //Although the calcAge method was not defined on the object itself, we can still use the method on the 'Damilola'because it has defined on the  constructor function. This is called prototypal inheritance
damilola.calcAge();

console.log("damilola.__proto__ => " ,damilola.__proto__);

//Remember, Person.prototype is actually not the prototype of person but of all tge objects that are created through the person function
console.log("damilola.__proto__ === Person.prototype =>",damilola.__proto__ === Person.prototype);
console.log("Person.prototype.isPrototypeOf(damilola) => ", Person.prototype.isPrototypeOf(damilola));

//The object that are created through the 'Person' constructor function will have access to the species property
Person.prototype.species = 'Homo Sapiens';
console.log("damilola.species =>", damilola.species);

console.log("damilola.hasOwnProperty('firstName') =>", damilola.hasOwnProperty('firstName'));

console.log("damilola.hasOwnProperty('species') =>", damilola.hasOwnProperty('species'));


//4. Prorotypal inheritance and the prototype chain => The abilty of looking up methods and properties in a prototype is what we call the prototype chain. The 'damilola' object and its prototype basically form a prototype chain 

//The prototype of Person.prototype is object.prototype
//object.prototype is usually the top of the prototype chain which meane that the prototype is null. Hence, __proto__ will simply point to null which then marks the end of the prototype chain

//4.Prototypal inheritance on built in objects


////////////////////////////////
///////// Coding Challenge #1
 /* 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h 
*/

//////////////SOLUTION
//////Number 1
const Car = function (maker, speed) {
     //Instances Properties
     this.maker = maker;
     this.speed = speed; 
     
}



//////Number 2
Car.prototype.accelerate = function () {
     this.speed += 10
     console.log(`Speed => ${this.maker} is going at ${this.speed} Km/h`);
};
 
 //////Number 3
Car.prototype.brake = function () {
     this.speed -= 5;
     console.log(`Brake => ${this.maker} is going at ${this.speed} Km/h`);
};
 
 
const bmw = new Car('BMW', 120);
const mercedes = new Car('mercedes', 95);

bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.brake();
bmw.accelerate();