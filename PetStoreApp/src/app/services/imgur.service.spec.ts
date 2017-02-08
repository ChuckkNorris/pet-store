/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImgurService } from './imgur.service';

describe('ImgurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImgurService]
    });
  });

  it('should ...', inject([ImgurService], (service: ImgurService) => {
    expect(service).toBeTruthy();
  }));
});
