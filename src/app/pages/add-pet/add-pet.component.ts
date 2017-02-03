import { Component, OnInit, NgZone } from '@angular/core';
import { ImgurService } from '../../services/imgur.service';
import { PetService } from '../../services/pet.service';
import { Pet, Breed, Animal } from '../../models/models';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css'],
  providers: [ImgurService, ImageService]
})
export class AddPetComponent implements OnInit {
  constructor(
    private _petService: PetService, 
    private _imageService: ImageService,
    private _imgurService: ImgurService) { }

  ngOnInit() {
    this._petService.getAnimals().subscribe(animals => this.animalOptions = animals);
  }

  pet:Pet = {};
  animalOptions: Animal[] = [];
  breedOptions: Breed[] = [];
  selectedAnimalId: number;

  onAnimalChanged() {
    if (this.selectedAnimalId) 
      this._petService.getBreeds(this.selectedAnimalId)
        .subscribe(breeds => this.breedOptions = breeds);
  }
 
  imageFile: File;

  savePet(petToSave: Pet) {
    this._imgurService.uploadImage(this.imageFile).subscribe(imageUrl => {
      petToSave.image = null;
      petToSave.imageUrl = imageUrl;
      this._petService.savePet(petToSave)
    })
  }

  setPetImage(event) {
    let files: File[] = event.srcElement.files;
    if (files.length > 0) {
      this.imageFile = files[0];
      this._imageService.getResizedImage(files[0]).subscribe(imageBlob => {
        console.log(imageBlob);
        this.pet.image = imageBlob.data;
      });
    }
  }

  log(event) {
    console.log(event);
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
