
'use strict';
//1. Constructor Function and new Operator
/* const Person = function (firstName, birthYear) {
     //Instances Properties
     this.firstName = firstName;
     this.birthYear = birthYear;     
      
};  */

/* const damilola = new Person('Damilola', 2001);
console.log(damilola);
console.log(damilola instanceof Person); */

//2. PROTOTYPE
//CalcAge is a method that has been defined on the 'Person' constructor function
//All the object that are created through the Person constructor function will inherit/get access to all methods and properties that are defined on this prototype property
/* Person.prototype.calcAge = function () {
     console.log(2037 - this.birthYear);
}
 console.log(Person.prototype); */
 
 //Although the calcAge method was not defined on the object itself, we can still use the method on the 'Damilola'because it has defined on the  constructor function. This is called prototypal inheritance
/* damilola.calcAge();

console.log("damilola.__proto__ => " ,damilola.__proto__); */

//Remember, Person.prototype is actually not the prototype of person but of all tge objects that are created through the person function
/* console.log("damilola.__proto__ === Person.prototype =>",damilola.__proto__ === Person.prototype);
console.log("Person.prototype.isPrototypeOf(damilola) => ", Person.prototype.isPrototypeOf(damilola)); */

//The object that are created through the 'Person' constructor function will have access to the species property
/* Person.prototype.species = 'Homo Sapiens';
console.log("damilola.species =>", damilola.species);

console.log("damilola.hasOwnProperty('firstName') =>", damilola.hasOwnProperty('firstName'));

console.log("damilola.hasOwnProperty('species') =>", damilola.hasOwnProperty('species')); */


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
/* const Car = function (maker, speed) {
     //Instances Properties
     this.maker = maker;
     this.speed = speed; 
     
}
 */


//////Number 2
/* Car.prototype.accelerate = function () {
     this.speed += 10
     console.log(`Speed => ${this.maker} is going at ${this.speed} Km/h`);
};
  */
 //////Number 3
/* Car.prototype.brake = function () {
     this.speed -= 5;
     console.log(`Brake => ${this.maker} is going at ${this.speed} Km/h`);
}; */
 
 
/* const bmw = new Car('BMW', 120);
const mercedes = new Car('mercedes', 95);

bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.brake();
bmw.accelerate(); */



////////////////////////////////////
//////////ES6  Classes


//class expression
/* class PersonCl {
     constructor(fullName, birthYear) {
          this.fullName = fullName;
          this.birthYear = birthYear;
          
     } */
     
     //Methods that will be added to .prototype property
     /* calcAge() {
         console.log(2037 - this.birthYear);
    } */
    //Instead of writing the regular prototypal inheritance, the greet function can be written inside the class but outside the construction function
    /* greet() {
    
         console.log(`Hey ${this.firstName}`);
    } */
    
    //experimenting getter & Setter
    /* get age() {
         return 2037 - this.birthYear;
    }
    
    set fullName(name) {
         console.log(name);
         if(name.includes(' ')) this._fullName = name;
         else alert(`${name} is not a full name`)
    }
    get fullName() {
         return this._fullName;
    }
}

const victoria = new PersonCl('Victoria Oniyide', 2001);
console.log(victoria);
victoria.calcAge();
console.log(victoria.age);


console.log("victoria.__proto__ === PersonCl.prototype =>", victoria.__proto__ === PersonCl.prototype); */


//PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
//}
/* victoria.greet(); */

//Important things to note about classes
//1. Classes are not HOISTED i.e unlike function declarations, classes can't be used before they are declared even if they are class declarations
//2. Classes(just like function declarations) are first class citizen i.e we can pass them into functiins and also return them from functions[this is because classes are special kind of functions behind the scene]
//3. By default, classes are executed in strict code even if we dobt activate strict mode


/* const walter = new PersonCl('Walter White', 2011); */



////////////////////////////////
////////Getter and Setter
/* const account = {
     owner: 'Lola',
     movements: [200, 530, 120, 300],
     
     //Getter
     get latest() {
          return this.movements.slice(-1).pop();
     },
      */
     //Setter - any setter needs to have at least one parameter
     /* , */
     
     //Note
     //it's not mandatory to specify a setter when we have a getter for the same property, just a getter or a setter would be enough
/* } */

/* console.log(account.latest);
account.latest = 50;
console.log(account.movements);
 */
//Getter and setter can be useful for data validation


////////Lesson 13///////////////////
////// object.create - The third way of implementing prototypal inheritance or delegation.It works in a different way that constructor function and classes work. With object.create, there is still the idea of prototypal inheritance. However, there are no prototype properties involved. Also, no constructor and no new operator. Instead, we can use object.create to manually set the prototype of an object to any other object that we want. It is a more straightforward method of inheriting prototype

/* const PersonProto = {
     calcAge() {
          console.log(2037 - this.birthYear);
     },
     
  // function to create object.create
     init(firstName, birthYear) {
          this.firstName = firstName;
         this.birthYear = birthYear;
     }
     
     
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear =2002;
steven.calcAge();
console.log("steven.__proto__ === PersonProto =>",steven.__proto__ === PersonProto);
     
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979); */

//////////////////////////
////////Coding Challenge

//////////////SOLUTION
//////Number 1
/* class Car{
     constructor(maker, speed) {
          this.maker = maker;
          this.speed = speed; 
     }
     accelerate() {
         this.speed += 10
         console.log(`Speed => ${this.maker} is going at ${this.speed} Km/h`);
};accelerate = function () {
     this.speed += 10
     console.log(`Speed => ${this.maker} is going at ${this.speed} Km/h`);
};
     brake() {
     this.speed -= 5;
     console.log(`Brake => ${this.maker} is going at ${this.speed} Km/h`);
}; */
     
    /*   get speedUS() {
         return this.speed/1.6;
    }
    
    set speedUS(speed) {
         return this.speed * 1.6;
         
    }
}
const Ford = new Car('Ford', 120);
console.log(Ford.speedUS);
Ford.accelerate();
Ford.brake();
Ford.accelerate();
Ford.brake();
Ford.accelerate();
 */

////////////////////////////////////
////Inheritance between classes
const Person = function (firstName, birthYear) {
     
     this.firstName = firstName;
     this.birthYear = birthYear;     
      
}; 

Person.prototype.calcAge = function () {
     console.log(2037 - this.birthYear);
};

const student = function (firstName, birthYear, course) {
     /* this.firstName = firstName;
     this.birthYear = birthYear;   */
     //To follow DRY and also, if the person function change and additional properties are added to it. We shoul just call the 'Person function'
     /* Person.call(this, firstName, birthYear);
     this.course = course;  
      
} */

//Linking Prototype
/* student.prototype = Object.create(Person.prototype)

student.prototype.introduce = function () {
     console.log('My name is ${this.firstName} and i study ${this.course}');
}

const mary = new student('Mary', 2020, 'Computer Science');
mary.introduce();
mary.calcAge();

console.log("mary.__proto__  =>",mary.__proto__);
console.log("mary.__proto__.__proto__ =>", mary.__proto__.__proto__);

 */
//////////////////////////////////////////
//////Coding Challenge 3
/* class Car{
     constructor(maker, speed) {
          this.maker = maker;
          this.speed = speed; 
     }
     accelerate() {
         this.speed += 10
         console.log(`Speed => ${this.maker} is going at ${this.speed} Km/h`);
};accelerate = function () {
     this.speed += 10
     console.log(`Speed => ${this.maker} is going at ${this.speed} Km/h`);
};
     brake() {
     this.speed -= 5;
     console.log(`Brake => ${this.maker} is going at ${this.speed} Km/h`);
}; 

const EV = function(maker, speed, charge) {
     Car.call(this, maker, speed);
     this.charge = charge;
}
  */
//Link the prototype
/* EV.prototype = Object.create(Car.protype);

EV.prototype.chargeBattery = function (chargeTo) {
     this.charge = chargeTo;
}

EV.prototype.accelerate = function () {
     this.speed += 20;
     this.charge--;
     console.log(`Brake => ${this.maker} is going at ${this.speed} Km/h`, with a charge of ${this.charge});
};
}
const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
 */
 
 