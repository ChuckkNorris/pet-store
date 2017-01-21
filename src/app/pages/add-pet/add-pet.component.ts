import { Component, OnInit } from '@angular/core';
import { ImgurService } from '../../services/imgur.service';
import { PetService } from '../../services/pet.service';
import { Pet, Breed, Animal } from '../../models/models';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css'],
  providers: [ImgurService]
})
export class AddPetComponent implements OnInit {

  pet:Pet = {};


  animals = [1, 2, 3, 4, 1, 1, 1, 1, 1];
  constructor(private _petService: PetService, private _imgurService: ImgurService) { }
  animalSet = [];
  ngOnInit() {
    this._petService.getAnimals().subscribe(animals => this.animalOptions = animals);
  }

  myPet: Pet = {};
  animalOptions: Animal[] = [];
  breedOptions: Breed[] = [];
  selectedAnimalId: number;
  onAnimalChanged() {
    if (this.selectedAnimalId) {
      this._petService.getBreeds(this.selectedAnimalId).subscribe(breeds => this.breedOptions = breeds);
    }
    
  }

 
  files: any;

  outputFileName(event) {
    let files = event.srcElement.files;
    console.log(files);
    this.files = files;
  }

  log(event) {
    console.log(event);
  }


  

  uploadFile() {
    this._imgurService.uploadImage(this.files);
  }

  getItemSets(collection: any[], itemsPerRow: number): any[][] {
    let numberOfSets = Math.ceil(collection.length / itemsPerRow);
    let toReturn: any[] = [];

    for (let setCounter = 0; setCounter < numberOfSets; setCounter++) {
      let itemsInSet = [];
      for (let itemCounter = setCounter * itemsPerRow; itemCounter < collection.length; itemCounter++) {
        itemsInSet.push(collection[itemCounter]);

        if ((itemCounter + 1) % itemsPerRow == 0 || itemCounter == collection.length - 1) {
          toReturn.push([])
          toReturn[setCounter].push(itemsInSet);
          break;
        }

      }
    }
    return  toReturn;
  }


}
