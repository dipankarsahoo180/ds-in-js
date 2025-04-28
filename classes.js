/**
//static and instance in classes
class Car {
  static totalCars = 0; // Static variable

  constructor(model) {
    this.model = model; // Instance variable
    Car.totalCars++; // Increment total cars (shared)
  }

  showModel() {
    // Instance method
    console.log(`Car model: ${this.model}`);
  }

  showTotalCars() {
    // Static method
    console.log(`Total cars created: ${Car.totalCars}`);
  }
  static showTotalCarsStatic() {
    // Static method
    console.log(`Total cars created: ${Car.totalCars}`);
  }
}

const car1 = new Car("Tesla");
const car2 = new Car("BMW");

car1.showModel(); // Output: Car model: Tesla
car2.showModel(); // Output: Car model: BMW

car1.showTotalCars(); // Output: Total cars created: 2
Car.showTotalCarsStatic(); // Output: Total cars created: 2
//Car.showTotalCars(); // Uncaught TypeError: Car.showTotalCars is not a function


//Example of mixin in javascript

//Example of mixin
const mixin = (customClass) => {
  return class extends customClass {
    logName() {
      //can't use function keyword here
      return "Welcome " + this.name;
    }
  };
};

class AvgDetails {
  data = { height: "5.7", weight: 72 };
}

class Person extends mixin(AvgDetails) {
  constructor(name) {
    super();
    console.log(this.data);
    this.name = name;
  }
}

let me = new Person("Lizu sahoo"); //{ height:'5.7', weight:72}
me.data = { height: "5.7", weight: 65 };
console.log(
  me.logName(), //Welcome Lizu Sahoo
  me.name, //Lizu Sahoo
  me.data //{ height:'5.7', weight:65}
);

//Example of multiple mixins
const logMixin = (BaseClass) => {
  return class extends BaseClass {
    log() {
      return `System.debug(${this.message})`;
    }
  };
};

const eventMixin = (BaseClass) => {
  return class extends BaseClass {
    event() {
      return `Firing new ${this.eventName}`;
    }
  };
};
class Apex {
  events = ["fire", "publish", "subscribe"];
}

class User extends logMixin(eventMixin(Apex)) {
  constructor(name, evt) {
    super();
    this.message = name;
    this.eventName = evt;
    this.events.push(this.eventName);
  }
}

let user = new User("Dipankar", "forget");
console.log(user.log(), user.event(), user.events);

//another example by assigning directly
const logMixin1 = {
  log() {
    return `System.debug(${this.message})`;
  },
};

const eventMixin1 = {
  event() {
    return `Firing new ${this.eventName}`;
  },
};

class User1 {
  constructor(name, evt) {
    this.message = name;
    this.eventName = evt;
  }
}

Object.assign(User1.prototype, logMixin1, eventMixin1);
let user1 = new User1("Lizu", "checkpoint event");
console.log(user1.log(), user1.event());
*/

let time;
const myCustomFunction = (cb1,cb2,delay,...args) => {
  console.log(...args)
  clearTimeout(time);//debounce
  time = setTimeout(() => {
    cb1(...args); // Pass all collected arguments to the callback
    cb2(...args)
  }, delay);
}


// Debounce function
function debounce(cb1,cb2, delay,...args) {
  return myCustomFunction(cb1,cb2,delay,...args);
}

// Function that takes multiple arguments
function logUserAction(action, timestamp) {
  console.log(`Action: ${action}, Time: ${timestamp}`);
}
// Function that takes multiple arguments
function logUserAction2(action, timestamp,...args) {
  console.log(`Action: ${action}, Time: ${timestamp} ${args}`);
}

// Create debounced version
const timeNow = new Date().toLocaleTimeString('en-CA');
debounce(logUserAction,logUserAction2, 5000,"Btn-Click", timeNow,"Dipankar","abc",'def');