
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
    } */
    
    //static method - available only on class. Can't access instance properties nor methods, only static ones
 /*     static hey() {
         console.log('Hey there');
         console.log(this);
    }
}
 */
 /*  
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
     
     //Getter -  used to get a value out of an object by simply writing a property instead of writing a method
     get latest() {
          return this.movements.slice(-1).pop();
     },
      */
     //Setter -simply defining the value of a property by setting it to some value. any setter needs to have at least one parameter. use '_' to set property of a setter that is already defined in the constructor, and also add getter
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
  //this has nothing to do with any //condtruction function and we are not going to use the new operator.Instead,the init operator will be used(check 'sarah' object)
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
////////Coding Challenge #2
/*    1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.DATA CAR 1: 'Ford' going at 120 km/hGOOD LUCK 😀*/

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
/* const Person = function (firstName, birthYear) {
     
     this.firstName = firstName;
     this.birthYear = birthYear;     
      
}; 

Person.prototype.calcAge = function () {
     console.log(2037 - this.birthYear);
};

const student = function (firstName, birthYear, course) { */
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
/* 1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! 
HINT: Review the definiton of polymorphism 😉
DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23*/

/* const Car = function (maker, speed) { 
     this.maker = maker; 
     this.speed = speed;
 };
Car.prototype.accelerate = function () {
     this.speed += 10
     console.log(`Speed => ${this.maker} is going at ${this.speed} Km/h`);
};
Car.prototype.brake = function() {
     this.speed -= 5;
     console.log(`Brake => ${this.maker} is going at ${this.speed} Km/h`);
}; 

const EV = function (maker, speed, charge) { 
    Car.call(this, maker, speed); 
    this.charge = charge;
}; */
  
//Link the prototype
/* EV.prototype = Object.create(Car.protype);

EV.prototype.chargeBattery = function (chargeTo) {
     this.charge = chargeTo;
}

EV.prototype.accelerate = function () {
     this.speed += 20;
     this.charge--;
     console.log(`Brake => ${this.maker} is going at ${this.speed} Km/h, with a charge of ${this.charge}`);
}; 
} */

 
//////////////////////////////////////
//Inheritance between classes: ES6 Classes
/* class PersonCl {
     constructor(fullName, birthYear) {
          this.fullName = fullName;
          this.birthYear = birthYear;
          
     }  */
     
 /* calcAge() {
         console.log(2037 - this.birthYear);
    } 
    greet() {
    
         console.log(`Hey ${this.firstName}`);
    } 
     
  */
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
    }  */
     
    //Static Method
   /* static hey() {
         console.log('Hey there');
    }
}  */
//To implement inheritance between ES6 classes, we only need two ingredents - "extend keywords" and "super functions"
//'Student Cl' is a child class of the parent class 'PersonCl'
//We use the extends keywords to set up the inheritance between these two classes. Inheritance between classes automatically. The extends keyword will sutomatically set up the prototype chain gor us so we don't have to do anything manually
/* class StudentCl extends PersonCl { 
     constructor(fullName, birthYear, course) { 
     // Always needs to happen first!   
     //Call to parent(super) class (necessary when writing a child class i.e when using extend keyword). Needs to happen before accessing this
     super(fullName, birthYear); 
     this.course = course; 
   }
   
   introduce() { 
    console.log(`My name is ${this.fullName} and I study ${this.course}`); 
    }  */
    
  /*  calcAge() {
         console.log( `I'm ${ 2037 - this.birthYear } years old, but as a student I feel more like ${ 2037 - this.birthYear + 10 }` 
          );        
    }
}  */

/* const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce(); 
martha.calcAge();  */


//////////////////////////////////////
//Inheritance between classes: object.create

/* const PersonProto = {
     calcAge() {
          console.log(2037 - this.birthYear);
     }, */
     
  // function to create object.create
     /* init(firstName, birthYear) {
          this.firstName = firstName;
         this.birthYear = birthYear;
     }
     
     
}; */

/* const steven = Object.create(PersonProto);'

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
     PersonProto.init.call(this, firstName, birthYear);
     this.course = course;
}
 */
 /*  
StudentProto.introduce = function () {
     console.log(`My name is ${this.firstName} and I study ${this.course}`); 
} 

const jay = Object.create(StudentProto);

jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge(); */


////////////Another class example
/* class Account {
     constructor(owner, currency, pin) {
          this.owner = owner;
          this.currency = currency;
          
          
          //Property Property
          this._pin = pin;
          this._movements = [];
          this.locale = navigator.language;
          
          console.log(`Thanks for opening an account, ${owner}`);
     }; */
     
     //Public interface
     /* deposit(val) {
          this._movements.push(val)
     }
     withdraw(val) {
          this.deposit(-val);
     }
     _approveLoan(val){
          return true
     }
     requestLoan(val){
          if(this._approveLoan(val)) {
               this.deposit(val)
               console.log('Loan approved');
          }else {
               
          }
     }
} */
/*  
const acc1 = new Account('Jonas', 'EUR', 1111);
 
acc1.deposit(250);
acc1.withdraw(130);
acc1.requestLoan(1000)
acc1.approveLoan(1000)
console.log(acc1);
 */
 
 ////////////////////////////////////////////Encapsulation protected properties and methods - to keep some properties and methods private inside the class so that they are not accessible from outside of the class. Then, the rest of the methods are basically exposed as a public interface a.k.a API
//Why we need encapsulation and data privacy
//1. To prevent code from outside of a class to accidentally manipulate private data inside the class
//2. When we expose a small interface i.e a small API consisting only a few public methods then we can change all the other internal methods with more confidence bcos we can be sure that external code does not rely on these private methods and therefore our code wont break when we do internal changes

//However Js classes actually do not yet support real data privacy and encapsulation but we can add private class fields and methods to the language:
 
// Encapsulation: Private Class Fields and Methods
 // 1) Public fields
 // 2) Private fields
 // 3) Public methods
 // 4) Private methods
 // (there is also the static public field - available only on class) 
 
 //A field is a property that will be on all instance. So in our example, the two  field are the locale and the movement
 
 /* class Account { 
    // 1) Public fields (instances)-a p.f. is similar to a property that we defined in a constructor. Available on created object
    locale{} = navigator.language;
    
     // 2) Private fields (instances) - not accessible outside of clasd
     /* #movements = []; 
     #pin; 
     constructor(owner, currency, pin) { 
      this.owner = owner;
      this.currency = currency; 
      this.#pin = pin; 
      // Protected property 
      // this._movements = [];
       // this.locale = navigator.language; 
       console.log(`Thanks for opening an account, ${owner}`);  
       }  */
       // 3) Public methods 
       // Public interface 
       /* getMovements() { 
          return this.#movements; 
          } 
          deposit(val){ 
              this.#movements.push(val); 
              return this; 
              } 
                      
           withdraw(val){ 
               this.deposit(-val); 
               return this; 
               }
             requestLoan(val) {  */
     // if(this.#approveLoan(val)) { 
           /* if (this._approveLoan(val)) { 
               this.deposit(val); 
               console.log(`Loan approved`); 
               return this; 
             } 
             } 
             static helper() { 
             console.log('Helper'); 
             } 
          */    // 4) Private methods 
             // #approveLoan(val) { 
             /* _approveLoan(val) { return true; 
             }
             }
          const acc1 = new Account('Jonas', 'EUR', 1111); */
 // acc1._movements.push(250);
 // acc1._movements.push(-140);
 // acc1.approveLoan(1000);acc1.deposit(250);
/* acc1.withdraw(140);
 acc1.requestLoan(1000);
 console.log(acc1.getMovements());
 console.log(acc1);
 Account.helper(); */
 // console.log(acc1.#movements);
 // console.log(acc1.#pin);
 // console.log(acc1.#approveLoan(100));
 
 ////////////////////////////////////////////////Chaining Method - returning 'this' makes a method chainable
/*  
 acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
 console.log(acc1.getMovements());*/

 
///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%


*/
/* class CarCl {
     constructor (maker, speed) { 
     this.maker = maker; 
     this.speed = speed;
 };
accelerate() {
     this.speed += 10
     console.log(`Speed => ${this.maker} is going at ${this.speed} Km/h`);
};
brake() {
     this.speed -= 5;
     console.log(`brake => ${this.maker} is going at ${this.speed} Km/h`);
     return this;
}

get speedUS() {
    return this/1.6;
    }
set speedUS(speed) {
    this.speed = speed * 1.6;
    }

}
 
class EVCl extends CarCl {
     constructor(maker, speed, charge) {
          super(maker, speed)
          this.#_charge = charge;//
     }
     
     chargeBattery(chargeTo) {
     this.#charge = chargeTo;//
     return this;
}
accelerate() {
     this.speed += 10;
     this.#charge--;
     console.log(`Speed => ${this.speed} is going at ${this.charge} Km/h`);
     return this;
};

     
}
const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);

rivian 
    .accelerate() 
    .accelerate() 
    .accelerate() 
    .brake() 
    .chargeBattery(50) 
    .accelerate();
 
 */