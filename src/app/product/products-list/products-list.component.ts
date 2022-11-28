import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ProductIn } from '../productIn';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent {
  constructor(private productService: ProductService) {}

  public Products:ProductIn[]=[];

  getAllProducts(){
    this.productService.fetchProducts()
      .then((arg: any) =>
      this.Products=JSON.parse(arg)
      );
  }

  deleteProduct(id:Number){
    this.productService._deleteProduct(id);
    this.Products = [];
    console.log(this.Products);
    this.getAllProducts();
  }

  ngOnInit() {
    this.getAllProducts();
  }

}
