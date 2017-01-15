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

  constructor() { }
  ngOnInit() {
  }

}
