export class Poll {
	constructor(public id: string, public question: string, public options: string[], public votes: number[], public owner: string) {}
}