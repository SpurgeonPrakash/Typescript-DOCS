// Decorators:
// adding a decorator. A decorator is just a function you apply to something for example class.
// function Logger(constructor: Function) {
//   console.log("Logging....");
//   console.log(constructor);
// }

// using a decorator
// Decorators will execute when class is defined. i.e., not when instantiating a class or creating class object.
// @Logger
// class Person {
//   name = "Spurgeon";

//   constructor() {
//     console.log("Creating A Person!!");
//   }
// }

// const person = new Person();
// console.log(person.name);

// We can also create decorator factory which will return a decorator function which lets us configure it when we assign it  as a decorator to something

// lets convert this function into a factory. So now we have a function that returns a new function.
// function Logger(logString: string) {
//   // now we can use this arguments as our likings to configure this returned function
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// // now we have to call the decorator function and we attach this returned function as a decorator function to this class
// // So now we can call this function with a parameter
// @Logger("LOGGING - PERSON")
// class Person {
//   name = "Spurgeon";

//   constructor() {
//     console.log("Creating A Person!!");
//   }
// }

// const person = new Person();
// console.log(person.name);

// function Logger(logString: string) {
//   // now we can use this arguments as our likings to configure this returned function
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   // return function (_: Function) {
//   return function (constructor: any) {
//     const el = document.getElementById(hookId);
//     const p = new constructor(); //this will be a constructor of the attached class in which the decorator is attached. i.e., Person Class.
//     if (el) {
//       el.innerHTML = template;
//       el.querySelector("h1")!.innerText = p.name;
//     }
//   };
// }

// // now we have to call the decorator function and we attach this returned function as a decorator function to this class
// // So now we can call this function with a parameter
// // @Logger("LOGGING - PERSON")
// @WithTemplate("<h1>Hello World</h1>", "app")
// class Person {
//   name = "Spurgeon";

//   constructor() {
//     console.log("Creating A Person!!");
//   }
// }

// const person = new Person();
// console.log(person.name);

// Using Multiple Decorators:
// we can add multiple decorators to a single classes
// function Logger(logString: string) {
//   // now we can use this arguments as our likings to configure this returned function
//   console.log("LOGGER Factory..");

//   return function (constructor: Function) {
//     console.log("LOGGER");
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   // return function (_: Function) {
//   console.log("WithTemplate Factory");
//   return function (constructor: any) {
//     console.log("WithTemplate");
//     const el = document.getElementById(hookId);
//     const p = new constructor(); //this will be a constructor of the attached class in which the decorator is attached. i.e., Person Class.
//     if (el) {
//       el.innerHTML = template;
//       el.querySelector("h1")!.innerText = p.name;
//     }
//   };
// }

// // now we have to call the decorator function and we attach this returned function as a decorator function to this class
// // So now we can call this function with a parameter
// // One question is in which order these decorators execute. They execute bottom up. i.e., WithTemplate, Logger
// // One more thing is that these Factories execute just like a normal js code. Top to bottom. Because, we just called these functions right away. and we got the reference of actual decorator and we passed it to the class. In which these decorator functions will execute bottom to top when we declare it in top to a class.
// @Logger("LOGGING - PERSON")
// @WithTemplate("<h1>Hello World</h1>", "app")
// class Person {
//   name = "Spurgeon";

//   constructor() {
//     console.log("Creating A Person!!");
//   }
// }

// const person = new Person();
// console.log(person.name);

//  Property Decorators:
// function Logger(logString: string) {
//   console.log("LOGGER Factory..");

//   return function (constructor: Function) {
//     console.log("LOGGER");
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   console.log("WithTemplate Factory");
//   return function (constructor: any) {
//     console.log("WithTemplate");
//     const el = document.getElementById(hookId);
//     const p = new constructor();
//     if (el) {
//       el.innerHTML = template;
//       el.querySelector("h1")!.innerText = p.name;
//     }
//   };
// }

// @Logger("LOGGING - PERSON")
// @WithTemplate("<h1>Hello World</h1>", "app")
// class Person {
//   name = "Spurgeon";

//   constructor() {
//     console.log("Creating A Person!!");
//   }
// }

// const person = new Person();
// console.log(person.name);

// function Log(target: any, propertyName: string) {
//   console.log("Property Decorator");
//   console.log(target, propertyName);
// }

// class Product {
//   // Property decorator
//   // Property decorator runs when js registers this class. Not when object is created just like function decorator.
//   @Log
//   title: string;
//   private _price: number;
//   constructor(title: string, price: number) {
//     this.title = title;
//     this._price = price;
//   }

//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Invalid price - Should be positive");
//     }
//   }

//   getPriceWithTax(tax: number) {
//     return this._price * (1 + tax);
//   }
// }

// Accessor and Parameter Decorator.
// function Logger(logString: string) {
//   console.log("LOGGER Factory..");

//   return function (constructor: Function) {
//     console.log("LOGGER");
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   console.log("WithTemplate Factory");
//   return function (constructor: any) {
//     console.log("WithTemplate");
//     const el = document.getElementById(hookId);
//     const p = new constructor();
//     if (el) {
//       el.innerHTML = template;
//       el.querySelector("h1")!.innerText = p.name;
//     }
//   };
// }

// @Logger("LOGGING - PERSON")
// @WithTemplate("<h1>Hello World</h1>", "app")
// class Person {
//   name = "Spurgeon";

//   constructor() {
//     console.log("Creating A Person!!");
//   }
// }

// const person = new Person();
// console.log(person.name);

// // this target (or previosly we named it as a constructor) is a Prototype. Property name is the name of class property in which we added this decorator.
// // property decorator
// function Log(target: any, propertyName: string) {
//   console.log("Property Decorator");
//   console.log(target, propertyName);
// }

// // accessor decorator
// // accessor decorator will be added to accessors like setters and gettors
// // First Parameter: prototype, Second Parameter: name of the accessor(In this case price, Third Parameter: PropertyDescriptor which defines our accessor.)
// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log("Accessor Decorator");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// // method Decorator.
// // A method decorator also recieves 3 arguments. 1.If its a instance method -> Prototype, If its a static method -> constructor function. 2. Name of the method 3. Property Descriptor
// function Log3(
//   target: any,
//   name: string | Symbol,
//   descriptor: PropertyDescriptor
// ) {
//   console.log("Method Decorator");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// // Parameter Decorator
// // Parameter Decorator recieves following arguments. 1. target as above, 2. name, 3.position Of the argument. Here in this case 1.
// function Log4(target: any, name: string | Symbol, position: number) {
//   console.log("Parameter Decorator");
//   console.log(target);
//   console.log(name);
//   console.log(position);
// }

// class Product {
//   // Property decorator
//   // Property decorator runs when js registers this class. Not when object is created just like function decorator.
//   @Log
//   title: string;
//   private _price: number;
//   constructor(title: string, price: number) {
//     this.title = title;
//     this._price = price;
//   }

//   @Log2
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Invalid price - Should be positive");
//     }
//   }

//   // Method Decorator
//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     return this._price * (1 + tax);
//   }
// }

// Order of running decorators.
// First all of them running without we instantiating the class(Product). All these decorators run when we define this class.
// They allow you to do behind the scenes lets us do meta programming like in angular.

// Some decorators for example class Decorators or Method Decorators can retuen something.Note that all decorators can't do this for ex: Property decorator, etc.,.

// Among the below Which decorators support returning a new Constructor are:
// Logger -> Class Decorator
// WithTemplate -> Class Decorator
// Log2 -> accessor(setter) Decorator
// Log3 -> method Decorator

// But (Log -> Property decorator)  and (Log4 -> Parameter Decorator) can also return something but typescript ignores them. They are not usefull or not supported we can say.

function Logger(logString: string) {
  console.log("LOGGER Factory..");

  return function (constructor: Function) {
    console.log("LOGGER");
    console.log(logString);
    console.log(constructor);
  };
}

// lets add a return a value here..
// we can return a new constructor function that replaces the original constructor(Person's constructor).
function WithTemplate(template: string, hookId: string) {
  console.log("WithTemplate Factory");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    // console.log("WithTemplate");
    // const el = document.getElementById(hookId);
    // const p = new originalConstructor();
    // if (el) {
    //   el.innerHTML = template;
    //   el.querySelector("h1")!.innerText = p.name;
    // }
    // here we are returning a class because its a syntatctic suger to these constructor functions.
    return class extends originalConstructor {
      // we can add new functionality.. here..
      // constructor(...args: any[]) {
      constructor(..._: any[]) {
        // getting prev constructor properties into this and extending this constructor to have new functionality. For Example we can move our code above of adding into html code into this constructor.
        super();
        console.log("WithTemplate");
        const el = document.getElementById(hookId);
        // const p = new originalConstructor();
        // now we dont need to call the constructor of Person anymore. We can get it as below using "this".
        if (el) {
          el.innerHTML = template;
          el.querySelector("h1")!.innerText = this.name;
        }
      }
    };
  };
}
// we will get an error below
@Logger("LOGGING - PERSON")
@WithTemplate("<h1>Hello World</h1>", "app")
class Person {
  name = "Spurgeon";

  constructor() {
    console.log("Creating A Person!!");
  }
}

const person = new Person();
console.log(person.name);

// this target (or previosly we named it as a constructor) is a Prototype. Property name is the name of class property in which we added this decorator.
// property decorator
function Log(target: any, propertyName: string) {
  console.log("Property Decorator");
  console.log(target, propertyName);
}

// accessor decorator
// accessor decorator will be added to accessors like setters and gettors
// First Parameter: prototype, Second Parameter: name of the accessor(In this case price, Third Parameter: PropertyDescriptor which defines our accessor.)
// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log("Accessor Decorator");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// method Decorator.
// A method decorator also recieves 3 arguments. 1.If its a instance method -> Prototype, If its a static method -> constructor function. 2. Name of the method 3. Property Descriptor
// function Log3(
//   target: any,
//   name: string | Symbol,
//   descriptor: PropertyDescriptor
// ) {
//   console.log("Method Decorator");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// Log2 and Log3 has access to property descriptor. which contains the following:
// For Log2 -> 1. configurable: true, 2. enumerable(weather we can loop through): false, 3. getter/setter
// for Log3 -> 1. configurable: true, 2. enumerable(weather we can loop through): false, 3. writable: weather we can modify it or not.

// so lets rewrite our log2 and return :

function Log2(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  console.log("Accessor Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
  // lets change it back to false, because here it is not that useful. lets try returning in method decorator.
  return {
    enumerable: false,
    // etc,etc.,
  };
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
  return {};
}

// Parameter Decorator
// Parameter Decorator recieves following arguments. 1. target as above, 2. name, 3.position Of the argument. Here in this case 1.
function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter Decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  // Property decorator
  // Property decorator runs when js registers this class. Not when object is created just like function decorator.
  @Log
  title: string;
  private _price: number;
  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - Should be positive");
    }
  }

  // Method Decorator
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

// lets define a new Decorator and configure it by returning something
// Now, we will build a decorator that will be added to Printer's showMessage method that will automatically binds "this" to surrounding class. No matter where it was called.
function AutoBind(
  // target: any,
  _: any,
  _2: string,
  // methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      // this belongs to whoever calls get method.
      // here get is called by this concrete object to which it belongs.
      // so 'this' will ref to the object in which originally we define this method.
      const boundFunction = originalMethod.bind(this);
      return boundFunction;
    },
  };
  // returning this new configs
  return adjustedDescriptor;
}

class Printer {
  message = "This Works";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const button = document.querySelector("button")!;
const p = new Printer();

// this is the alternative to change the this context to the Printer("p")
// button.addEventListener("click", p.showMessage.bind(p));
// Now we can define a decorator to do this binding job
button.addEventListener("click", p.showMessage);
// as you can see after adding AutoBind decorator it works as expected.
