
const myName: string = "Mario";
const myAge: number = 30;
const isStudyingTypeScript: boolean = true;

//esercizio 3

const greet = (name: string): string => {  
    return "Ciao " + name; 
  }

  
//esercizio 4

const sum = (a: number, b: number): number => {  
    return a + b; 
  }

//5
const addIVA = (price: number): number => {
    return price * 1.22;
  }

//6

const concatenateAndLength = (str1: string, str2: string): number => {
    return (str1 + str2).length;
  }

  
//7
let value: string | number;
value = "test"; // valido
value = 42;     // valido


//8

let numOrNull: number | null | undefined = 42;


//9
