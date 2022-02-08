import { Component, OnInit } from '@angular/core';
import { cartService } from 'src/app/services/cart.service'
import { ProductService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  product: Product = {
    id: 0,
    name: 'string',
    price: 0,
    description: '',
    url: '',
    quantity: 0
  }
  quantity: number = 1;
  quantities: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedQuantity: string = '';

  constructor(
    private cartservice: cartService, 
    private productservice: ProductService, 
    private route: ActivatedRoute,
    ) {
     }

ngOnInit(): void {
const products = this.productservice.getProducts();
const routeParams = this.route.snapshot.paramMap;
const id = Number(routeParams.get('id'))
this.product = products.find(product => product.id === id)

   }

   addToCart(product: Product) {
  product.quantity = this.quantity;
  this.cartservice.addToCart(product)
    window.alert('product added to cart!');
  }

}

