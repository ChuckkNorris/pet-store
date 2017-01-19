import { Component, OnInit } from '@angular/core';
import { ImgurService } from '../../services/imgur.service';
@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css'],
  providers: [ImgurService]
})
export class AddPetComponent implements OnInit {
  animals = [1, 2, 3, 4, 1, 1, 1, 1, 1];
  constructor(private _imgurService: ImgurService) { }
  animalSet = [];
  ngOnInit() {
    this.animalSet = this.getItemSets(this.animals, 4);
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
  files: any;
  outputFileName(event) {
    let files = event.srcElement.files;
    console.log(files);
    this.files = files;
    
  }

  uploadFile() {
    this._imgurService.uploadImage(this.files);
  }


}
