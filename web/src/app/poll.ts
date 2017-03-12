export class Poll {
	constructor(
		public pollID?: number, 
		public question?: string, 
		public options?: string[], 
		public votes?: number[], 
		public owner?: string) {}

	public voted: boolean;
}