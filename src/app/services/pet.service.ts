import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Breed, Animal, Pet } from '../models/models';

@Injectable()
export class PetService {

  constructor(private _http: Http) { }
  private hostUrl: string = 'http://localhost:5000/api/';

  public getAnimals() : Observable<Animal[]> {
    return  Observable.create(obs => {
      this._http.get(this.hostUrl + 'animals').subscribe(animals => {
        console.log(animals);
        obs.next(animals.json() as Animal[]);
      })
    });
  }

  public getBreeds(animalId?: number) : Observable<Breed[]> {
    return Observable.create(obs => {
      this._http.get(this.hostUrl + 'breeds').subscribe(breeds => {
        console.log(breeds);
        obs.next(breeds.json() as Breed[]);
      });
    });
  }

  public getPets(animalIds: number[], breedIds: number[]) : Observable<Pet[]> {
    let animalQueryString = this.getQueryStringList('animalIds', animalIds);
    let breedQueryString = this.getQueryStringList('breedIds', breedIds);
    return  Observable.create(obs => {
      this._http.get(this.hostUrl + 'pets?' + animalQueryString + breedQueryString).subscribe(pets => {
        console.log(pets);
        obs.next(pets.json() as Pet[]);
      });
    });
    
  }

  public addAnimal(animalName: string) {

  }

  public addBreed(animalId: number, breedName: string) {

  }

  public addPet(pet: Pet) {
    
  }

  private getQueryStringList(paramKey: string, values: any[]): string {
    let toReturn = '';
    if (values) {
      values.forEach(value => {
        toReturn += (paramKey + '=' + value + '&');
      });
    }
    return toReturn;
  }

}
