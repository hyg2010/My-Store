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
@Output() addToCart: EventEmitter<Product> = new EventEmitter

quantities: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
quantity: number = 1;

  constructor(private cartservice: cartService) {
    
    this.product = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      url: '',
      quantity: 0
    }
   }
  
  ngOnInit(): void {
  }

  addProduct(product: Product): void {
    this.cartservice.addToCart(product)
  }
}
