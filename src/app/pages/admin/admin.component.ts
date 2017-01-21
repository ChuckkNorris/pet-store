import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _petService: PetService) { }

  ngOnInit() {
  }


  saveAnimal(animalName: string) {
    this._petService.addAnimal(animalName);
  }

}
