// *****
// *****
// *****
// *****
// *****
// text = "";
// for (let i = 0; i < 5; i++) {

//     for (let j = 0; j < 5; j++) {

//         text += "*"
//         // console.log("*");
//     }
//     text += "\n"
// }
// // console.log(text);
// 11111
// 22222
// 33333
// 44444
// 55555


// text = "";
// for (let i = 1; i <= 5; i++) {

//     for (let j = 1; j <= 5; j++) {

//         text += i
//         // console.log("*");
//     }
//     text += "\n"
// }
// console.log(text);

// 1
// 12
// 123
// 1234
// 12345
// text = "";
// for (let i = 1; i <= 5; i++) {

//     for (let j = 1; j <= i; j++) {

//         text += j
//         // console.log("*");
//     }
//     text += "\n"
// }
// console.log(text);
// 12345
// 1234
// 123
// 12
// 1


// text = "";
// for (let i = 5; i >= 1; i--) {

//     for (let j = 1; j<=i; j++) {

//         text += j
//         // console.log("*");
//     }
//     text += "\n"
// }
// console.log(text);

//        1
//       22
//      333
//     4444
//    55555
// text = "";
// for (let i = 1; i <= 5; i++) {
//     // k for spce 
//     for (let k = i; k <= 4; k++) {

//         text += " "
//         // console.log("*");
//     }
//     for (let j = 1; j <= i; j++) {

//         text += i
//         // console.log("*");
//     }
//     text += "\n"
// }
// console.log(text);


// 1
// 23
// 456
// 78910
// 1112131415

text = "";
count=1;
for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= i; j++) {

        text += count;
        count++;
        // console.log("*");
    }
    text += "\n"
}
console.log(text);