import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { cartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {
@Input() product: Product;

productQuantity: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
quantity: number = 1;

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
  
  ngOnInit(): void {
  }

  addToCart(product: Product) {
    this.cartservice.addToCart(product);
    product.quantity = this.quantity
    alert('Product added to cart');
  }

  public onOptionsSelected(event: any) {
    this.quantity = event.target.value;
 }
}
