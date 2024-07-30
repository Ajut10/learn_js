// // const table = 10;
// for (let i = 1; i< 10; i++) {
//     console.log(`3*${i}= ${3 * i}`);
// }

function Calculate(a,b,cb){
    const c =a;
    const d =b;
    const result = cb(c,d);
    console.log(result);
}

Calculate(10,30,(c,d)=> c+d)
Calculate(45,90,(c,d)=> c*d)