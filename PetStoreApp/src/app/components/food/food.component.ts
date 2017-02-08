import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  foods = [{name: 'kibble'}, {name: 'beer'}, {name: 'apple'}, {name: 'tuna'},]

}
