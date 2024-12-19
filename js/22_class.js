// persone, emp, Car, admin,bank
class Person{
   constructor(name){
     this.name=name;
   }

   personeInfo(){
    console.log(`my name is a ${this.name}`);
    
   }
};

let p1=new Person("parth");
console.log(p1);
p1.personeInfo();
