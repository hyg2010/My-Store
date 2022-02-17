import { Injectable } from '@angular/core';
import { Product } from '../models/product';  
import { paymentInfo } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class cartService {
  productsInCart: Product[] = [];
  paymentinfo: paymentInfo[] = [];
  total!:number
  constructor() {}

  getItems(): Product[] {
    return this.productsInCart;
  }

//add item to cart
addToCart(product: Product): void {
  const cartItems = this.productsInCart.find((p) => p.id === product.id);
  if (!cartItems) {
    this.productsInCart.push(product);
 } 
  else {cartItems.quantity += product.quantity}
  alert('Product added to cart');
}


cartTotalPrice() {
const totalPrice = this.productsInCart.map(p => p.price * p.id) 
return totalPrice
} 


removeProduct(id: number) {
  this.productsInCart.filter((cartProduct) => cartProduct.id !== id); {
    return this.productsInCart
  }
}

clearCart() {
  this.productsInCart = [];
  return this.productsInCart;
}

paymentConfirmation() {
  this.paymentinfo = []
  return this.paymentinfo
   }
  }





