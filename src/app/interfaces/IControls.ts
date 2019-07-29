export interface IState {
	start: boolean;
	stop: boolean;
	pause: boolean;
	play: boolean;
}

export interface IControl {
	id: number;
	title: string;
	slug: string;
}
