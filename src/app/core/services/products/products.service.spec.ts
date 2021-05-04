import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  const { products } = environment;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductsService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('test for getAllProducts', () => {

    it('Should be response a array of products', () => {
      // arrange
      const expectData = [
        {
          id: '1',
          title: 'asa',
          price: 12,
          description: 'descripcion',
          image: 'im/img.jpg',
        },
        {
          id: '2',
          title: 'asdadddd',
          price: 12,
          description: 'descripcion',
          image: 'im/img.jpg',
        },
      ];

      let dataError;
      let dataResponse;
      // act
      service.getAllProducts().subscribe(
        (response) => (dataResponse = response),
        (error) => (dataError = error)
      );

      const req = httpTestingController.expectOne(`${products}`);
      req.flush(expectData);

      // assert
      expect(dataResponse.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
    });
  });
});
