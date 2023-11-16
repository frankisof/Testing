import { TestBed } from '@angular/core/testing';
import { throwError } from 'rxjs';
import { MediaService } from './media.service';

describe('MediaService', () => {
  let service: MediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaService);
  });

  
    
  xit('should return an error message for client-side errors', () => {
    const errorEvent = new ErrorEvent('TestError', {
      message: 'Client-side error occurred'
    });

    
});

  })

