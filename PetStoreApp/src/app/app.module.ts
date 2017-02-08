import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddPetComponent } from './pages/add-pet/add-pet.component';
import { BrowsePetsComponent } from './pages/browse-pets/browse-pets.component';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';

import 'hammerjs';
import { TextColorDirective } from './directives/text-color.directive';
import { PetService } from './services/pet.service';
import { PetCardComponent } from './templates/pet-card/pet-card.component';
import { AdminComponent } from './pages/admin/admin.component';
import { PetOptionsComponent } from './templates/pet-options/pet-options.component';
import { FoodComponent } from './components/food/food.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPetComponent,
    BrowsePetsComponent,
    TextColorDirective,
    PetCardComponent,
    AdminComponent,
    PetOptionsComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    AppRoutingModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }