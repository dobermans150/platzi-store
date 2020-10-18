import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get('https://platzi-store.herokuapp.com/products');
  }

  getProduct(id: string): Observable<any>{
    return this.http.get(`https://platzi-store.herokuapp.com/products/${id}`);

  }
}
