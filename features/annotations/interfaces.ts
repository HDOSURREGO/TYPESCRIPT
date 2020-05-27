interface Vehicle {
	// name: string;
	// year: number;
	// broken: boolean;
	summary(): string;
}

//In order to this object to be used in the printVehicle function as argument
//it has to meet exactly the structure of the interface type Vehicle
const oldCivic = {
	name: "civic",
	year: 2000,
	broken: true,
	summary(): string {
		return `Name: ${this.name}`;
	},
};

const printVehicle = (vehicle: Vehicle): void => {
	console.log(vehicle.summary());
};

printVehicle(oldCivic); //The oldCivic meets all the requirements of the Vehicle type
