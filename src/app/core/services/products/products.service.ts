import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { catchError, map } from 'rxjs/operators';

interface User {
  email: string;
  gender: string;
  phone: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  urlProduct = environment.products;

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.urlProduct)
      .pipe(catchError((error) => this.handleError(error)));
  }

  getProduct(id: string): Observable<Product> {
    return this.http
      .get<Product>(`${this.urlProduct}/${id}`)
      .pipe(catchError((error) => this.handleError(error)));
  }

  createProduct(product: Product): Observable<Product> {
    return this.http
      .post<Product>(this.urlProduct, product)
      .pipe(catchError((error) => this.handleError(error)));
  }

  updateProduct(id: string, changes: Partial<Product>): Observable<Product> {
    return this.http
      .put<Product>(`${this.urlProduct}/${id}`, changes)
      .pipe(catchError((error) => this.handleError(error)));
  }

  deleteProduct(id: string): Observable<boolean> {
    return this.http
      .delete<boolean>(`${this.urlProduct}/${id}`)
      .pipe(catchError((error) => this.handleError(error)));
  }

  // EJEMPLO DE TIPADO DE DATOS CUANDO TIENES METADATA EN LOS SERVICIOS.

  getRandomUsers(): Observable<User[]> {
    return this.http.get('https://ra2ndomuser.me/api/?results=2').pipe(
      catchError((error) => this.handleError(error)),
      map((response: any) => response.results as User[])
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError('ups algo salio mal');
  }
}
