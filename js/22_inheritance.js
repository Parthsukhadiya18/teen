class Person{
    constructor(name){
      this.name=name;
    }
 
    personeInfo(){
     console.log(`my name is a ${this.name}`);
     
    }
 };
 class Emp extends Person{

    constructor(name,department){
          super(name);
          this.department=department;
    }
    EmpInfo(){
        console.log(`my name is a ${this.name} and department is a ${this.department}`);
        
    }
 }
 
 let p1=new Person("parth");
//  console.log(p1);
//  p1.personeInfo();


let Emp1=new Emp("Parth","IT");
Emp1.EmpInfo()