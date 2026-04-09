import UserUtilsInst from '../../utils/UserUtils';
import {IUser} from './IUser';

export class User implements IUser {
  id: number;
  username: string;
  canDrive: boolean;
  preference?: number;

  constructor(
    username: string,
    canDrive: boolean = false,
    preference?: number,
  ) {
    this.id = UserUtilsInst.getNewUserId();
    this.username = username;
    this.canDrive = canDrive;
    this.preference = preference;
  }
}
