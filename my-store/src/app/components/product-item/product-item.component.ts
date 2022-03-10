import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { cartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() addProduct: EventEmitter<Product> = new EventEmitter();

  quantities: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  quantity: any = 1;
 

    constructor(private cartservice: cartService) {
      
   
     }
    
    ngOnInit(): void {}

 
  
    submitAddProduct(product: Product) {
    let cartproducts = product
     this.addProduct.emit(cartproducts);
   }

   onChange(quantity: number) {
    this.quantity = Number(quantity)
  }

  }
