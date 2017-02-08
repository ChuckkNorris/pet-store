import { Component, OnInit, Input } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { Pet } from '../../models/models';

@Component({
  selector: 'app-browse-pets',
  templateUrl: './browse-pets.component.html',
  styleUrls: ['./browse-pets.component.css'],
  
})
export class BrowsePetsComponent implements OnInit {
  constructor(private _petService: PetService) { }
  pets: Pet[] = [];
  selectedAnimalId: number;
  selectedBreedId: number;
  ngOnInit() {
    this.getPets();
  }

  getPets() {
    this._petService.getPets(this.selectedAnimalId, this.selectedBreedId).subscribe(pets => {
      this.pets = pets;
    });
  }

  onBreedChanged(animalId) {
    this._petService.getPets()
  }

  logChange() {
    console.log('animal Changed!');
  }


}
