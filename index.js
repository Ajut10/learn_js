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
const person = {
  name: "John",
  age: 34,
  occupation: "farmworker",
  education: "business",
  isMarried: false,
  address: {
    street: "bagbazar",
    city: "ktm",
    country: "Usa",
    planet: {
      name: "earth",
    },
  },
  gree: function () {
    console.log(`My Name: ${this.name} and My age: ${this.age}`);
  },
};
const {
  name,
  age,
  occupation,
  education,
  isMarried,
  address: { street, city, country },
} = person;
// person.gree();
console.log(name, age, occupation);
// console.log(person.address);
// console.log(person);
