import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Hero, Page } from '../models/hero.model';
import { HeroesService } from './heroes.service';

describe('HeroesService', () => {
  let service: HeroesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroesService],
    });

    service = TestBed.inject(HeroesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get heroes', () => {
    const mockHeroes: Page<Hero> = {
      entities: [{ id: 1, name: 'Mocked Hero' }],
      pageIndex: 0,
      total: 1,
      pageSize: 10,
      isLoading: false,
    };

    const name = '';
    const pageIndex = 0;
    const pageSize = 10;

    service.getHeroes(name, pageIndex, pageSize).subscribe((heroes) => {
      expect(heroes).toEqual(mockHeroes);
    });

    const req = httpTestingController.expectOne(
      `${service['baseUrl']}?name=${name}&pageIndex=${pageIndex}&pageSize=${pageSize}`
    );
    expect(req.request.method).toBe('GET');

    // Mockear la respuesta sin hacer una solicitud real al backend
    req.flush(mockHeroes);
  });
});
