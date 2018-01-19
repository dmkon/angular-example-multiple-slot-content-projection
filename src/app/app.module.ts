import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MultipleSlotComponent } from './multiple-slot/multiple-slot.component';


@NgModule({
  declarations: [
    AppComponent,
    MultipleSlotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
