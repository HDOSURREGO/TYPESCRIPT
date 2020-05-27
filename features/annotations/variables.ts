// Type Annotations
//": number" is the type annotation
let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//array
let colors: string[] = ["red", "white", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//class
class Carro {}
let car: Carro = new Carro();

//object literal
let point: { x: number; y: number } = {
	x: 20,
	y: 30,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};

//Function that returns 'any' like JSON.parse, type in the result variable has to have annotation
const json = "{ x: 10, y: 20 }";
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//Use annotation when a variable is going to be initialized later in the process and not at declaration
let words = ["red", "green", "blue"];
let foundWord: boolean; //Type annotation when varibale is going to be initialized later
for (let i = 0; i < words.length; i++) {
	if (words[i] === "green") {
		foundWord = true;
	}
}

//Variable that can take 2 different types
let numbers = [-10, -20, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		numberAboveZero = numbers[i];
	}
}
