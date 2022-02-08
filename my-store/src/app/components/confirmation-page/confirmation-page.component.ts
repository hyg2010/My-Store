import { Component, OnInit } from '@angular/core';
import { cartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {

paymentconfirmation = this.cartservice.paymentConfirmation

  constructor(private cartservice: cartService) { }
  


  ngOnInit(): void {
  }

}
