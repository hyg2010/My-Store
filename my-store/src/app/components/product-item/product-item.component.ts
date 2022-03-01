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
  productsInCart!: Product;
  totalPrice: number | undefined;

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


   

    addToCart(product: Product):void {let value: number = 0
      this.productsInCart.length? this.productsInCart.forEach(p => {
        value = value + (p.price * p.items)
      }) : value = 0
      this.totalPrice = value.toFixed(2)
      return this.totalPrice
      
   this.product.quantity = (this.quantity)
   this.cartservice.addToCart(this.product)
  }
}