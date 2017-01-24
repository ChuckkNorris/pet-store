import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ImageBlob {
  blob?: Blob;
  data?: string;
}

@Injectable()
export class ImageService {

  constructor() { }

  getResizedImage(imageFile: File) : Observable<ImageBlob> {
    let toReturn: ImageBlob = {};
    let fr = new FileReader();
    return Observable.create(obs => {
      fr.onload = (frEvent) => {
        var image = new Image();
        image.onload = (imageEvent) => {
          let resizedUrl = this.resize(image, 300, 300);
          toReturn.data = resizedUrl;
          console.log(resizedUrl);
          let resizedImage = this.dataURLToBlob(resizedUrl);
          console.log(resizedImage);
          toReturn.blob = resizedImage;
          obs.next(toReturn);
        };
        let frResult = (frEvent as any).target.result;
        image.src = frResult;
        
      }
      fr.readAsDataURL(imageFile);
    });

  }

  private resize(img, maxWidth: number, maxHeight: number): string {
    // Get the images current width and height
    let width = img.width;
    let height = img.height;
    // Set the WxH to fit the Max values (but maintain proportions)
    if (width > height) {
        if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
        }
    } else {
        if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
        }
    }
    // create a canvas object
    let canvas = document.createElement("canvas");
    // Set the canvas to the new calculated dimensions
    canvas.width = width;
    canvas.height = height;
    let ctx = canvas.getContext("2d");  
    ctx.drawImage(img, 0, 0,  width, height); 
    let dataUrl = canvas.toDataURL('image/jpeg');
    return dataUrl;
  }

  private dataURLToBlob(dataURL) {
    let BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) == -1) {
        let parts = dataURL.split(',');
        let contentType = parts[0].split(':')[1];
        let raw = parts[1];
        return new Blob([raw], {type: contentType});
    }

    let parts = dataURL.split(BASE64_MARKER);
    let contentType = parts[0].split(':')[1];
    let raw = window.atob(parts[1]);
    let rawLength = raw.length;

    let uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], {type: contentType});
  }
}
