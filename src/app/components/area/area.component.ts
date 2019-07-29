import { Component, OnInit, Input } from '@angular/core';

import { IControl } from '@interfaces/.';
import { Area } from '@constants/.';

@Component({
	selector: 'app-area',
	templateUrl: './area.component.html',
	styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

	constructor() { }

	@Input('width') width: number = Area.WIDTH;
	@Input('height') height: number = Area.HEIGHT;

	actionValue: string = null;

	public action(control: IControl) {
		this.actionValue = control.slug;
	}

	ngOnInit() {
	}

}
