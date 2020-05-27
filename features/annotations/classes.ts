class Vehicle {
	// color: string = "red";
	//Instead of initializing a property in the definition we use the constructor
	// and specify a color when creating the instance
	constructor(public color: string) {} //modifiers can be used with fields too

	public drive(): void {
		console.log("chuga chuga");
	}
	public honk(): void {
		console.log("beep");
	}
}

const vehicle = new Vehicle("orange"); //this argument will go to the constructor
vehicle.drive();
vehicle.honk();
console.log(vehicle.color);

class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		//when creating additional features in the child class
		super(color); //the super calls the constructor of the parent and we have to fill the variable
	}
	//you can overwrite a function using the same modifier as the parent class
	public drive(): void {
		console.log("vroooom");
	}
}

const carro = new Car(4, "blue"); //this requires both arguments wheels and color
carro.drive();
carro.honk();
console.log(carro.color);
