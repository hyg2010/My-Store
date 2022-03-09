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
  totalPrice: any = 0 
  constructor() {}


addToCart(product: Product) {
  if (this.productsInCart.length) {
    let count = 0
    this.productsInCart.forEach(p => {
      p.id == product.id ? 
      p.quantity=Number(p.quantity) + Number(product.quantity) : count += 1
    })
    if (count == this.productsInCart.length) {
      this.productsInCart.push(product)
    }
  } else {
    this.productsInCart.push(product)
  }
  alert('product added to cart')
  
}

getProduct(): Product[] {
  return this.productsInCart;
}

  cartTotalPrice(): number {
    let value: number = 0
    this.productsInCart.length ? this.productsInCart.forEach(p => {
      value =+  (p.price * p.quantity)
    }) : value = 0
    this.totalPrice =  value.toFixed(2)
    return this.totalPrice;
    }


totalValueInCart(): string {
  let value: number = 0
  this.productsInCart.length ? this.productsInCart.forEach(p => {
    value = value + (Number(p.price) * Number(p.quantity))
  }) : value = 0
  this.totalPrice = value.toFixed(2)
  return this.totalPrice

}

removeProduct(product: Product) {
  this.productsInCart.filter((prod) => prod.id !== product.id); 
 {
  alert('remove product from cart') 
    return this.productsInCart
  }
}

getPayment(paymentinfo: paymentInfo) {
  this.paymentinfo = paymentinfo;
  return this.paymentinfo;
   }
 
   getPaymentInfo() {
     return this.paymentinfo
   }
  }


