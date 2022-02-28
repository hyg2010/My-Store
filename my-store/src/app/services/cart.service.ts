import { Injectable } from '@angular/core';
import { Product } from '../models/product';  
import { paymentInfo } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class cartService {
  productsInCart: Product[] = [];
  paymentinfo: paymentInfo = {
    name: '',
    address: '',
    ccn: '',
    total: 0
  }
  constructor() {}

  getProduct(): Product[] {
    return this.productsInCart;
  }

addToCart(product: Product) {
  const cartItems = this.productsInCart.find((prod) => prod.id == product.id)
  if (cartItems?.quantity && product.quantity) {
    cartItems.quantity += product.quantity;
  } else {
    this.productsInCart.push(product);
    alert('product added to cart')
  }
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


getPayment(paymentinfo: paymentInfo): void {
  this.paymentinfo = paymentinfo;
   }
 
   getPaymentInfo() {
     return this.paymentinfo
   }
  }


