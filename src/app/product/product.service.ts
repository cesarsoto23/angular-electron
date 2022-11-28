import { Injectable } from '@angular/core';
import { Product } from './product';

declare function createProduct(name:String,price:Number,description:String):any;
declare function getProducts():any;
declare function deleteProduct(id:Number):any;

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() {}

  public createProduct(name:String,price:Number,description:String){
    createProduct(name,price,description);
  }

  public fetchProducts(){
    let products=getProducts();
    return products;
  }

  public _deleteProduct(id:Number){
    deleteProduct(id);
  }
}

