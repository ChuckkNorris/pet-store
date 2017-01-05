import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  animals = [1,2,3,4,5,6];
  constructor() { }

  ngOnInit() {
  }

  
}
