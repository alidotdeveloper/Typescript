// enum Size {small,medium,large}

// let mySize : Size = Size.medium
// console.log(mySize)

// function myfuc(income:number, abc=2020):number{
  
// if(abc<5000)
// return income*1.2;
// return income *1.3

// }


// // myfuc(1000)
// type Employee = {
//     readonly id:number,
//     name:string,
//     retire:(date:Date)=> void

// }

// let employee : Employee = {
//    id:1,
//    name:'ali',
//    retire:(date:Date)=>{
//     console.log(date)
//   }}
// union type
let weight2 : number | string;
//   function kgToLbs(weight: number | string) : number{
//     //narrow
//     if (typeof weight === 'number'){
//         return weight * 2.3;
//     }else{
//         return parseInt(weight) * 2.2;
//     }
//   }

// type draggable = {
//     drag:()=> void
// }

// type Resizable = {
//     resize:() => void
// }

// type uiwid = draggable & Resizable;
// let textBox: uiwid = {
//     drag :()=>{},
//     resize:()=>{}

// }


// literal 
type Quantity = 50|100
let qunatity: Quantity  = 100

// nullable types

// function greet(name:string | undefined){
//     if(name)
//     console.log(name.toLocaleUpperCase())
//     else{
//         console.log('Hola!')
//     }
// }
// greet(undefined)

// type customer = {
//     birthday? : Date
// }

// function getcustomer(id:number) : customer | null | undefined {
//     return id === 0 ?  null : {
//         birthday: new Date()
//     };
//     }

//     let customer = getcustomer(1);

//     console.log(customer?.birthday?.getFullYear())


//enum
// enum cars{
//   ty =1,
//   audi,
//   honda  
// }

// let model = cars.honda;
// console.log(model)

// //simple type
// let myname: string = "ali"
// //also we can write it as well
// let mynam = "ali"

// // array

// const names: string[] = []
// names.push("ali")

// // tuples

// let mytuple : [number, string, boolean]

// mytuple = [1,'ali', true]

// const model : {name:string, model:string, year:number} = {
// name : "audi",
// model : 'a55',
// year :  2026
// }


// Aliases
// type  carYear = number
// type carType = string
// type carModel = string

// type Car = {
//     year : carYear,
//     type: carType,
//     model: carModel
// }

// const CarYear : carYear = 2001;
// const CarModel : carModel = 'audi'
// const  CarType : carType = 'A7'

// const car: Car = {
//     year: CarYear,
//     type: CarType,
//     model: CarModel
//   };

//   console.log(car)


//function
// function getTime(): number {
//     return new Date().getTime();
// }    
// console.log(getTime())

// function

// function myfunc(): number{
//   return new Date().getTime();
// }
// console.log(myfunc());

// }

// aliase 

// type employee ={
//    id : number,
//    name: string,
//    retire: (date:Date)=> void
// }

// let Employee: employee={
//   id:1,
//   name:'ali',
//   retire : (date :Date)=>{
//     console.log(date)
//   }  
// } 

//union type
//let myfd : number | string
// myfd = 'ali'
//myfd = 60

// // intersection type 
// let myfd : number & string

// type drag = {
//     dr: ()=> void
// }

// type size={
//     sz :()=> void
// }

// type texbox = drag & size

// let ui : texbox = {

//     dr : ()=>{},
//     sz : ()=>{}

// }

//literal type
// type Qty =  50|100
// let quantity : Qty = 50


