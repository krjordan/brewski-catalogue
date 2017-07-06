import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { SudsService } from './services/suds.service';

import { AppComponent } from './app.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { BeerListControlsComponent } from './components/beer-list-controls/beer-list-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerListControlsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [
    SudsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
