import { IControl } from '@interfaces/.';

export class Control {
	static readonly CONTROLS_DATA: IControl[] = [
		{
			title: 'Start',
			slug: 'start'
		},
		{
			title: 'Stop',
			slug: 'stop'
		},
		{
			title: 'Pause',
			slug: 'pause'
		},
		{
			title: 'Play',
			slug: 'play'
		}
	];
}

export enum ControlSequence {
	start = 'start',
	stop = 'stop',
	pause = 'pause',
	play = 'play'
}
