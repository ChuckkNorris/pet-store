import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AddPetComponent } from './pages/add-pet/add-pet.component';
import { BrowsePetsComponent } from './pages/browse-pets/browse-pets.component';
import { AdminComponent } from './pages/admin/admin.component';
import { FoodComponent } from './components/food/food.component';

export const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/browse-pets'},
  { path: 'browse-pets', component: BrowsePetsComponent},
  { path: 'sell-pet', component: AddPetComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'food', component: FoodComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],

  declarations: []
})
export class AppRoutingModule { }
