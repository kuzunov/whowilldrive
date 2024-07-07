class Car implements ICar {
	public name: string;
	public numOfSeating: number;
	constructor(name: string, numOfSeating: number) {
		this.name = name;
		this.numOfSeating = numOfSeating;
	}
}
