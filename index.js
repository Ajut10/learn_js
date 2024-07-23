// varibales
// var
// var x = 90;
// console.log(x);
// var x=100;
// console.log(x);

// // let
// let y=900;
// console.log(y);
//  y=100;
// console.log(y);

// const
// const z=234;

// console.log(z);

// Data types
// string
// const output ="hash bro";
// console.log(output);
// console.log(typeof output);

// number
// const rem=134525433452452342;
// console.log(rem);
// console.log(typeof rem);

// const bro = 12.23;
// console.log(bro);
// console.log(typeof bro);

// undefined
// let a;
// console.log(a);
// console.log(typeof a);

// null
// let nm= null;
// console.log(nm);
// console.log(typeof nm);

// boolean
// const hg=true;
// console.log(hg);
// console.log(typeof hg);

// bigint
// const result=23454543635654653n;
// console.log(result);
// console.log(typeof result);

// symbol
// const output=Symbol("sfsa");
// console.log(output);
// console.log(typeof output);

// let x =8.68;
// console.log(x);
// console.log(typeof x);

// type conversions
// const result = "123";
// const result = 123;
// const output = Number(result);
// const output= parseInt(result);
// const output= parseFloat(result);
// const output = String(result);
// const output = result.toString();
// console.log(output);
// console.log(typeof output);

// const ismarried = false;
// const ans = String(ismarried);
// console.log(ans);
// console.log(typeof ans);

// object

// const obj ={
//     name:"ramo",
//     age:34,
//     isMarried:false,
//     occupation:"dancer",
// };
// console.log(obj);
// console.log(typeof obj);

// const arr =[1,2,3,4,5];
// console.log(arr);
// console.log(typeof arr);

// const date = new Date();
// console.log(date);
// console.log(typeof date);

// // done automatically
// const num =1+"1";
// console.log(num);
// console.log(typeof num);

// const subu=4-"2";
// console.log(subu);
// console.log(typeof subu);

// // string method
// const result = "helo world";

// // length
// console.log(result.length);

// // charAt
// console.log(result.charAt(2));

// // indexOf
// console.log(result.indexOf("o"));
// // lastindexOf
// console.log(result.lastIndexOf("l"));

// // lowercase
// console.log(result.toLowerCase());

// // touppercase
// console.log(result.toUpperCase());

// // replace
// console.log(result.replace("world","everything"));

// // includes
// console.log(result.includes("world"));

// // slice
// console.log(result.slice(1,6));

// // concat
// console.log(result.concat("sleepy"));

// let output ="             hello bidarthi";
// console.log(output.trim());

// // spilt
// console.log(result.split(" "));

// concatination
// let x ="helo world";
// let y=" everything";
// console.log(x+y);

// const a =90;
// const b =80;

// const result =a+b;

// console.log("the sum of two number is"+result);
// // template literals
// console.log(`the sum of two number is : ${result}`);

// let y= 90;
// y= y+10;
// console.log(y);

// let x= 90;
// x+=50;
// console.log(x);

// let a = 10;
// let b = 5;
// let c="10";

// console.log(a==c);
// console.log(a===c);
// console.log(a!=b);
// console.log(a!==c);

// let ageGroup =19;
// console.log(ageGroup>=18?"eligible":"uneligible");

// let x="0";
// let y= +x;
// console.log(y);
// console.log(typeof y);

// const obj={
//     name: "John",
//     ageGroup: 18,
// };
// delete obj.name;
// console.log(obj);

// let email = "john@example.com";
// let password = "password";

// if(email === "john@example.com"&&password==="password"){
//     console.log("login suceessfully");

// }
// else{
//     console.log("login unauthenticated");
// }

// if(email !== "john@example.com" || password !== "pasword"){
//     console.log("login unauthenticated");
// }

// see grade check
// let grade =85;
// if(grade>=90&&grade<=100){
//     console.log("Grade: A" );
// }else if(grade>=80&&grade<=90){
//     console.log("Grade: B" );
// }else if(grade>=70&&grade<=80){
//     console.log("Grade: C" );
// }else{
//     console.log("Grade: NG" );
// }

// let weather = "sunny";

// if(weather==="sunny"){
//     console.log(weather);
// }
// else if(weather==="winter"){
//     console.log(weather);
// }
// else if(weather==="rainy"){
//     console.log(weather);
// }
// else{
//     console.log("invalid weather");
// }

// switch
// let  role = "super admin";
// switch (role) {
//     case "super admin":
//         console.log(role);
//         break;
//     case "buyer":
//         console.log("buyer");;
//         break;
//     case "seller":
//         console.log("seller");
//         break;
//     default:
//         console.log("invalid role");
//         break;
// }

// let day = "Sun";
// let date = new Date().getDay();
// // console.log(date);
// switch (date) {
//     case 0:
//         console.log("sun");
//         break;
//     case 1:
//         console.log("Mon");
//         break;
//     case 2:
//         console.log("Tue");
//         break;
//     case 3:
//         console.log("Wed");
//         break;
//     case 4:
//         console.log("Thu");
//         break;
//     case 5:
//         console.log("Fri");
//         break;
//     case 5:
//         console.log("Sat");
//         break;

//     default:
//         console.log("no date");
//         break;
// }

// let status =200;

// switch (status) {
//     case 201:
//     console.log("created");
//     break;
//     case 400:
//         console.log("Bad request");
//         break;
//     case 401:
//         console.log("Unauthorized");
//         break;
//     case 403:
//         console.log("Forbidden");
//         break;
//     case 500:
//         console.log("Internal Server Error");
//         break;
//     case 200:
//         console.log("OK");
//         break;
//     default:
//         console.log("no status");
//         break;

// }

// loop

// let i =1;
// let b =3
// for(;i<10;i++){
//     console.log(  `i love javascript ${i}`);
// }

// for(let i=1;i<=10;i++){
//     console.log( `3*${i}=${3 * i}`);
// }

// for (let i=1;i<=20;i++){
//     if(i%2 ===0){
//         console.log(`even number ${i}`);
//     }else{
//         console.log(`odd number ${i}`);

//     }
// }

// const arr = [3,2,4,5,6,7,8,9,10,11];
// let sumy =0;
// for (let i=0;i<arr.length;i){
//     sumy += arr[i];

// }
// console.log("asd"+sumy);

// let i=0
// while(i<=0  ){
//     console.log(i);
//     i++;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7,"abc"];
// console.log(arr);
// console.log(arr.length);
// console.log(typeof arr);

// const arr =[3,2,4,5,1,7,8];
// console.log(arr.length);
// console.log(arr.push(1));
// let result = arr.pop();
// console.log(arr);

// // shift

// arr.shift();
// console.log(arr);

// // unshift
// arr.unshift(1);
// console.log(arr);

// // includes
// let remove =arr.includes(1);
// console.log(remove);

// join
// const out =['a', 'b', 'c'];

// console.log(out.join('-'));
// console.log(out.join(','));
// console.log(out.join(' '));
// console.log(out.join(' '));

// splice
// const jorr =['a', 'b', 'c','d'];
// jorr.splice(1,3);
// console.log(jorr);

// slice
// let result = [1,2,3,4,5,6,7,8 ,3,9];
// let pov = result.slice(1,4);
// console.log(pov);

// //
// let prr = result.indexOf(3);
// console.log(prr);

// // last indexof
// let brr= result.lastIndexOf(3);
// console.log(brr);

// let arr = [];
// let sum =0;
// for (let i=1; i<=10; i++){
//     arr.push(i);
//     // sum += arr[i];
// }
// console.log(arr);

// for (let i=0; i<arr.length; i++) {
//     sum += arr[i];}

//     let result= 2*sum;
// console.log(`sum=${sum} multy=${result}`);

// object
// const person = {
//   name: "John",
//   age: 34,
//   occupation: "farmworker",
//   education: "business",
//   isMarried: false,
//   address: {
//     street: "bagbazar",
//     city: "ktm",
//     country: "Usa",
//     planet: {
//       name: "earth",
//     },
//   },
//   gree: function () {
//     console.log(`My Name: ${this.name} and My age: ${this.age}`);
//   },
// };
// const {
//   name,
//   age,
//   occupation,
//   education,
//   isMarried,
//   address: { street, city, country },
// } = person;
// // person.gree();
// console.log(name, age, occupation);
// console.log(person.address);
// console.log(person);

// function
// function myfunction(){
//     console.log("my function");
// }
// myfunction();

// function urfunc(a,b){
//     return a+b;
// }
// console.log(urfunc(3,4));

// function area(r){
//     return Math.PI * r* r ;
// }
// let result=area(67);
// console.log(`area = ${result}`);

// Calcuate total
// function CalcuateTotal(cartitems, taxrate) {
//   let total = 0;
//   for (let i = 0; i < cartitems.length; i++) {
//     total += cartitems[i].price * cartitems[i].quantity;
//   }
//   total += taxrate * total;
//   return total;
// }

// let cart = [
//     {
//         name: "Dr Cake",
//         price: 30000,
//         quantity:2,
//     },{
//         name: "Dr Date",
//         price: 3000,
//         quantity: 3,
//     }
// ];


// const result =CalcuateTotal(cart, 0.23);
// console.log(`Total: ${result}`);

// function myfunc(){
//     let a = prompt("Enter first Number?");
//     let b = prompt("Enter second Number?");
//     let result = Number(a)+Number(b);
//     if(result){
//         alert(`Sum of two number is : ${result}`);

//     }
// }
// myfunc();

// global scope
// var x = 90;
// let y = 180;
// const z= 32;

// function myfunc(){
//     console.log(x, y,z);
// }
// myfunc();

// function scope
// function myfunc(){
//     var x = 90;
//     let y = 180;
//     const z= 32;
//     console.log(x, y,z);
// }
// myfunc();
// function myfunc(){
//     if(true){
//     var x = 90;
//     let y = 180;
//     const z= 32;
//     console.log(y);
//     console.log(z);
//     }
//     console.log(x);
         
// }
// myfunc();

// Dom
// console.log(document.body);
// let result = document.getElementById("h1");
// // console.log(result);
// result.innerHTML ="i have a many people";
// result.style.color= "green";
// result.style.textAlign="center";

// let output = document.getElementsByClassName("myklass")[0];
// // console.log(output);
// output.innerHTML = "you have a few people";
// output.style.color= "blue";
// output.style.textAlign="center";

// let put = document.getElementsByClassName("myklass");
// // console.log(output);
//  put[1].innerHTML = "we have a few people";
//  put[1].style.color= "brown";
//  put[1].style.textAlign="center";

// let show = document.getElementsByTagName("span");
// console.log(show[0]);
//  show[0].innerHTML = "she has a few people";
//  show[0].style.color= "brown";
//  show[0].style.textAlign="center";
 
//  let down = document.getElementsByTagName("span");
//  console.log(down[1]);
//   down[1].innerHTML = "he has a few people";
//   down[1].style.color= "brown";
//   down[1].style.textAlign="center";


// let z =document.getElementsByName("password");
// console.log(z[0]);

// let y =document.querySelector("#btnAdd");
// console.log(y);
// y.style.backgroundColor="blue";
// y.style.color="white";
// y.style.textAlign="center";
// y.setAttribute("Class","meroKlass");
// console.log(y.getAttribute("Class"));
// let h =document.querySelector(".btnDelete");
// console.log(h);
// h.style.backgroundColor="red";
// h.style.color="white";
// h.style.padding="4vmax";
// h.style.textAlign="center";
// function addTask(){
// let display =document.createElement("h1");
// display.innerHTML="this is neew";
// // document.body.append(display);
// document.body.prepend(display);
// }
// // addTask();
// y.onclick=addTask;

// function removeTask(){
//     let h1 =document.querySelector("h1");
//     h1.remove();
// }
// h.onclick=removeTask;

// let cons=document.querySelectorAll("button");
// // console.log(cons);
// cons[0].innerHTML="Press Me";
// cons[0].style.background="Red";
// cons[0].style.color="White";
// cons[0].style.padding="2 vmax 4vmax";
// cons[0].style.border="none";

// let output=document.querySelectorAll("button");
// output[1].innerHTML="Touch Me";
// output[1].style.background="blue";
// output[1].style.color="White";
// output[1].style.padding="2 vmax 4vmax";
// output[1].style.border="none";

// function myfunc(name,age){
//   console.log(`Hello mero name ho ! ${name} ra mero umer ${age}` );  

// }
// myfunc("kuire",23);
// const meFunc = (name,age)=>{
//   console.log(`Hello mero name ho ! ${name} ra mero umer ${age}`);
// }
// meFunc("kuire",23);

// advance array methods
// let newArr=[4,5,32,3,5,243,43];

//!find method
// // const myfunc=(value,index)=>{
// //   return value>6;
// // };

// // let output =newArr.find((value,index)=>{
// //      return value>6;
// //    } );

// let output =newArr.find((value,index)=> value>6
//     );
// console.log(output);


// const products = [{id:1,name:"Dr Mush", price:435,instock:true},
//                   {id:2,name:"Dravour", price:432, instock:false},
//                   {id:3,name:"Fale", price:23412, instock:true},
//                   {id:4,name:"Rise", price:2354,instock:true}];

// ans=products.find((value,index) => value.instock);
// console.log(ans);


// // !filter method
// let newArr=[4,5,32,3,5,243,43];


// let output =newArr.filter((value,index)=> value>6
//     );
// console.log(output);


// const products = [{id:1,name:"Dr Mush", price:435,instock:true},
//                   {id:2,name:"Dravour", price:432, instock:false},
//                   {id:3,name:"Fale", price:23412, instock:true},
//                   {id:4,name:"Rise", price:2354,instock:true}];

// let ans=products.filter((value,index) => !value.instock);
// console.log(ans);

// // !some method
// let newArr=[4,5,32,3,5,243,43];


// let output =newArr.some((value,index)=> value>6
//     );
// console.log(output);


// const products = [{id:1,name:"Dr Mush", price:435,instock:true},
//                   {id:2,name:"Dravour", price:432, instock:false},
//                   {id:3,name:"Fale", price:23412, instock:true},
//                   {id:4,name:"Rise", price:2354,instock:true}];

// let ans=products.some((value,index) => !value.instock);
// console.log(ans);
// !every method
// let newArr=[4,5,32,3,5,243,43];


// let output =newArr.every((value,index)=> value>6
//     );
// console.log(output);


// const products = [{id:1,name:"Dr Mush", price:435,instock:true},
//                   {id:2,name:"Dravour", price:432, instock:false},
//                   {id:3,name:"Fale", price:23412, instock:true},
//                   {id:4,name:"Rise", price:2354,instock:true}];

// let ans=products.every((value,index) => !value.instock);
// console.log(ans);

// !foreach

//  let newArr=[4,5,32,3,5,243,43];

// let output =newArr.forEach((value,index)=> value*6
//     );
// console.log(output);


// const products = [{id:1,name:"Dr Mush", price:435,instock:true},
//                   {id:2,name:"Dravour", price:432, instock:false},
//                   {id:3,name:"Fale", price:23412, instock:true},
//                   {id:4,name:"Rise", price:2354,instock:true}];

// let ans=products.forEach((value,index) => value.nawm);
// console.log(ans);

// !map
//  let newArr=[4,5,32,3,5,243,43];

// let output =newArr.map((value,index)=> value*2
//     );
// console.log(output);


// const products = [{id:1,name:"Dr Mush", price:435,instock:true},
//                   {id:2,name:"Dravour", price:432, instock:false},
//                   {id:3,name:"Fale", price:23412, instock:true},
//                   {id:4,name:"Rise", price:2354,instock:true}];

// let ans=products.map((value,index) => value.name);
// let display=document.createElement("h2");
// display.innerText=ans;
// document.body.append(display);
// !reduce

//  let newArr=[4,5,32,3,5,243,43];

// let output =newArr.reduce((accum,curValue)=> accum+curValue
//     );
// console.log(output);


// const products = [{id:1,name:"Dr Mush", price:435,instock:true},
//                   {id:2,name:"Dravour", price:432, instock:false},
//                   {id:3,name:"Fale", price:23412, instock:true},
//                   {id:4,name:"Rise", price:2354,instock:true}];

// let ans=products.reduce((total,curValue) => total + curValue.price,0);
// let display=document.createElement("h2");
// display.innerText=ans;
// document.body.append(display);



// let heading =document.getElementById("heading");
// let box =document.getElementById("box1");
// let btn =document.getElementById("btnClick");
// let input =document.querySelector("input");


// btn.style.backgroundColor="red";
// btn.style.color="white";
// btn.style.border="none";
// btn.style.borderRadius="10px 5px";
// btn.style.cursor="alias";
// btn.style.padding="2vmax 4vmax";
// btnClick.addEventListener("click",() =>{
//   console.log("clicked");
//   box.classList.add("classBox");
//   // box.style.backgroundColor="grey";
//   // box.style.borderRadius=" 100px";
//   // box.style.padding="30px";
//   // box.style.width="20%";
//   // box.style.height="30%";
//   // box.style.color="#FFFFFF";
//   // box.style.textAlign="center";
// });

// box.addEventListener("mouseover", ()=>{
//   btn.style.transform="scale(1.1)";
//   heading.innerText="OLi ko boli ra banduk ko goli kahile phirta audaina";  
//   heading.style.backgroundColor="Blue";
//   heading.style.color="white";
// })
// box.addEventListener("mouseout", ()=>{
//   btn.style.transform="";
//   heading.innerText="";
// })

// btn.addEventListener("contextmenu", (e)=>{
//   e.preventDefault();
//   btn.style.backgroundColor="grey";
// });

// btn.addEventListener("dblclick", ()=>{
//   document.body.style.backgroundColor="black";
// });

// btn.addEventListener("click", ()=>{
//   document.body.style.backgroundColor="";
// });

// addEventListener("click", (e)=>{
//   console.log(e.clientX);
//   console.log(e.clientY);
// }  
// )
// // window.addEventListener("contextmenu", (e)=>{
// //   e.preventDefault();
// // });

// input.addEventListener("change", (e)=>{
//   console.log(e.target.value);
//   console.log("change");
// });

// !Math Object

// let num =4.7;
// let ans =Math.round(num);
// console.log(ans);

// let output =Math.random();
// console.log(output);

// let ans =9;
// let result =Math.sqrt(ans);
// console.log(result);
// let ans =4.9;
// let result =Math.floor(ans);
// console.log(result);
// let ans =4.9;
// let result =Math.ceil(ans);
// console.log(result);


// let num = 2;
// let extonent=3;
// let output=Math.pow(num,extonent);
// console.log(output);

// function subtract(a,b) {
//   let result =a-b;
//   return Math.abs(result);
// };

// let output= subtract(2,5);
// console.log(output);


// function GenerateOtp(){
//   let Otp =Math.floor(100000+Math.random()*900000);
//   return Otp;
// }
// let ans = GenerateOtp();
// console.log(ans);


// let num = Math.max(1,2,2,3,3,4,4,5,34);
// console.log(num);
// let um = Math.min(1,2,2,3,3,4,4,5,34);
// console.log(um);



// let now = new Date().getFullYear();
// console.log(now);
// let nw = new Date().getMonth();
// console.log(nw);
// let ow = new Date().getDay();
// console.log(ow);
// let now = new Date().getFullYear();
// console.log(now);


// let input =document.getElementById("myInput");
// let btnAdd=document.getElementById("btnAdd");
// let btnRemove=document.getElementById("btnRemove");

// const myfunc=()=>{
//     // alert(input.value);
//     sessionStorage.setItem("key1",input.value);

// };
// btnAdd.addEventListener("click",myfunc);

// if(sessionStorage.getItem("key1"))
// alert(sessionStorage.getItem("key1"));


// btnRemove.addEventListener("click",()=>{
//     sessionStorage.removeItem("key1");
//     sessionStorage.clearItem();
// });
// const myfunc=()=>{
//     // alert(input.value);
//     localStorage.setItem("key1",JSON.stringify({name:"Yamal",age:17,isMarried:true}));

// };
// btnAdd.addEventListener("click",myfunc);

// if(localStorage.getItem("key1"))
// alert(localStorage.getItem("key1"));


// btnRemove.addEventListener("click",()=>{
//     localStorage.removeItem("key1");
//     localStorage.clearItem();
// });

// if(localStorage.getItem("key1")){
//     console.log(JSON.parse(localStorage.getItem("key1")));
// }

// const myFnc =()=>{
//         console.log("hdsfjlkashf");
// };
// setTimeout(myFnc,2000);


// setTimeout(()=>{
//     console.log("hdsfjlkashf");
// },2000);

// setInterval(()=>{
//     console.log("hdsfjlkash");
// },1000);


// const intervalId=setInterval(()=>{
//     console.log("hdsfjlkashf");
// },1000);
// setTimeout(()=>{
//     clearInterval(intervalId);},5000);

// function UpdateClock() {
//     const clock =document.querySelector('.clock');
//     const now = new Date();
//     const hours=now.getHours().toString().padStart(2,'0');
//     const minute=now.getMinutes().toString().padStart(2,'0');
//     const second=now.getSeconds().toString().padStart(2,'0');

//     clock.innerHTML = `${hours}:${minute}:${second}`;
// }
// setInterval(UpdateClock,1000);



// ! OOP

// function  Person(name, age, address){
//     this.name = name;
//     this.age = age;
//     this.address = address;

//     this.greeting = function(){
//         let greet=`hello ${this.name}. ur ${this.age} from '${this.address}`;
//         return greet;
// };
// }

// const person1 =new Person("Ram",23,"asdf");
// const person2 =new Person("Ramo",53,"dfdff");
// console.log(person1,person2);
// console.log(person1.greeting());


// function BankAccount(customerName,balance=0){
//     this.customerName = customerName;
//     this.balance = balance;
//     this.accountNumber = Date.now();
//     this.deposit=function(amount){
//         this.balance+=amount;
//     }
//     this.withdraw=function(amount){
//         this.balance-=amount;
//     }
// }

// const addform=document.querySelector('#addForm');
// const customerName =document.querySelector('#customerName');
// const balance =document.querySelector('#balance');


// const depositform = document.querySelector('#depositForm');
// const accountNumber = document.querySelector('#accountNumber');
// const amount = document.querySelector('#amount');

// const withdrawform = document.querySelector('#withdrawForm');
// const withAccountNumber = document.querySelector('#withAccountNumber');
// const withAmount = document.querySelector('#withAmount');

// console.log(withAccountNumber);
// let accounts =[];
// addform.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     let account =new BankAccount(customerName.value,+balance.value);
//     accounts.push(account);
//     console.log(accounts);
// });


// depositform.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     let account = accounts.find((account)=>account.accountNumber === +accountNumber.value);
//     account.deposit(+amount.value);
//     console.log(accounts);
// })

// withdrawform.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     let account = accounts.find((account)=>account.accountNumber === +withAccountNumber.value);
//     account.withdraw(+withAmount.value);
//     console.log(accounts);
// })

// const bankaccount = new BankAccount("Ramu",10000);
// bankaccount.deposit(40000);
// bankaccount.withdraw(4000);
// console.log(bankaccount);


// function BankAccount(customerName,balance=0){
//     this.customerName = customerName;
//     this.balance = balance;
//     this.accountNumber = Date.now();

    
// }
// BankAccount.prototype.deposit = function(amount) {
//     this.balance += amount;
// }
// BankAccount.prototype.withdraw = function(amount) {
//     this.balance -= amount;
// }
// console.log(BankAccount.prototype);

// const ramAccount = new BankAccount("Ramu",10000);
// const johnAccount = new BankAccount("john",40000);
// johnAccount.deposit(2434234);
// ramAccount.deposit(2434234);
// console.log(ramAccount,johnAccount);

// inheritance

// class BankAccount{
//     constructor(customerName, balance=0){
//         this.customerName = customerName;
//         this.balance = balance;
//         this.accountNumber = Math.floor(Math.random()*10000000);
//     }
//     deposit(amount){
//         this.balance += amount;
//     }
//     withdraw(amount){
//         this.balance -= amount;
//     }
// }
// class CurrentAccount extends BankAccount{
//     constructor(customerName, balance=0){
//         super(customerName, balance);
//     }
//     takeBusinessLoan(amount ,taxrate){
//         let ans = amount + (amount *taxrate)/100;
//         console.log(`Your Business Loan is Rs.${ans} `)
//     }
    
// }
// class SavingAccount extends BankAccount{
//     constructor(customerName, balance=0){
//         super(customerName, balance);
//     }
//     takePersonalLoan(amount ,taxrate){
//         let ans = amount + (amount *taxrate)/100;
//         console.log(`Your Saving Loan is Rs.${ans} `)
//     }
    
// }

// const RamuAccount=new CurrentAccount("Ramu",40000);
// const SantuAccount=new CurrentAccount("Santu",40000);
// const DipuAccount=new SavingAccount("Dipu", 3000);
// RamuAccount.deposit(23423);
// DipuAccount.takePersonalLoan(50000000,6);
// SantuAccount.takeBusinessLoan(23423,2);
// console.log(RamuAccount,SantuAccount);


//! encapsulation

// class BankAccount{
//     customerName;
//     #balance=0;
//     accountNumber;
//     constructor(customerName, balance =0){
//         this.customerName = customerName;
//         this.#balance = balance;
//         this.accountNumber = Date.now();
//     }
//     deposit(amount){
//         this.#balance += amount;
//     }

//     withdraw(amount){
//         this.#balance -= amount;
//     }
//     setBalance(amount){
//      this.#balance = amount;
//     }
//     getBalance(){
//         return this.#balance;
//     }
// }
 

// const chinikiajiAccount = new BankAccount("Chinikaji", 4000);
// const balendranAccount = new BankAccount("Balendran",5000);
// balendranAccount.setBalance(7888);
// console.log(balendranAccount.getBalance());
// console.log(balendranAccount,chinikiajiAccount);


class configure{
    static username = "admin";
    static email = "admin@gmail.com";

    
}
console.log(configure.username, configure.email);


class User{
    constructor(name, address,age){
        this.name = name;
        this.address = address;
        this.age = age;
    }
    static compareage(a,b){
        return a.age - b.age;
    }
    
}
let user1=new User("Rainbow","Kathmandu",2);
let user2=new User("Leo","Kathmandu",9);
let user3=new User("Sky","Gorkha",5);
console.log(user1,user2,user3);
let users = [user1,user2,user3];
// users.sort((a,b)=> a.age - b.age)   //on the basis of age 
users.sort(User.compareAge)   //to compare age using static
console.log(users);