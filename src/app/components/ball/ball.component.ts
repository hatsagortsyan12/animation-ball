import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, animate, keyframes, style, state } from '@angular/animations';

import { IBall } from '@interfaces/.';
import { Ball } from '@constants/.';

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

	@Input() width: number;
	@Input() height: number;
	@Input()
	set action(action: string) {
		if (action) {
			this.currentAction = action;
		}
	}

	currentAction: string;

	ball: IBall;
	ballW: number = Ball.WIDTH;
	ballH: number = Ball.HEIGHT;

	constructor() { }

	ngOnInit() {
	}

}
