import { IControl } from '@interfaces/.';

export class Control {
	static readonly CONTROLS_DATA: IControl[] = [
		{
			id: 1,
			title: 'Start',
			slug: 'start'
		},
		{
			id: 2,
			title: 'Stop',
			slug: 'stop'
		},
		{
			id: 3,
			title: 'Pause',
			slug: 'pause'
		},
		{
			id: 4,
			title: 'Play',
			slug: 'play'
		}
	];
}
