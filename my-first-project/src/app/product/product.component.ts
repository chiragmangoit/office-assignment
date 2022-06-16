import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productData = [];
  productCategory = [];
  uniqueCategory = [];
  category = [];
  constructor(private productServe:ProductService) { }

  ngOnInit(): void {
    this.productData =  this.productServe.getProduct();
    this.getCategory();  
  }

  getCategory() {
    this.productData.forEach(cat => {
      this.productCategory.push(cat.category)
    });
    this.uniqueCategory = [...new Set(this.productCategory)];
  }

  showProducts(items:string){
    this.category = this.productData.filter(product => product.category == items);
  }

}
