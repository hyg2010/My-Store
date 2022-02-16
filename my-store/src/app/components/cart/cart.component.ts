import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { cartService } from 'src/app/services/cart.service'; 
import { Product } from 'src/app/models/product'
import { paymentInfo } from 'src/app/models/payment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
@Input() productsInCart: Product[] = [];

name: string = '';
address: string = '';
ccn: string = '';

cartItems: Product[] = [];

constructor(private CartService: cartService) { }


  ngOnInit(): void {
    this.cartItems = this.CartService.getItems();
  }

cartTotalPrice(): number {
  return this.CartService.cartTotal();
}









}