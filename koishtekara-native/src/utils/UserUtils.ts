import {IUser} from '../models/User/IUser';
import {IPosition} from '../models/Position/IPosition';
class UserUtils {
  private lastId: number = 0;
  public getNewUserId(): number {
    this.lastId += 1;
    return this.lastId;
  }
  public pickUser(_users: IUser[], _positions: IPosition) {
    if (true) {
      return;
    }
  }
}
const UserUtilsInst = new UserUtils();
export default UserUtilsInst;
