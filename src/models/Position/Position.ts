export class Position implements IPosition {
	id: number;
	lincenceRequired?: boolean | undefined;
	user?: IUser;

	constructor(id: number, licenceRequired = false) {
		this.id = id;
		this.lincenceRequired = licenceRequired;
	}
	public fillSeat(user: IUser) {
		this.user = user;
	}
	public isFilled() {
		return !!this?.user;
	}
}
