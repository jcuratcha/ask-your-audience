export class Poll {
	constructor(
		public id: number, 
		public question: string, 
		public options: string[], 
		public votes: number[], 
		public owner: string) {

			if (id == null) {
				throw new Error("Poll: Invalid data: id cannot be null");
			}

			if (question == null) {
				throw new Error("Poll: Invalid data: question cannot be null");
			}

			if (question.length === 0) {
				throw new Error("Poll: Invalid data: question can't be empty string");				
			}

			if (options == null) {
				throw new Error("Poll: Invalid data: options list cannot be null");
			}

			if (votes == null) {
				throw new Error("Poll: Invalid data: votes list cannot be null");
			}

			if (owner == null) {
				throw new Error("Poll: Invalid data: owner cannot be null");
			}

			if (options.length < 2) {
				throw new Error("Poll: Invalid data: cannot have poll with < 2 options");
			}

			if (options.length !== votes.length) {
				throw new Error("Poll: Invalid data: number of options cannot be different from number of vote entries");
			}
		}
}