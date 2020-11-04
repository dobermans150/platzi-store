import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  urlProduct = environment.products;

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlProduct);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.urlProduct}/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.urlProduct, product);
  }

  updateProduct(id: string, changes: Partial<Product>): Observable<Product> {
    return this.http.put<Product>(`${this.urlProduct}/${id}`, changes);
  }

  deleteProduct(id: string): Observable<boolean>{
    return this.http.delete<boolean>(`${this.urlProduct}/${id}`);

  }
}
