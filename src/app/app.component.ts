import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PopulateDataServiceService } from './PopulateDataService/populate-data-service.service';
import { ProductType } from './PopulateDataService/product-type';
import { ProductMockApiService } from './ProductMockApi/product-mock-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  receiveDataVar$: Observable<ProductType>;
  receiveDataVar: ProductType[];
  rowCount: number;
  check: boolean = true;
  check1: boolean = true;

  aa: any;
  sortNumber: any;
  // check1: any;
  constructor(private _mockApi: ProductMockApiService, private _populate: PopulateDataServiceService) {
    this.getS();
    console.log(this.sortNumber = this._populate.createDb().shot);
  }
  sortId(ProductId: string) {
    if (this.check) {
      let newArr = this.receiveDataVar.sort((a, b) => a.ProductId - b.ProductId);
      this.receiveDataVar = newArr;
    }
    else {
      let newArr = this.receiveDataVar.sort((a, b) => b.ProductId - a.ProductId);
      this.receiveDataVar = newArr;
    }
    this.check = !this.check;
  }
  sortChar(property) {
    this.check1 = !this.check1;
    let direction = this.check1 ? 1 : -1;
    this.receiveDataVar.sort(function (a, b)   {
      if (a[property] < b[property]) {
        return -1 * direction
      }
      else if (a[property] > b[property]){
        return 1*direction;
      }
      else {
        return 0;
      }
    });
  }

    sortCode(ProductCode: string) {
      if (this.check) {
        let newArr = this.receiveDataVar.sort((a, b) => a.ProductCode - b.ProductCode);
        this.receiveDataVar = newArr;
      }
      else {
        let newArr = this.receiveDataVar.sort((a, b) => b.ProductCode - a.ProductCode);
        this.receiveDataVar = newArr;
      }
      this.check = !this.check;
    }
    sortPrice(Price: string) {
      if (this.check) {
        let newArr = this.receiveDataVar.sort((a, b) => a.Price - b.Price);
        this.receiveDataVar = newArr;
      }
      else {
        let newArr = this.receiveDataVar.sort((a, b) => b.Price - a.Price);
        this.receiveDataVar = newArr;
      }
      this.check = !this.check;
    }
    sortSr(SrNo: string) {
      
      
    }
    fun(a:number){
      this.aa=a;
      console.log(this.aa);
    }
    getS() {
      this._mockApi.getAllProduct().subscribe((res: ProductType[]) => { this.receiveDataVar = res });
    }
  }
