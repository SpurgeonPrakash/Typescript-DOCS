"use strict";
class Departments {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const dept = new Departments("Spurgeon House");
console.log(dept);
// We can do this Since it is public by default.
dept.name = "tara";
dept.describe();
const deptCopy = { describe: dept.describe };
// will throws an error because this is of type Departments
// deptCopy.describe();
// const spurgeonDept = new Departments("spurgeon");
// const samDept = new Departments("sam");
dept.addEmployee("Sam");
dept.addEmployee("Spurgeon");
// this will throw an error. Private variables can only be accessed using member functions
// dept.emplyees[2] = "Jyothi"
dept.printEmployeeInfo();
// shorthand for initializing class Members:
class DepartmentsOne {
    // name: string;
    // above and this are same
    // public name: string;
    // private employees: string[] = [];
    // this is a short hand
    constructor(name, employees) {
        this.name = name;
        this.employees = employees;
        // we dont need to do this.name = name, ....
        // this.name = name;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const dept1 = new DepartmentsOne("Spurgeon House", [
    "Gnan",
    "Prakash",
]);
console.log(dept1);
// dept1.addEmployee("Sam");
// dept1.addEmployee("Spurgeon");
dept1.printEmployeeInfo();
// readonly usage.
class DepartmentsTwo {
    // name: string;
    // above and this are same
    // public readonly name: string;
    // private employees: string[] = [];
    // this is a short hand
    constructor(name, employees) {
        this.name = name;
        this.employees = employees;
        // we dont need to do this.name = name, ....
        // this.name = name;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const dept2 = new DepartmentsTwo("Spurgeon House", [
    "shalem",
    "raj",
]);
console.log(dept2);
// dept2.addEmployee("Sam");
// dept2.addEmployee("Spurgeon");
dept2.printEmployeeInfo();
// -------------------------------------------------------------------------------------
// class Employee {
//   public empName: string;
//   protected empCode: number;
//   constructor(name: string, code: number) {
//     this.empName = name;
//     this.empCode = code;
//   }
// }
// class SalesEmployee extends Employee {
//   private department: string;
//   constructor(name: string, code: number, department: string) {
//     super(name, code);
//     this.department = department;
//   }
//   getEmpCode() {
//     return this.empCode;
//   }
// }
// class AnotherSalesEmployee extends SalesEmployee {
//   constructor(name: string, code: number, department: string) {
//     super(name, code, department);
//   }
//   // throws an when error accessing private members of SalesEmployee
//   giveDept() {
//     return this.department;
//   }
// }
// let emp = new SalesEmployee("John Smith", 123, "Sales");
// console.log(emp.getEmpCode());
// const anotherEmp = new AnotherSalesEmployee("John Doe", 143, "Programming");
// // throws an error.
// console.log(anotherEmp.giveDept());
// // Diff between Private and Protected.
// class A {
//   private x: number;
//   protected y: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
//   getX(): number {
//     return this.x;
//   }
//   getY(): number {
//     return this.y;
//   }
// }
// class B extends A {
//   // constructor(a: number, b: number) {
//   //   // super(a, b);
//   // }
//   multiply(): number {
//     // Here there will be no access for x untill unless you use
//     return this.x * this.y;
//   }
// }
// const mul = new B(4, 5);
// console.log(mul.multiply());
