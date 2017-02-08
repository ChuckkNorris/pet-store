import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Breed, Animal, Pet } from '../models/models';

@Injectable()
export class PetService {

  constructor(private _http: Http) { }
  private hostUrl: string = 'http://localhost:5000/api/';

   public getAnimals() : Observable<Animal[]> {
    return this.getRequest<Animal[]>('animals');
  }

  public getBreeds(animalId?: number) : Observable<Breed[]> {
    let queryString = '';
    if (animalId)
      queryString += 'animalId=' + animalId;
    return this.getRequest<Breed[]>('breeds', queryString);
  }

  public getPets(animalId?: number, breedId?: number) : Observable<Pet[]> {
    let animalQueryString = this.getQueryStringList('animalId', [animalId]);
    let breedQueryString = this.getQueryStringList('breedId', [breedId]);
    return this.getRequest<Pet[]>('pets',animalQueryString + breedQueryString);
  }

  public getRequest<T>(endPoint: string, queryString?: string) : Observable<T> {
    return Observable.create(obs => {
      let fullUrl = this.hostUrl + endPoint;
      if (queryString)
        fullUrl += '?' + queryString;
      this._http.get(fullUrl).subscribe(response => {
        if (response.ok)
          obs.next(response.json() as T);
        else
          obs.next(null);
      });
    });
  }

  public postRequest(endPoint:string, body:any, queryString?:string): Observable<any> {
    let fullUrl = this.hostUrl + endPoint;
    if (queryString)
      fullUrl += '?' + queryString;
    return  Observable.create(obs => {
      this._http.post(fullUrl, body).subscribe(() => obs.next());
    });
  }

  public saveAnimal(animal: Animal) : Observable<any> {
    return this.postRequest('animals', animal);
  }

  public saveBreed(breed: Breed) : Observable<any> {
    return this.postRequest('breeds', breed);
  }

  public savePet(pet: Pet) : Observable<any> {
    return this.postRequest('pets', pet);
    // this.postRequest()
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
