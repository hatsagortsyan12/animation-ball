import { useAnimation, AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { IBall, IBallOptions, IArea } from '@interfaces/.';
import { BALL_OPTIONS, ControlSequence } from '@constants/.';
import { ActionService } from '@services/.';
import { BallAnimation } from '@animations/.';

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
	private left: number;
	private bottom: number;
	private speed: number;

	@ViewChild('animationElement') elementRef: ElementRef;

	constructor(
		private action: ActionService,
		private animationBuilder: AnimationBuilder
	) {
		this.action.currentAction.subscribe(action => {
			this.currentAction = action.slug;
			if (this.player) {
				this.animationControl();
			}
			console.log(this.speed)
		});
	}

	ngOnInit() {
		this.left = this.areaSettings.width - this.ballOptions.width;
		this.bottom = this.areaSettings.height - this.ballOptions.height;
		this.speed = this.ballOptions.defaultSpeed;
		this.createPlayer();
	}

	createPlayer(): void {
		if (this.player) {
			this.player.destroy();
		}

		let animationFactory = this.animationBuilder
			.build(useAnimation(BallAnimation, {
				params: {
					left: this.left + 'px',
					bottom: this.bottom + 'px',
					speed: this.speed + 's'
				}
			}));

		this.player = animationFactory.create(this.elementRef.nativeElement, {});
	}

	animateBall(): void {
		this.player.restart();
		this.player.onDone(() => {
			this.animateBall();
		});
	}

	animationControl(): void {
		switch (this.currentAction) {
			case ControlSequence.start:
				this.animateBall();
				break;
			case ControlSequence.stop:
				this.player.reset();
				break;
			case ControlSequence.pause:
				this.player.pause();
				break;
			case ControlSequence.play:
				this.player.play();
				break;
			case ControlSequence.up:
				this.speed = this.speed + this.ballOptions.rateSpeed <= this.ballOptions.maxSpeed
					? this.speed + this.ballOptions.rateSpeed
					: this.speed;
				this.createPlayer();
				break;
			case ControlSequence.down:
				this.speed = this.speed - this.ballOptions.rateSpeed >= this.ballOptions.minSpeed
					? this.speed - this.ballOptions.rateSpeed
					: this.speed;
				this.createPlayer();
				break;
		}
	}

}
