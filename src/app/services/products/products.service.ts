import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private API_BASE_URL = 'https://secret-headland-54547.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }

  public getProducts(): Observable<Product[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImltZyI6bnVsbCwicm9sIjoiQURNSU5fUk9MRSIsInN0YXRlIjp0cnVlLCJnb29nbGUiOmZhbHNlLCJfaWQiOiI1ZDk2NGJkNTI0ODFhYjAwMTc5ODYzYzUiLCJuYW1lIjoicm9kb2xmbyIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJfX3YiOjB9LCJpYXQiOjE1NzA2NTA4NzMsImV4cCI6MTU3MDczNzI3M30.bbEfxECbQUh1N10KNZ5VlG9MaQoWtVARyWXgonU_p9c'
    });
    return this.http.get<Product[]>(`${this.API_BASE_URL}/products`, { headers: headers });
    }
}
