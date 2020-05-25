const carMakers: string[] = [];
//or
const carMaker = ["Toyota", "Honda", "Mazda"];

const dates = [new Date(), new Date()];

//two dimensional array
const carByMake: string[][] = [];

//Help when extracting values from an array
//Typescript will know the type of the variable being assigned

const make = carMaker[0]; //make is a type of the carMaker type of the array

//Help us operating with compatible values
carMaker.push(100);

//Help with iterations
carMaker.map((car: string): string => {
	return car.toUpperCase(); //autocomplete help too
});

//Flexible and an array can have different types inside
