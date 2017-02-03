import { Component, OnInit, Input } from '@angular/core';
import { ANIMALS } from '../../animal-data';
import { PetService } from '../../services/pet.service';
 import { Breed } from '../../models/models';



@Component({
  selector: 'app-browse-pets',
  templateUrl: './browse-pets.component.html',
  styleUrls: ['./browse-pets.component.css']

})
export class BrowsePetsComponent implements OnInit {
  animals = ANIMALS;
  constructor(private _petService: PetService) { }
  @Input() myBreed: Breed = {};
  ngOnInit() {
    //this.getPets();
  }

  getPets() {
    this._petService.getBreeds().subscribe(breeds => 
      {
        breeds.forEach(breed => {
          console.log(breed.name);
          console.log(breed.id);
          //console.log(AnimalType[breed.animal.name]);
        })
      }
    );
  }

}
