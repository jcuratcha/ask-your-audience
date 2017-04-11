export class User {
	constructor(
		public userID?: number,
    public username?: string,
    public displayName?: string,
		public votedPolls?: number[]) {}
}
