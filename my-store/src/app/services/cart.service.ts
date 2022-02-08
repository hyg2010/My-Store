import { Injectable } from '@angular/core';
import { Product } from '../models/product';  
import { paymentInfo } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class cartService {
  productsInCart: Product[] = [];
  paymentinfo: paymentInfo[] = [];
  constructor() {}

  getItems(): Product[] {
    return this.productsInCart;
  }

//add item to cart
addToCart(product: Product): void {
  const checkCartProduct = this.productsInCart.find((p) => p.id === product.id);
  if (!checkCartProduct) {
    this.productsInCart.push(product);
  } 

  else {checkCartProduct.quantity += product.quantity }
  alert('Product added to cart')

}

cartTotal(): number {
  let totalPrice = 0;
  this.productsInCart.forEach(p => totalPrice += p.quantity * p.price);
  return totalPrice; 
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





