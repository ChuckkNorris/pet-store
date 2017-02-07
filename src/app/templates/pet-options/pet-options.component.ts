import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { Animal, Breed } from '../../models/models';

@Component({
  selector: 'app-pet-options',
  templateUrl: './pet-options.component.html',
  styleUrls: ['./pet-options.component.css']
})
export class PetOptionsComponent implements OnInit {
  constructor(private _petService: PetService) {}
  ngOnInit() {
    this._petService.getAnimals().subscribe(animals => this.animalOptions = animals);
  }

  @Input() allowAll: boolean = false;
  @Input() selectedAnimalId: number;
  @Input() selectedBreedId: number;
  @Output() selectedAnimalIdChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() selectedBreedIdChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() change: EventEmitter<number> = new EventEmitter<number>();
  private animalOptions: Animal[] = [];
  private breedOptions: Breed[] = [];

  onAnimalChanged() {
      if (this.selectedAnimalId) 
      this._petService.getBreeds(this.selectedAnimalId)
        .subscribe(breeds => this.breedOptions = breeds);
      this.resetBreeds()
      this.selectedAnimalIdChange.emit(this.selectedAnimalId);
      this.onChange();
  }

  resetBreeds() {
    this.selectedBreedId = undefined;
    this.breedOptions = [];
    this.onBreedChanged();
  }

  onBreedChanged() {
    this.selectedBreedIdChange.emit(this.selectedBreedId);
    this.onChange();
  }

  onChange() {
    this.change.emit();
  }

}
