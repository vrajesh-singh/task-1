import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductType } from './product-type';
@Injectable({
  providedIn: 'root'
})
export class PopulateDataServiceService implements InMemoryDbService {

  ProductData:ProductType[];
  constructor() { 
    this.ProductData;
  }
  createDb() {
   
    var ProductData = [
      { ProductId: 101, ProductCode: 55601, ProductName: "Jug", Category: "Metal", Price: 200 },
      { ProductId: 102, ProductCode: 66501, ProductName: "Bottal", Category: "Metal", Price: 999 },
      { ProductId: 103, ProductCode: 77051, ProductName: "Table Lamp", Category: "Metal", Price: 1500 },
      { ProductId: 104, ProductCode: 98774, ProductName: "Keyboard", Category: "software", Price: 1199 },
      { ProductId: 105, ProductCode: 68774, ProductName: "CPU", Category: "software", Price: 15000 },
      { ProductId: 106, ProductCode: 54844, ProductName: "Pen", Category: "stationary", Price: 50 },
      { ProductId: 107, ProductCode: 79555, ProductName: "X NoteBook", Category: "stationary", Price: 25 },
      { ProductId: 108, ProductCode: 43316, ProductName: "X Book", Category: "stationary", Price: 500 },
      { ProductId: 109, ProductCode: 28774, ProductName: "Desktop", Category: "software", Price: 9000 },     
    ];
    var shot=ProductData.length;
    return { ProductData,shot }
  };
}