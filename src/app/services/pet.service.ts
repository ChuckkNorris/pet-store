import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Breed } from '../models/models';

@Injectable()
export class PetService {

  constructor(private _http: Http) { }

  public getPets() {
    this._http.get('')
  }

  public getBreeds() : Observable<Breed[]> {
    return Observable.create(obs => {
      this._http.get('http://localhost:5000/api/breeds').subscribe(breeds => {
        console.log(breeds);
        obs.next(breeds.json() as Breed[]);
      });
    });
  }

}
