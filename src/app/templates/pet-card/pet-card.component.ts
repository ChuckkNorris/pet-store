import { Component, OnInit, Input } from '@angular/core';
import { Pet } from '../../models/models';


@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {
  @Input() pet: Pet = { };
  @Input() center: boolean = false;
  @Input() width: any = 'auto';

  constructor() { }
  ngOnInit() {
    this.pet.imageUrl = 'https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg';
  }

  getAge(birthday:Date):string {
    let msBetweenDates = new Date().getTime() - new Date(birthday).getTime();
    let ageInYears = msBetweenDates / 31536000000;
   // console.log(val);
    
    return  ageInYears.toFixed(2);
  }

}
