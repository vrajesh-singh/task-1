import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductType } from '../PopulateDataService/product-type';

@Injectable({
  providedIn: 'root'
})
export class ProductMockApiService {
  Alldata:ProductType;

  constructor(private _http:HttpClient) { 
    this.getAllProduct();
  }
  url:string="/api/ProductData";
  getAllProduct():Observable<ProductType[]>{
    return this._http.get<ProductType[]>(this.url);
  }
}
