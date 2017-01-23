import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _petService: PetService) { }

  animalOptions: any[] = [];
  breedOptions: any[] = [];
  ngOnInit() {
    this._petService.getAnimals().subscribe(animals => this.animalOptions = animals);
    this._petService.getBreeds().subscribe(breeds => this.breedOptions = breeds);
  }


  saveAnimal(animalName: string) {
    this._petService.saveAnimal(animalName).subscribe();
  }

  saveBreed(animalId: number, breedName: string) {
    this._petService.saveBreed(animalId, breedName).subscribe();
  }

}
