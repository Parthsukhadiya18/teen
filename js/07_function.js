// declaration fun 
function name() {
    console.log("Milap");
    
}
// calling 
name();


function add(a,b) {
    return a+b;
}
// add(1,2)
// console.log(add(1,2));
// erro 
console.log(add(1,2));



function mult(a=1,b=10) {
    return a*b;
}
console.log(mult());
console.log(mult(10,2));

// arrow fun 
let sum=()=>{
console.log("sum");

}
sum();
let div=(a,b)=>{
    return a/b;
}
// div() 
console.log( div(10,2));
 
let name1=()=>console.log("hi");
name1();