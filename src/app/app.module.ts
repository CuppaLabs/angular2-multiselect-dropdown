import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularMultiSelectModule } from './angular2-multiselect-dropdown/multiselect.component';
@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularMultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
