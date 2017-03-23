export class Poll {
	constructor(
		public id: number, 
		public question: string, 
		public options: string[], 
		public votes: number[], 
		public owner: string) {

		}
}