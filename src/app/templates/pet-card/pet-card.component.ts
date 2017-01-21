import { Component, OnInit, Input } from '@angular/core';
import { Pet, BaseModel, AnimalType } from '../../models/models';

  export interface Breed extends BaseModel {
    name?: string;
    animalType?: AnimalType;
}

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {
  @Input() pet: Pet = {};
  @Input() center: boolean = false;
  @Input() width: any = 'auto';

  constructor() { }
  ngOnInit() {
  }

  getAge(birthday:Date):string {
    let msBetweenDates = new Date().getTime() - new Date(birthday).getTime();
    let ageInYears = msBetweenDates / 31536000000;
   // console.log(val);
    
    return  ageInYears.toFixed(2);
  }

}
