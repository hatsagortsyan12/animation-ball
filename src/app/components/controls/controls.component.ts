import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { IState, IControl } from '@interfaces/.';
import { Control, ControlSequence } from '@constants/.';
import { ActionService } from '@services/.';

@Component({
	selector: 'app-controls',
	templateUrl: './controls.component.html',
	styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

	state: IState;
	controls: IControl[] = Control.CONTROLS_DATA;

	constructor(private action: ActionService) {
		this.state = {
			start: true,
			stop: false,
			pause: false,
			play: false,
			up: true,
			down: true
		};
	}

	ngOnInit() {
	}

	public set(control: IControl): void {
		if (!this.state[control.slug]) {
			return;
		}

		switch (control.slug) {
			case ControlSequence.start:
				this.state = {
					start: false,
					stop: true,
					pause: true,
					play: false,
					up: true,
					down: true
				};
				break;
			case ControlSequence.stop:
				this.state = {
					start: true,
					stop: false,
					pause: false,
					play: false,
					up: true,
					down: true
				};
				break;
			case ControlSequence.pause:
				this.state = {
					start: false,
					stop: true,
					pause: false,
					play: true,
					up: true,
					down: true
				};
				break;
			case ControlSequence.play:
				this.state = {
					start: false,
					stop: true,
					pause: true,
					play: false,
					up: true,
					down: true
				};
				break;
		}

		this.action.changeAction(control);
	}

}
