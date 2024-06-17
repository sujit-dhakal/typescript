// function addTwoNUmber(a:number,b:number):number{
//     return a+b;
// }

// console.log(addTwoNUmber(1,2))

// let age: number = 10

// console.log(age)

// // object
// interface Employee{
//     id:number;
//     name: string;
// }

// const employee: Employee = {
//     id: 1,
//     name: 'hello',
// }

// for(const key in employee){
//     console.log(`${key}: ${employee[key as keyof Employee]}`);
// }

// // array
// let arrayOfElements: (string | number)[] = [1,2,'hello'];

// for(const index in arrayOfElements){
//     console.log(arrayOfElements[index])
// }


// let arrayOfElement: Array<string | number> = [1,2,'hello'];

// for(const index in arrayOfElements){
//     console.log(arrayOfElements[index])
// }
//  tuples
  // it can contain two or more values of different datatypes

// let employeeTuple:[number,string,boolean,number] = [1,'name',true,4]
// for(const index in employeeTuple){
//     console.log(employeeTuple[index])
// }

// enum
    // it is a datatype that allows you to define a set of named constants which can either be numeric or  string

// enum Direction{
//     Up,
//     Down,
//     Left,
//     Right
// }

// enum Direction{
//     Up="up",
//     Down="down",
//     Left="left",
//     Right="right"
// }

// let dir: Direction = Direction.Up
// console.log(dir)
// console.log(Direction["Up"])

//Union

// let code: (string | number)

// code = 5
// console.log(code)
// code = "hello"
// console.log(code)

// Any

// let code : any

// code = 1
// console.log(code)
// code = "hwllo"
// console.log(code)
// code = true
// console.log(code)

//void

// function sayHi(): void{
//     console.log("hello world")
// }

// sayHi()

//never

// function sayHi(): never{
//     while(true){
//         console.log("always execute never ends");
//     }
// }

// sayHi()

// switch

// let day:number = 4

// switch(day){
//     case 0:
//         console.log("not executed")
//         break
//     case 4:
//         console.log("executed")
//         break
// }

// for in returns index

// let numbers: number[] = [1,2,3,3,4]

// for(const i in numbers){
//     console.log(i)
// }

// for of returns element

// let numbers: number[] = [1,2,3,3,4]

// for(const value of numbers){
//     console.log(value)
// }

//functions
// function without a name is anonymous function
// function with

// let sum = function(a:number,b?:number):number {
//     return a+(b??0)
// }
// let result:number = sum(1,2)
// console.log(result)

// arrow function

// let addTwoNUmber = (x:number,y:number):number =>{
//     return x+y
// }
// console.log(addTwoNUmber(1,2))

// rest parameter

// function greeting(greeting:String,...names:string[]):string{
//     return `${greeting} ${names.join(',')}`
// }
// console.log(greeting('Hello',"ab","cd"))

//interface

interface IEmployee{
    empCode:number;
    empName:string;
    getSalary(input:number):number;
}

// class implementing interface
class Employee implements IEmployee{
    empCode: number;
    empName: string;
    constructor(code:number,name:string){
        this.empCode = code
        this.empName = name
    }
    getSalary(input: number):number{
        return input*5
    }
}

// Person inheriting Employee
class Person extends Employee{
    displayName():void{
        console.log(`${this.empCode}:${this.empName}`)
    }
}
 const person = new Person(1,'name')
 person.displayName()
 console.log(person.getSalary(5))