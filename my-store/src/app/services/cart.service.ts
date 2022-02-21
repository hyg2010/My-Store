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

  getProduct(): Product[] {
    return this.productsInCart;
  }

//add item to cart
addToCart(product: Product): void {
  const cartItems = this.productsInCart.find((prod) => prod.id == product.id)
  if (!cartItems) {
    this.productsInCart.push(product);
 } 
  else {cartItems.quantity += product.quantity}
  alert('Product added to cart');
}

totalPrice: number = 0
quantity: number = 0

  cartTotalPrice(): number {
    this.totalPrice = this.productsInCart.reduce((accumulator, Product) => {
      return accumulator + Product.price
}, 0);
return this.totalPrice; 
  }

removeProduct(id: number) {
  this.productsInCart.filter((cartProduct) => cartProduct.id !== id); 
 {
  alert('remove product from cart') 
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





