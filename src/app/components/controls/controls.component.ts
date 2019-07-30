import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { IState, IControl } from '@interfaces/.';
import { Control } from '@constants/.';

@Component({
	selector: 'app-controls',
	templateUrl: './controls.component.html',
	styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

	state: IState;
	controls: IControl[] = Control.CONTROLS_DATA;
	@Output('control') control: EventEmitter<IControl> = new EventEmitter<IControl>();

	constructor() {
		this.state = {
			start: true,
			stop: false,
			pause: false,
			play: false
		};
	}

	ngOnInit() {
	}

	public set(control: IControl): void {
		switch (control.slug) {
			case 'start':
				this.state = {
					start: false,
					stop: true,
					pause: true,
					play: false
				};
				break;
			case 'stop':
				this.state = {
					start: true,
					stop: false,
					pause: false,
					play: false
				};
				break;
			case 'pause':
				this.state = {
					start: false,
					stop: true,
					pause: false,
					play: true
				};
				break;
			case 'play':
				this.state = {
					start: false,
					stop: true,
					pause: true,
					play: false
				};
				break;
		}

		if (!this.state[control.slug]) {
			return;
		}

		this.control.emit(control);
	}

}
