import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, animate, keyframes, style, state } from '@angular/animations';

import { IBall, IBallOptions, IArea } from '@interfaces/.';
import { BALL_OPTIONS } from '@constants/.';
import { ActionService } from '@services/.';

@Component({
	selector: 'app-ball',
	templateUrl: './ball.component.html',
	styleUrls: ['./ball.component.scss'],
	animations: [
		trigger('action', [
			state('open', style({
				top: '0',
				right: '0'
			})),
			state('closed', style({
				top: '0',
				right: '100%'
			})),
			transition('* => start', [
				animate('1s', keyframes([
					style({ right: '100%' })
				]))
			])
		])
	]

})
export class BallComponent implements OnInit {

	@Input() areaSettings: IArea;

	currentAction: string;

	ball: IBall;
	ballOptions: IBallOptions = BALL_OPTIONS;

	constructor(private action: ActionService) {
		this.action.currentAction.subscribe(action => {
			this.currentAction = action.slug;
		});
	}

	ngOnInit() {
	}

}
