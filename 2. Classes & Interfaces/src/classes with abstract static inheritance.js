"use strict";
// class DepartmentsNew {
//   // name: string;
//   // above and this are same
//   // public name: string;
//   private employees: string[] = [];
//   // this is a short hand
//   constructor(private readonly id: string, public name: string) {
//     // we dont need to do this.name = name, ....
//     // this.name = name;
//   }
//   addEmployee(employee: string): void {
//     this.employees.push(employee);
//   }
//   describe(this: DepartmentsNew): void {
//     console.log(`Department: id: (${this.id}) ${this.name}`);
//   }
//   printEmployeeInfo(): void {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }
// class ITDepartment extends DepartmentsNew {}
// const itDept = new ITDepartment("ITID1", "IT");
// itDept.describe();
// itDept.addEmployee("Sam");
// itDept.addEmployee("Spurgeon");
// itDept.printEmployeeInfo();
// class DepartmentsNew {
//   // name: string;
//   // above and this are same
//   // public name: string;
//   private employees: string[] = [];
//   // this is a short hand
//   constructor(private readonly id: string, public name: string) {
//     // we dont need to do this.name = name, ....
//     // this.name = name;
//   }
//   addEmployee(employee: string): void {
//     this.employees.push(employee);
//   }
//   describe(this: DepartmentsNew): void {
//     console.log(`Department: id: (${this.id}) ${this.name}`);
//   }
//   printEmployeeInfo(): void {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }
// class ITDepartment extends DepartmentsNew {
//   // admins: string[];
//   constructor(id: string, public admins: string[]) {
//     super(id, "IT");
//   }
// }
// class AccountingDepartment extends DepartmentsNew {
//   constructor(id: string, private reports: string[]) {
//     super(id, "Accounting");
//   }
//   addReport(text: string) {
//     this.reports.push(text);
//   }
//   getReports() {
//     console.log(this.reports);
//   }
// }
// const itDept = new ITDepartment("ITID1", []);
// console.log(itDept);
// itDept.describe();
// itDept.addEmployee("Sam");
// itDept.addEmployee("Spurgeon");
// itDept.printEmployeeInfo();
// const accountingDept = new AccountingDepartment("ACCID1", []);
// console.log(accountingDept);
// accountingDept.describe();
// accountingDept.addEmployee("Jyothi");
// accountingDept.addEmployee("Samuel");
// accountingDept.addReport("Report 1");
// accountingDept.printEmployeeInfo();
// accountingDept.getReports();
// overriding and protected
// class DepartmentsNew {
//   // name: string;
//   // above and this are same
//   // public name: string;
//   protected employees: string[] = [];
//   // this is a short hand
//   constructor(private readonly id: string, public name: string) {
//     // we dont need to do this.name = name, ....
//     // this.name = name;
//   }
//   addEmployee(employee: string): void {
//     this.employees.push(employee);
//   }
//   describe(this: DepartmentsNew): void {
//     console.log(`Department: id: (${this.id}) ${this.name}`);
//   }
//   printEmployeeInfo(): void {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }
// class ITDepartment extends DepartmentsNew {
//   // admins: string[];
//   constructor(id: string, public admins: string[]) {
//     super(id, "IT");
//   }
// }
// class AccountingDepartment extends DepartmentsNew {
//   constructor(id: string, private reports: string[]) {
//     super(id, "Accounting");
//   }
//   // overriding
//   addEmployee(name: string): void {
//     if (name === "Samuel") {
//       console.log("We Can't add you..");
//       return;
//     } else {
//       //  this will throw an error if this.employees is private in parent class. So switch it to protected so it will be accessible to both parent and sub classes
//       this.employees.push(name);
//     }
//   }
//   addReport(text: string) {
//     this.reports.push(text);
//   }
//   getReports() {
//     console.log(this.reports);
//   }
// }
// const itDept = new ITDepartment("ITID1", []);
// console.log(itDept);
// itDept.describe();
// itDept.addEmployee("Sam");
// itDept.addEmployee("Spurgeon");
// itDept.printEmployeeInfo();
// const accountingDept = new AccountingDepartment("ACCID1", []);
// console.log(accountingDept);
// accountingDept.describe();
// accountingDept.addEmployee("Jyothi");
// accountingDept.addEmployee("Samuel");
// accountingDept.addReport("Report 1");
// accountingDept.printEmployeeInfo();
// accountingDept.getReports();
// getters and setters
// class DepartmentsNew {
//   // name: string;
//   // above and this are same
//   // public name: string;
//   protected employees: string[] = [];
//   // this is a short hand
//   constructor(private readonly id: string, public name: string) {
//     // we dont need to do this.name = name, ....
//     // this.name = name;
//   }
//   addEmployee(employee: string): void {
//     this.employees.push(employee);
//   }
//   describe(this: DepartmentsNew): void {
//     console.log(`Department: id: (${this.id}) ${this.name}`);
//   }
//   printEmployeeInfo(): void {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }
// class ITDepartment extends DepartmentsNew {
//   // admins: string[];
//   constructor(id: string, public admins: string[]) {
//     super(id, "IT");
//   }
// }
// class AccountingDepartment extends DepartmentsNew {
//   private lastReport: string;
//   constructor(id: string, private reports: string[]) {
//     super(id, "Accounting");
//     this.lastReport = reports[0];
//   }
//   // getter
//   get mostRecentReport() {
//     if (this.lastReport) {
//       return this.lastReport;
//     }
//     throw new Error("No report found!!");
//   }
//   // setter
//   set mostRecentReport(rep: string) {
//     if (!rep) {
//       throw new Error("Pass Valid Prop!!");
//     }
//     this.addReport(rep);
//   }
//   // overriding
//   addEmployee(name: string): void {
//     if (name === "Samuel") {
//       console.log("We Can't add you..");
//       return;
//     } else {
//       //  this will throw an error if this.employees is private in parent class. So switch it to protected so it will be accessible to both parent and sub classes
//       this.employees.push(name);
//     }
//   }
//   addReport(text: string) {
//     this.reports.push(text);
//     this.lastReport = text;
//   }
//   getReports() {
//     console.log(this.reports);
//   }
// }
// const itDept = new ITDepartment("ITID1", []);
// console.log(itDept);
// itDept.describe();
// itDept.addEmployee("Sam");
// itDept.addEmployee("Spurgeon");
// itDept.printEmployeeInfo();
// const accountingDept = new AccountingDepartment("ACCID1", []);
// console.log(accountingDept);
// accountingDept.describe();
// accountingDept.addEmployee("Jyothi");
// // accountingDept.addEmployee("Samuel");
// // console.log(accountingDept.mostRecentReport);
// accountingDept.mostRecentReport = "Report 2";
// // accountingDept.addReport("Report 1");
// console.log(accountingDept.mostRecentReport);
// accountingDept.printEmployeeInfo();
// accountingDept.getReports();
// Static Methods & Properties
// class DepartmentsNew {
//   // name: string;
//   // above and this are same
//   // public name: string;
//   static fiscalYear: number = 2020;
//   protected employees: string[] = [];
//   // this is a short hand
//   constructor(private readonly id: string, public name: string) {
//     // we dont need to do this.name = name, ....
//     // this.name = name;
//     // accessing static methods and properties within a class
//     console.log(DepartmentsNew.fiscalYear);
//   }
//   // static method
//   static createEmployee(name: string) {
//     return { name };
//   }
//   addEmployee(employee: string): void {
//     this.employees.push(employee);
//   }
//   describe(this: DepartmentsNew): void {
//     console.log(`Department: id: (${this.id}) ${this.name}`);
//   }
//   printEmployeeInfo(): void {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }
// class ITDepartment extends DepartmentsNew {
//   // admins: string[];
//   constructor(id: string, public admins: string[]) {
//     super(id, "IT");
//   }
// }
// class AccountingDepartment extends DepartmentsNew {
//   private lastReport: string;
//   constructor(id: string, private reports: string[]) {
//     super(id, "Accounting");
//     this.lastReport = reports[0];
//   }
//   // getter
//   get mostRecentReport() {
//     if (this.lastReport) {
//       return this.lastReport;
//     }
//     throw new Error("No report found!!");
//   }
//   // setter
//   set mostRecentReport(rep: string) {
//     if (!rep) {
//       throw new Error("Pass Valid Prop!!");
//     }
//     this.addReport(rep);
//   }
//   // overriding
//   addEmployee(name: string): void {
//     if (name === "Samuel") {
//       console.log("We Can't add you..");
//       return;
//     } else {
//       //  this will throw an error if this.employees is private in parent class. So switch it to protected so it will be accessible to both parent and sub classes
//       this.employees.push(name);
//     }
//   }
//   addReport(text: string) {
//     this.reports.push(text);
//     this.lastReport = text;
//   }
//   getReports() {
//     console.log(this.reports);
//   }
// }
// const itDept = new ITDepartment("ITID1", []);
// console.log(itDept);
// itDept.describe();
// itDept.addEmployee("Sam");
// itDept.addEmployee("Spurgeon");
// itDept.printEmployeeInfo();
// const accountingDept = new AccountingDepartment("ACCID1", []);
// console.log(accountingDept);
// accountingDept.describe();
// accountingDept.addEmployee("Jyothi");
// // accountingDept.addEmployee("Samuel");
// // console.log(accountingDept.mostRecentReport);
// accountingDept.mostRecentReport = "Report 2";
// // accountingDept.addReport("Report 1");
// console.log(accountingDept.mostRecentReport);
// accountingDept.printEmployeeInfo();
// accountingDept.getReports();
// // accessing static methods and properties!!
// const employee = DepartmentsNew.createEmployee("Prakash");
// console.log(employee);
// console.log(DepartmentsNew.fiscalYear);
// Abstract Classes..
// abstract class DepartmentsNew {
//   // name: string;
//   // above and this are same
//   // public name: string;
//   // abstract properties:
//   protected abstract age: number;
//   static fiscalYear: number = 2020;
//   protected employees: string[] = [];
//   // this is a short hand
//   constructor(protected readonly id: string, public name: string) {
//     // we dont need to do this.name = name, ....
//     // this.name = name;
//     // accessing static methods and properties within a class
//     // console.log(DepartmentsNew.fiscalYear);
//   }
//   // static method
//   static createEmployee(name: string) {
//     return { name };
//   }
//   addEmployee(employee: string): void {
//     this.employees.push(employee);
//   }
//   abstract describe(this: DepartmentsNew): void;
//   printEmployeeInfo(): void {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }
// class ITDepartment extends DepartmentsNew {
//   // admins: string[];
//   age = 10;
//   constructor(id: string, public admins: string[]) {
//     super(id, "IT");
//   }
//   setAge() {}
//   // Implementing Abstract Method
//   describe() {
//     console.log(`It Department: id: (${this.id})`);
//   }
// }
// class AccountingDepartment extends DepartmentsNew {
//   private lastReport: string;
//   age = 5;
//   constructor(id: string, private reports: string[]) {
//     super(id, "Accounting");
//     this.lastReport = reports[0];
//   }
//   // Implementing Abstract Method
//   describe() {
//     console.log(`Accounting Department: id: (${this.id})`);
//   }
//   // getter
//   get mostRecentReport() {
//     if (this.lastReport) {
//       return this.lastReport;
//     }
//     throw new Error("No report found!!");
//   }
//   // setter
//   set mostRecentReport(rep: string) {
//     if (!rep) {
//       throw new Error("Pass Valid Prop!!");
//     }
//     this.addReport(rep);
//   }
//   // overriding
//   addEmployee(name: string): void {
//     if (name === "Samuel") {
//       console.log("We Can't add you..");
//       return;
//     } else {
//       //  this will throw an error if this.employees is private in parent class. So switch it to protected so it will be accessible to both parent and sub classes
//       this.employees.push(name);
//     }
//   }
//   addReport(text: string) {
//     this.reports.push(text);
//     this.lastReport = text;
//   }
//   getReports() {
//     console.log(this.reports);
//   }
// }
// const itDept = new ITDepartment("ITID1", []);
// console.log(itDept);
// itDept.describe();
// itDept.addEmployee("Sam");
// itDept.addEmployee("Spurgeon");
// itDept.printEmployeeInfo();
// // throws an error because id is protected
// // console.log(itDept.id);
// // This wont throw an error even though its protected because its an abstract property
// console.log("it Department Age: " + itDept.age);
// const accountingDept = new AccountingDepartment("ACCID1", []);
// console.log(accountingDept);
// accountingDept.describe();
// accountingDept.addEmployee("Jyothi");
// // accountingDept.addEmployee("Samuel");
// // console.log(accountingDept.mostRecentReport);
// accountingDept.mostRecentReport = "Report 2";
// // accountingDept.addReport("Report 1");
// console.log(accountingDept.mostRecentReport);
// accountingDept.printEmployeeInfo();
// accountingDept.getReports();
// // accessing static methods and properties!!
// const employee = DepartmentsNew.createEmployee("Prakash");
// console.log(employee);
// console.log(DepartmentsNew.fiscalYear);
// Singleton and Private Constructores.
class DepartmentsNew {
    // this is a short hand
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        // we dont need to do this.name = name, ....
        // this.name = name;
        // accessing static methods and properties within a class
        // console.log(DepartmentsNew.fiscalYear);
    }
    // static method
    static createEmployee(name) {
        return { name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
DepartmentsNew.fiscalYear = 2020;
class ITDepartment extends DepartmentsNew {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
        // admins: string[];
        this.age = 10;
    }
    setAge() { }
    // Implementing Abstract Method
    describe() {
        console.log(`It Department: id: (${this.id})`);
    }
}
//  Singleton instance is nothing but we are limiting to create only one (single) instance or object.
// these singleTon instances can be achieved using private constructors.
//  A private Constructor is a constructor that is only available to only that class.
class AccountingDepartment extends DepartmentsNew {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.age = 5;
        this.lastReport = reports[0];
    }
    // lets create a static method to instanciate this class constructor only once
    static createInstance() {
        const accId = "ACCID1";
        const accReports = [];
        // if(this.instance) {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment(accId, accReports);
        return this.instance;
    }
    // Implementing Abstract Method
    describe() {
        console.log(`Accounting Department: id: (${this.id})`);
    }
    // getter
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found!!");
    }
    // setter
    set mostRecentReport(rep) {
        if (!rep) {
            throw new Error("Pass Valid Prop!!");
        }
        this.addReport(rep);
    }
    // overriding
    addEmployee(name) {
        if (name === "Samuel") {
            console.log("We Can't add you..");
            return;
        }
        else {
            //  this will throw an error if this.employees is private in parent class. So switch it to protected so it will be accessible to both parent and sub classes
            this.employees.push(name);
        }
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    getReports() {
        console.log(this.reports);
    }
}
const itDept = new ITDepartment("ITID1", []);
console.log(itDept);
itDept.describe();
itDept.addEmployee("Sam");
itDept.addEmployee("Spurgeon");
itDept.printEmployeeInfo();
// throws an error because id is protected
// console.log(itDept.id);
// This wont throw an error even though its protected because its an abstract property
console.log("it Department Age: " + itDept.age);
// below will throw an arror because AccountingDepartment constructor is private.
// const accountingDept = new AccountingDepartment("ACCID1", []);
// accessing that static methood that gives us singleton instance.
const accountingDept = AccountingDepartment.createInstance();
const accountingDept2 = AccountingDepartment.createInstance();
console.log(accountingDept);
console.log(accountingDept2);
accountingDept.describe();
accountingDept.addEmployee("Jyothi");
// accountingDept.addEmployee("Samuel");
// console.log(accountingDept.mostRecentReport);
accountingDept.mostRecentReport = "Report 2";
// accountingDept.addReport("Report 1");
console.log(accountingDept.mostRecentReport);
accountingDept.printEmployeeInfo();
accountingDept.getReports();
// accessing static methods and properties!!
const employee = DepartmentsNew.createEmployee("Prakash");
console.log(employee);
console.log(DepartmentsNew.fiscalYear);
