class Vehicle {
	drive(): void {
		console.log("chuga chuga");
	}
}

const vehicle = new Vehicle();
vehicle.drive();

class Car extends Vehicle {
	drive(): void {
		console.log("vroooom");
	}
}

const carro = new Car();
carro.drive();
