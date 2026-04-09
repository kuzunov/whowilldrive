import { IUser } from "../User/IUser";

export interface IPosition {
	id: number;
	lincenceRequired?: boolean;
	user?: IUser;
}
