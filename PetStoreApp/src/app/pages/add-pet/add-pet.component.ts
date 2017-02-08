import { Component, OnInit, NgZone } from '@angular/core';
import { ImgurService } from '../../services/imgur.service';
import { PetService } from '../../services/pet.service';
import { Pet, Breed, Animal } from '../../models/models';
import { ImageService } from '../../services/image.service';
import { MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css'],
  providers: [ImgurService, ImageService]
})
export class AddPetComponent implements OnInit {
  constructor(
    private _petService: PetService, 
    private _snackBar: MdSnackBar,
    private _router: Router,
    private _imageService: ImageService,
    private _imgurService: ImgurService) { }

  ngOnInit() {
    this._petService.getAnimals().subscribe(animals => this.animalOptions = animals);
  }

  pet:Pet = { breed: {}};
  animalOptions: Animal[] = [];
  breedOptions: Breed[] = [];
  selectedAnimalId: number;

 
  imageFile: File;
  imageBlob: Blob;

  savePet(petToSave: Pet) {
    this._imgurService.uploadBlob(this.imageBlob).subscribe(imageUrl => {
      petToSave.image = null;
      petToSave.imageUrl = imageUrl;
      this._petService.savePet(petToSave).subscribe(() => {
        this.showNotification('Pet saved successfully!');
      });
    })
  }

  showNotification(message: string) {
    this._snackBar.open(message, null, {duration: 2000 }).afterDismissed().subscribe(() => {
      this._router.navigate(['/browse-pets']);
    })
  }

  setPetImage(event) {
    let files: File[] = event.srcElement.files;
    if (files.length > 0) {
      this.imageFile = files[0];
      this._imageService.getResizedImage(files[0]).subscribe(imageBlob => {
        console.log(imageBlob);
        this.imageBlob = imageBlob.blob;
        this.pet.image = imageBlob.data;
      });
    }
  }

}
