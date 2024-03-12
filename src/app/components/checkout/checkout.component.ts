import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _FormBuilder: FormBuilder,
    private _CartService: CartService
  ) {}

  // globalvirabol
  cartId: any = '';
  // bealtInFunction
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (parem) => {
        this.cartId = parem.get('id');
      },
    });
  }
  // myfunction
  userData: FormGroup = this._FormBuilder.group({
    details: ['',[Validators.required]],
    phone: ['',[Validators.required]],
    city: ['',[Validators.required]],
  });

  sendData() {
    // console.log(this.userData.value);
    if(this.userData.valid){
      this._CartService.checkout(this.cartId, this.userData.value).subscribe({
        next: (respons) => {
          if (respons.status == 'success') {
            // console.log(respons);
            window.open(respons.session.url, '_self');
          }
        },
      });
    }
    else
    {
      this.userData.markAllAsTouched();
    }
 
  }
}
