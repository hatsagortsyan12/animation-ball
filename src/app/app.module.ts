import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AreaComponent, ControlsComponent, BallComponent } from '@components/.';
import { ActionService } from '@services/.';

@NgModule({
	declarations: [
		AppComponent,
		AreaComponent,
		ControlsComponent,
		BallComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule
	],
	providers: [
		ActionService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
