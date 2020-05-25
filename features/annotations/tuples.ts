const drink = {
	color: "brown",
	carbonated: true,
	sugar: 40,
};

const pepsi = ["brown", true, 40]; //This is an array
const cocacola: [string, boolean, number] = ["brown", true, 40]; //This typing converts the array in a Tuple

//We can create a type-alias

type Drink = [string, boolean, number];

const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];
