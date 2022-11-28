import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent {

  constructor(private productService: ProductService) {}

  model = new Product('',0,'');
  submitted = false;

  createProduct(){
    this.productService.createProduct(this.model.name,this.model.price,this.model.description);
    this.submitted = true;
  }

}
