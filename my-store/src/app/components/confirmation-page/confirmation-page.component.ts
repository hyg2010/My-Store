import { Component, OnInit } from '@angular/core';
import { cartService } from 'src/app/services/cart.service';
import { paymentInfo } from 'src/app/models/payment';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {
  paymentinfo: paymentInfo = {
    name: '',
    address: '',
    ccn: '',
    total: 0
  }

  constructor(private cartservice: cartService) { }
  


  ngOnInit(): void {
   this.paymentinfo = this.cartservice.getPaymentInfo();
  }

}
