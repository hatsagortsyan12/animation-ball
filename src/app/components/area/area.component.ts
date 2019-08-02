import { Component, OnInit, Input } from '@angular/core';

import { IControl, IArea } from '@interfaces/.';
import { Area } from '@constants/.';

@Component({
	selector: 'app-area',
	templateUrl: './area.component.html',
	styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

	constructor() { }

	settings: IArea = Area;

	ngOnInit() {
	}

}
