import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddPetComponent } from './pages/add-pet/add-pet.component';
import { BrowsePetsComponent } from './pages/browse-pets/browse-pets.component';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  declarations: [
    AppComponent,
    AddPetComponent,
    BrowsePetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


  //  "@angular/common": "~2.1.0",
  //   "@angular/compiler": "~2.1.0",
  //   "@angular/core": "~2.1.0",
  //   "@angular/forms": "~2.1.0",
  //   "@angular/http": "~2.1.0",
  //   "@angular/material": "^2.0.0-beta.1",
  //   "@angular/platform-browser": "~2.1.0",
  //   "@angular/platform-browser-dynamic": "~2.1.0",
  //   "@angular/router": "~3.1.0",
  //   "core-js": "^2.4.1",
  //   "rxjs": "5.0.0-beta.12",
 
  //   "zone.js": "^0.6.23"