import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IControl } from '@interfaces/.';
import { Control } from '@constants/.';

@Injectable()
export class ActionService {

	private actionSource = new BehaviorSubject(Control.CONTROLS_DATA[1]);
	currentAction = this.actionSource.asObservable();

	constructor() { }

	changeAction(action: IControl) {
		this.actionSource.next(action);
	}

}
