import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ImgurService {

  constructor(private _http: Http) { }

  uploadImage(imageFiles: File[]) {
    let file = imageFiles[0];
    let formData:FormData = new FormData();
    formData.append('image', file, file.name);
    let imgurUrl = '';
    let headers:Headers = new Headers();
    headers.append('Authorization', 'Client-ID a5f5a8a9e31b6f4');
    this._http.post('https://api.imgur.com/3/image', formData, {
      headers: headers
    }).subscribe(response => {
      console.log(response);
    })
  }

}
