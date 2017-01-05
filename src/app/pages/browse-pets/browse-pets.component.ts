import { Component, OnInit } from '@angular/core';
import { ANIMALS } from '../../animal-data';

@Component({
  selector: 'app-browse-pets',
  templateUrl: './browse-pets.component.html',
  styleUrls: ['./browse-pets.component.css']
})
export class BrowsePetsComponent implements OnInit {
  animals = ANIMALS;
  constructor() { }

  ngOnInit() {
  }

}
