class Vehicle {
	public drive(): void {
		console.log("chuga chuga");
	}
	public honk(): void {
		console.log("beep");
	}
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

class Car extends Vehicle {
	//you can overwrite a function using the same modifier as the parent class
	public drive(): void {
		console.log("vroooom");
	}
}

const carro = new Car();
carro.drive();
carro.honk();
