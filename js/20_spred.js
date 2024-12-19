// function add(...item) {
//     sum = 0;
//     for (const key in item) {
//         sum += item[key];
//     }
//     console.log(sum);

// }


// add(1, 2);
// add(10, 20, -1);
// add(123, 12, 24, 2);
// add(1, 2, 3, 4, 5);


// let a = [1, 2, 3];
// let b = [5, 4, 3];
// let c = [...a, ...b]
// console.log(c);

let text1 = { FName: "parth", city: "Pune", no: 10000 }
let text2 = { FName: "Nikunj", city: "surat", pincode: 345058 };

let text3 = { ...text1, ...text2 }
console.log(text3);


