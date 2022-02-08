import { Component, OnInit } from '@angular/core';
import { cartService } from 'src/app/services/cart.service'; 
import { FormBuilder } from '@angular/forms';
import { Product } from 'src/app/models/product'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartproducts: Product[] = [];
  productName: string = '';
  price: number = 0;
  details: string = '';
  url: string = '';
  quantity: number = 0;


  checkoutForm = this.formBuilder.group({
    name: '',
    ccn: '',
    address: '',
    totalPrice: ''
    
  });

  constructor(
  private CartService: cartService,
  private formBuilder: FormBuilder

  ) { }
  
  onSubmit(): void {
    // Process checkout data here
    this.cartproducts = this.CartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  ngOnInit(): void {
  }
}

