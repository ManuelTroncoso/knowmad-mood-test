import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store, StoreModule } from '@ngrx/store';
import { Interceptor } from './interceptor';

describe('Interceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let store: Store;
  let snackBar: MatSnackBar;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot({})],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: Interceptor,
          multi: true,
        },
        MatSnackBar,
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    store = TestBed.inject(Store);
    snackBar = TestBed.inject(MatSnackBar);
  });

  it('should finalize the interceptor', () => {
    spyOn(console, 'log');

    httpClient.get('/api/data').subscribe();

    const req = httpTestingController.expectOne('/api/data');
    req.flush({});
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
