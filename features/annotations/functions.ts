const add = (a: number, b: number): number => {
	//explicit return type will tell you there is an error if no returning anything
	return a + b;
};

//Typescript will infere the type from the return statement
//but will not catch an error if there is no return type explicit
const subtract = (a: number, b: number) => {
	return a - b;
};

//Using the word function is exactly the same
function multiply(a: number, b: number): number {
	return a * b;
}

//Or with an anonymous function
const divide = function (a: number, b: number): number {
	return a / b;
};

const todayWeather = {
	date: new Date(),
	weather: "sunny",
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
	console.log(forecast.date);
	console.log(forecast.weather);
};

logWeather(todayWeather);

//Destructuring the function
// const logWeather = ({
// 	date,
// 	weather,
// }: {
// 	date: Date;
// 	weather: string;
// }): void => {
// 	console.log(date);
// 	console.log(weather);
// };
