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
		this.stop();
	}

	ngOnInit() {
	}

	private start(): void {
		this.state = {
			start: false,
			stop: true,
			pause: true,
			play: false
		};
	}

	private stop(): void {
		this.state = {
			start: true,
			stop: false,
			pause: false,
			play: false
		};
	}

	private pause(): void {
		this.state = {
			start: false,
			stop: true,
			pause: false,
			play: true
		};
	}

	private play(): void {
		this.state = {
			start: false,
			stop: true,
			pause: true,
			play: false
		};
	}

	public set(control: IControl): void {
		if (!this.state[control.slug]) {
			return;
		}

		this[control.slug]();
		this.control.emit(control);
	}

}
