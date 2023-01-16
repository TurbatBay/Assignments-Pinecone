//1. n toonii niilber oloh bodlogo:

// let n = prompt("garaas too ug")
// let sum = 0;
// for (let i = 0; i <= n; i++) {
//     sum = sum + i;
// }
// console.log(sum)



//2. while loop ашиглан 0-100 хүртэлх тооны бүх тэгш тоог олох.

// let sum = 0;
// let i = 1;
// while (i <= 100) {
//     if (i % 2 == 0) {
//         sum = sum + i;
//     } 
//     i++;
// }
// console.log(sum)



// 3.  
// 1. Prompt - оор 1 тоо авна.
// 2. Prompt - оор авсан тоог хэдэн оронтойг хэвлэж гарга.
// example: input = 1234567; digit: = 7;


// let n = prompt("garaas too ugnu uu:");
// let count = 0;

// for (let i = 0; i < n.length; i++) {
//   if (!isNaN(n[i]) && n[i] !== " ") {
//     count++;
//   }
// }

// console.log(` ${count} too bn`);


// n = 123 -> //3




//4. urwuu too

//12345 -> 54321 n хувьсагчийн утгыг тоог урвуул. 

let n = prompt("too garaas ugnu uu:");

n = n.split("").reverse().join("")

console.log(n)