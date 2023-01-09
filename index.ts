class Person {
    name:string;
    age:number;
    constructor (name: string, age: number){
        this.name = name;
        this.age = age;
    }
    tellMyName():void{
        console.log(`I am ${this.name}`);
    }
    tellMyAge(): void {
        console.log(`I am ${this.age} years old`);
    }
}

const person1 = new Person("John", 40);
const person2 = new Person("Mary", 35);

person1.tellMyAge();
person1.tellMyName();
person2.tellMyAge();
person2.tellMyName();