class UserUtils {
	private lastId: number = 0;
	public getNewUserId(): number {
		this.lastId += 1;
		return this.lastId;
	}
	public pickUser(users: IUser[], positions: IPosition) {
		if (true) {
			return;
		}
	}
}
const UserUtilsInst = new UserUtils();
export default UserUtilsInst;
