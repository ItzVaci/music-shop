import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000';
  private filterState = new BehaviorSubject<{
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    searchTerm?: string;
  }>({});

  public filters$ = this.filterState.asObservable();

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  setFilters(filters: any): void {
    this.filterState.next(filters);
  }

  getFilters() {
    return this.filterState.value;
  }
}
