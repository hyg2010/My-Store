import { Component, OnInit, Input, EventEmitter} from '@angular/core';
import { cartService } from 'src/app/services/cart.service'; 
import { Product } from 'src/app/models/product'
import { paymentInfo } from 'src/app/models/payment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
@Input() product: Product[] = []

name: string = '';
address: string = '';
ccn: string = '';
total: number = 0;
cartTotal: number = 0

cartItems: Product[] = [];
constructor(private CartService: cartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.CartService.getProduct();
    this.cartTotal = this.CartService.cartTotalPrice();
  }

  

onSubmit() {
  const paymentinfo: paymentInfo = {
    name: this.name,
    address: this.address,
    ccn: this.ccn,
    total: this.total
  };


  this.CartService.getPayment(paymentinfo);
  this.router.navigate(['/confirmation']);

  this.name = '';
  this.address = '';
  this.ccn = '';
  this.total = 0;



}



removeCartItem(id: number): void {
  this.cartItems = this.cartItems.filter(
    (product) => product.id !== id
  );
  this.CartService.removeProduct(id);
  
}
}
