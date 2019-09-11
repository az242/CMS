import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { XyzComponent } from './xyz/xyz.component';
import { MatButtonModule, MatSliderModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
