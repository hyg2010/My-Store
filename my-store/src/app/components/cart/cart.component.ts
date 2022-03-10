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
totalPrice: any = '';
cartTotal: any = 0
cartItems: Product[] = [];
quantity = 1; 

constructor(private CartService: cartService, private router: Router) {}

ngOnInit(): void {
  this.cartItems = this.CartService.getProduct();
  
  let value: number = 0
  this.cartItems.length ? this.cartItems.forEach(p => {
    value = value + (Number(p.price) * Number(p.quantity))
  }) : value = 0
  this.totalPrice = value.toFixed(2)
  return this.totalPrice
}


totalValueInCart() {
  this.totalPrice = 0;
  this.product.map((p) => { this.totalPrice += p.price * p.quantity;
  });
  this.totalPrice = Number(this.totalPrice.toFixed(2))
}


updateCart(product:Product) {
  if (product.quantity == 0) {
    this.CartService.removeProduct(product);
  } 

  this.totalPrice = 0;
  for (let cartAmount = 0; cartAmount < this.cartItems.length; cartAmount++) {
    let quantity = this.cartItems[cartAmount].quantity;
    if (quantity === 0) {
    }
    this.totalPrice += this.cartItems[cartAmount].price * quantity;
  }
}

removeProduct(product: Product) {
  this.CartService.removeProduct(product);
}


onSubmit() {
  const paymentinfo: paymentInfo = {
    name: this.name,
    address: this.address,
    ccn: this.ccn,
    total: this.totalPrice
  };


  this.CartService.getPayment(paymentinfo);
  this.router.navigate(['/confirmation']);

  this.name = '';
  this.address = '';
  this.ccn = '';
  this.totalPrice = '';

}

}
