import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { cartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  quantities: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  quantity: number = 1;
  totalPrice: number = 0
  productList: Product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    url: '',
    quantity: 1
  }

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
    
    ngOnInit(): void {}

    onChange(event: any) {
      this.quantity = event.target.value ;
    }

 
  
  addToCart(product: Product) {
    this.product.quantity = (this.quantity)
   this.cartservice.addToCart(product)
  }
}