import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient
  ) { }

  authenticate(data: any) {
    return this.http.post('http://localhost:3000/accounts/authenticate', data);
  }

  get() {
    return this.http.get('http://localhost:3000/products');
  }

  save(product: Product) {
    return this.http.post('http://localhost:3000/products', product);
  }

  update(product: Product) {
    return this.http.put(`http://localhost:3000/products/${product.code}`, product);
  }

  delete(product: Product) {
    return this.http.delete(`http://localhost:3000/products/${product.code}`);
  }
}
