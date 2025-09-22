/**
 * object : data yang mampu menampung sekumpulan tipe data lain, jika array beralamat index,
 * object beralamat property
 *
 * aturan penulisan :
 * 1. literal
 * const objectVariable = {
 *      namaproperty :value,
 *      userName:ronald
 *      age:23,
 *      grade:["A","B"],
 *      isActive:true,
 *      introFunc:Function(){
 *          //taskcode
 *      }
 * }
 * 2. new Object()
 * const objectValue = new Object()
 * objectValue.userName = "edo".
 * objectValue.age = 18
 *
 * 3. class
 * class student{
 *     public username:string
 *     public age:number;
 *      constructor(_username:string,_age:number){
 *          this.username = _username;
 *          this.age = _age
 *      }
 * }
 *
 * const murid1 = new student("Aldo",12)
 * const murid2 = new student("ahmad",19)
 */

interface IStudent {
  name: string;
  age: number;
  noTelp?: number;
}

const studentA: IStudent = {
  name: "ronald",
  age: 10,
};

//cara akses object

console.log(studentA.name);
console.log(studentA["age"]);

//MUTABLE DAN IMMUTABLE

let immustring: string = "Hello";
let duplicateImmuString: string = immustring;
duplicateImmuString = "asas";
console.log(duplicateImmuString);
console.log(immustring);

//MUTABLE For array and object
const studentB: IStudent = { name: "Ronaldo", age: 28 };

//IMMUTABEL For array and object

//looping object
for (const key in studentB) {
  console.log(key);
  console.log(studentB[key]);
}

console.log(Object.keys(studentB));

console.log(Object.values(studentB));
