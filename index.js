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

let x="0";
let y= +x;
console.log(y);
console.log(typeof y);



const obj={
    name: "John",
    ageGroup: 18,
};
delete obj.name;
console.log(obj);