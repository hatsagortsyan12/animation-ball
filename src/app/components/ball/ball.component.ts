import { AnimationBuilder, AnimationPlayer, trigger, transition, animate, keyframes, style, state } from '@angular/animations';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { IBall, IBallOptions, IArea } from '@interfaces/.';
import { BALL_OPTIONS } from '@constants/.';
import { ActionService } from '@services/.';

@Component({
	selector: 'app-ball',
	templateUrl: './ball.component.html',
	styleUrls: ['./ball.component.scss'],
})
export class BallComponent implements OnInit {

	@Input() areaSettings: IArea;

	currentAction: string;

	ball: IBall;
	ballOptions: IBallOptions = BALL_OPTIONS;

	private player: AnimationPlayer;

	@ViewChild('animationElement') elementRef: ElementRef;

	constructor(
		private action: ActionService,
		private animationBuilder: AnimationBuilder
	) {
		// tslint:disable-next-line: no-shadowed-variable
		this.action.currentAction.subscribe(action => {
			this.currentAction = action.slug;
		});
	}

	createPlayer() {
		if (this.player) {
			this.player.destroy();
		}

		let animationFactory = this.animationBuilder
			.build([
				style({ width: 0 }),
				animate(1000, style({ width: '200px' })),
			]);

		this.player = animationFactory.create(this.elementRef.nativeElement, {});
		this.player.play();
	}

	ngOnInit() {
		if (this.player) {
			this.player.destroy();
		} else {
			this.createPlayer();
		}
	}

	play(): void {
		this.player.play();
		console.log(this.player);
	}

}
