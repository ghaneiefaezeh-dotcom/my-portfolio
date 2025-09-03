//console.log("hello");
//var x=2
//console.log(x);
//let y=5
//console.log(y*2);
//const z="mahdi";
//console.log(object);
//let name= "mahdi";
//const age= 25;
//const rate=5.6;
//const isCold= true;
//let firstname= undefined;
//let lastname= null;
//refrence data type
//array
// let numbers =[5,9,1];
// numbers[3]=15
// console.log(numbers);
//object
// const person= {
//     name:"nader",
//     age: 30,
//     gender: "male",
//     address:{
//         country: "iran",
//         city: "tehran"

//     },
//     hobbies:["watchinng movie", "codding"]

//     }
//     // console.log(person.address.city);
//     console.log(person.hobbies[1]);

//function
// function sayhello(name, age){
//     console.log("hello my name is " + name + " and  im " + age );
// }
// sayhello("mehdi" , 35);
// sayhello("mehdi" , 35);
// sayhello("mehdi" , 35);
// function square(number){
//     return number *number;

// }
// console.log(square(2));
// let num1 = 4;
// let num2 = 2;
// result = num1 + num2;
// result = num1 - num2;
// result = num1 * num2;
// result = num1 /num2;
// console.log(result); 
// result = Math.round(2.8);
// result = Math.ceil(2.8);
// result = Math.ceil(2.3);
// result = Math.floor(2.3);
// result = Math.sqrt(64);
// result = Math.pow(2, 3);
// result = Math.abs(-2.7);
// result = Math.min(2,3,5,15,1,9);
// result = Math.random();
// result = Math.floor( Math.random() *20); 
// console.log(result);
// let firstname = "mahdi";
// let lastname = "kazemi";
// let age = 30;
// let job = "web developer";
// result = "hello my name is " + firstname + " " +lastname + " and i'm " + age + " and i work as a " + job;
// result = `hello my name is ${firstname} ${lastname} and i'm ${age} and i work as a ${job}`;
// console.log(result);
// let flname = "mahdi kazemi"
// let str = "hello my name is mahdi kazemi";
// result = flname.length;
// result = flname[flname.length -1];
// result =flname.indexOf(`kazemi`);
// result =str.split(" ");
// result =flname.replace("mahdi", "babak");
// console.log(result);
// let number = 1;
// if(number > 1){
//     console.log("over one");
// }
// else if(number===1){
//     console.log("number is one");
// }
// else{
//     console.log("under one");
// }
// let isRich = true;
// let isKind = true;
// if(isRich && isKind){
//     console.log("it's ok");
// }
// Number =3;
// switch(Number){
//     case 1:
//         console.log("one is ok");
//         break;
//     case 2:
//         console.log("two is ok");
//         break; 
//     default:
//         console.log("enter a number between 1-2");  
// }
// let i = 0;
// while(i<5){
//     console.log("hello word");
//     i = i + 1;
// }
// while(i<50){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
//     i++;
// }
// for(let i =0; i<=50; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }
// let numbers =[5, 12, 1, 8, 9, 11, 4, 25, 34, 51,];
// for(let number of numbers){
//     if(number === 11){
//         console.log(`${number} found!!`);
//     }
   

// }
// let person = {
//     name:"mahdi",
//     age: 30,
//     fcolor: "blue",
//     fnumber: 7,
//     gender: "male"
// };
// // for(let pkey in person){
// //     console.log(pkey);
// // }
// for(let pkey in person){
//     console.log(`${pkey}: ${person[pkey]}`);
// }
// let numbers =[5, 12, 1, 8, 9, 11, 4, 25, 34, 51,];
// for(let number in numbers){
//     console.log(`${number}:${numbers[number]}`);
    
// }
  // let temp = [1,2,4];
  // let numbers = new Array(2,5,3,24,51,7,-8);
  // let result;
  // result = numbers.length;
//   console.log(result);  
// numbers.push(150);
// numbers.unshift(200);
// numbers.pop();
// result = numbers.shift();
// numbers.splice(2, 0, 170);
// result = numbers.splice(4, 1);
// result = numbers.splice(3, 3);
// result = numbers.concat(temp);
// result = numbers.sort(function(x, y){
//     return x - y;
// })
// result = numbers.sort(function(x, y){
//     return y - x;
// })
// result = numbers.sort((x, y)=> x - y);
// result = numbers.filter(function(number){
//     return number > 0;
// });
// result = numbers.filter((number) => number > 0);
// result = numbers.map(function(number){
//     return `<li>${number}</li>`;
// });
// result = numbers.filter((number) => number > 0).map((number) => `<li>${number}</li>`);
// result = `<ul>${result.join(``)}</ul>`;
//   console.log(numbers);
//   console.log(result); 
// let sum = 0;
// for(let number of numbers){
//     sum += number;
   
// }
// result = sum;
// console.log(result);
// result = numbers.reduce(function(sum, cvalue){
//     return sum + cvalue
// });
// console.log(result);
// result = numbers.reduce((sum, cvalue) => sum + cvalue);
// console.log(result);
// function sum(a,b){
//   return a + b;
// }
// console.log(sum(1,2));
// let result = function(a,b){
//   return a + b;
// }
// console.log(result(2,3));

// let arr = [1,2,3,4];
// let result = arr.reduce(function(a,b){
//   return a + b;
// });
// console.log(result);
function sum(a, ...result){
  let sum = 0;
  for(let item of result){
    sum += item;
  }
  return sum;
}
console.log(sum(1,2,3,4,5,6));

// function sum( ...result){
//   let sum = 0;
//   for(let item of result){
//     sum += item;
//   }
//   return sum;
// }
// console.log(sum(1,2,3,4,5,6));
// function Person(fname,lname){
//   this.firstname = fname;
//   this.lastname = lname;
//   this.getFullName = function(){
//     return `${this.firstname} ${this.lastname}`
//   }
// }
// let mahdi = new Person("mahdi","kazemi");
// console.log(mahdi.getFullName());
// Person.prototype.getName = function(){
//     return `${this.firstname} ${this.lastname}`
//   }
//   console.log(mahdi.getName);
// class Person{
//   constructor(fname, lname, age){
//     this.firsname = fname;
//     this.lastname = lname;
//     this.age = age;
//   }
//   sayhello(){
//     return `hi my name is ${this.firsname} ${this.lastname} and i'm ${this.age}`;
//   }
// }
// let mahdi = new Person("mahdi","kazemi", 28);
// console.log(mahdi.sayhello());
// class Animal{
//   constructor(fname, lname, age, color){
//     this.firsname = fname;
//     this.lastname = lname;
//     this.age = age;
//     this.color = color;
// }
// eat(){
//   console.log(`i am ${this.firsname} ${this.lastname} and eating`);
//   } 
//   walk(){
//     console.log(`i am ${this.firsname} ${this.lastname} and eating`);
//   }
// }
// class Dog extends Animal{
//   constructor(firsname, lastname){
//     super(firsname, lastname);
//   }
// }
// class Cat extends Animal{
//   constructor(firsname, lastname){
//     super(firsname, lastname);
//   }
// }

// let dog = new  Dog("dog", "1");
// console.log(dog.walk());
// const birthday = new Date(1990, 11, 2,0, 17, 35, 21);
// console.log(birthday.getFullYear());
// console.log(birthday.getMonth());
// console.log(birthday.getDate());
// console.log(birthday.getDay());
// console.log(birthday.getHours());
// console.log(birthday.getMinutes());
// console.log(birthday.getSeconds());
// function formatDate(dateObject){
//   const parts ={
//     year:dateObject.getFullYear(),
//     month:dateObject.getMonth() + 1,
//     date:dateObject.getDate(),
//     hour:(dateObject.getHours() % 12) || 12,
//     minute:dateObject.getMinutes().toString().padStart(2, "0"),
//     amOrpm:dateObject.getHours() <12 ?"AM" :"PM"

//   }
//   return`${parts.year}/${parts.month}/${parts.date} ${parts.hour}: ${parts.minute} ${parts.amOrpm}`;
// }
// const myDate = new Date(1990, 12, 1, 17, 5);
// const myDateFormated = formatDate(myDate);
// console.log(myDateFormated);
// function formatDate(dateObject){

// }
// const myDate = dayjs("1990-7-23 17:24");
// console.log(myDate.format("YYYY/M/D h:mm A"));
// window.console.log("hello");
// window.alert("hello word");
// const input = window.prompt("add a number: ");
// if(window.confirm("are you sure?")){
//   console.log("yes");
// }
// else{
//   console.log("no");
// }
// let result;
// result = window.location;
// console.log(result);
// result = window.navigator;
// console.log(result);
// result = window.navigator.appVersion;
// console.log(result);
// result = window.document;
// console.log(result);
const url ='https://jsonplaceholder.typicode.com/todos/1';
const request = new XMLHttpRequest();
request.open('GET','data.jason');
request.send();

request.onload = function(){
  console.log(request);
}







