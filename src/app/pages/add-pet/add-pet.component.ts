import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  animals = [1, 2, 3, 4, 1, 1, 1, 1, 1];
  constructor() { }
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


}
