// function addTwoNUmber(a:number,b:number):number{
//     return a+b;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class implementing interface
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.empName = name;
    }
    Employee.prototype.getSalary = function (input) {
        return input * 5;
    };
    return Employee;
}());
// Person inheriting Employee
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor(code:number,name:string){
    //     super(code,name)
    // }
    Person.prototype.displayName = function () {
        console.log("".concat(this.empCode, ":").concat(this.empName));
    };
    return Person;
}(Employee));
var person = new Person(1, 'name');
person.displayName();
console.log(person.getSalary(5));
