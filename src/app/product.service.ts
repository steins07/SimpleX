import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from './types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpClient=inject(HttpClient);
  constructor() { }
  getProduct(){
    return this.httpClient.get<Product[]>("http://localhost:3000/product")
  }
  getProductById(id: number){
    return this.httpClient.get<Product>("http://localhost:3000/product/"+id)
  }
  addProduct(product: Product){
    return this.httpClient.post<Product>("http://localhost:3000/product",product)
  }
  updateProduct(product: Product){
    return this.httpClient.put<Product>("http://localhost:3000/product/"+product.id,product)
  }
}
