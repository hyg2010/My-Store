import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { cartService } from 'src/app/services/cart.service'
import { ProductService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute, ParamMap} from '@angular/router';

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
    quantity: 1
  }
  quantity: number = 1;
  quantities: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  id: number = 0; 

  constructor(
    private cartservice: cartService, 
    private productservice: ProductService, 
    private route: ActivatedRoute,
    ) {
     }

ngOnInit(): void {

  this.route.paramMap.subscribe((routeParams: ParamMap) => {
    this.id = Number(routeParams.get('id'))
  
    this.productservice.getProducts().subscribe((product) => {
    this.product = product.find(prod => prod.id === this.id) as unknown as Product;
  
    });
  });
}

onChange(event: any) {
      this.quantity = event.target.value ;
    }
  
     addToCart(product: Product):void {
       this.product.quantity = (this.quantity)
      this.cartservice.addToCart(this.product)
      
    }
  }
