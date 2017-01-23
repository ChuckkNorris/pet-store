import { Component, OnInit, NgZone } from '@angular/core';
import { ImgurService } from '../../services/imgur.service';
import { PetService } from '../../services/pet.service';
import { Pet, Breed, Animal } from '../../models/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css'],
  providers: [ImgurService]
})
export class AddPetComponent implements OnInit {

  pet:Pet = {};


  animals = [1, 2, 3, 4, 1, 1, 1, 1, 1];
  constructor(private _petService: PetService, private _imgurService: ImgurService, private _zone: NgZone) { }
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
 
  imageFile: File;

  setPetImage(event) {
    let files: File[] = event.srcElement.files;
    if (files.length > 0) {
      this.imageFile = files[0];
      let fr = new FileReader();
      this._zone.run(() => {
        fr.onload = (frEvent) => {
          var image = new Image();
          image.onload = (imageEvent) => {
            let resizedUrl = this.resize(image, 300, 300);
            this.pet.image = resizedUrl;
            console.log(resizedUrl);
            let resizedImage = this.dataURLToBlob(resizedUrl);
            console.log(resizedImage);
            this._imgurService.uploadBlob(resizedImage).subscribe(link => console.log(link));
          };
          let frResult = (frEvent as any).target.result;
          image.src = frResult;
         // this.pet.image = frResult;
         // console.log(this.imageFile);
          

        }
      });
      fr.readAsDataURL(this.imageFile)
    }
  }

  resize(img, maxWidth: number, maxHeight: number): string {
    // Get the images current width and height
    let width = img.width;
    let height = img.height;

    // Set the WxH to fit the Max values (but maintain proportions)
    if (width > height) {
        if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
        }
    } else {
        if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
        }
    }

    // create a canvas object
    let canvas = document.createElement("canvas");

    // Set the canvas to the new calculated dimensions
    canvas.width = width;
    canvas.height = height;
    let ctx = canvas.getContext("2d");  

    ctx.drawImage(img, 0, 0,  width, height); 

    // Get this encoded as a jpeg
    // IMPORTANT: 'jpeg' NOT 'jpg'
    let dataUrl = canvas.toDataURL('image/jpeg');
    return dataUrl;
  }

  dataURLToBlob(dataURL) {
    let BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) == -1) {
        let parts = dataURL.split(',');
        let contentType = parts[0].split(':')[1];
        let raw = parts[1];
        return new Blob([raw], {type: contentType});
    }

    let parts = dataURL.split(BASE64_MARKER);
    let contentType = parts[0].split(':')[1];
    let raw = window.atob(parts[1]);
    let rawLength = raw.length;

    let uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], {type: contentType});
  }

  log(event) {
    console.log(event);
  }

  uploadFile() {
    this._imgurService.uploadImage(this.imageFile);
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
