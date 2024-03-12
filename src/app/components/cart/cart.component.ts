import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cartprodact } from 'src/app/shared/interfaces/cartprodact';
import { CartService } from 'src/app/shared/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private _CartService: CartService,
    private _ToastrService: ToastrService
  ) {}
  // globalVirabol
  prodact: Cartprodact = {} as Cartprodact;
  // method bealt in
  ngOnInit(): void {
    this.data();
  }
  // my Method
  data() {
    this._CartService.getProdactCart().subscribe({
      next: (response) => {
        // console.log(response.data);

        this.prodact = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  remove(id: string): void {
    this._CartService.removeItem(id).subscribe({
      next: (respons) => {
        this.prodact = respons.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Updat(id: string, counter: number) {
    if (counter > 0) {
      this._CartService.UpdatItem(id, counter).subscribe({
        next: (respons) => {
          this.prodact = respons.data;
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  clear() {
    this._CartService.cleardata().subscribe({
      next: (respons) => {
        if (respons.message == 'success') {
          // this._ToastrService.success(respons.message);
          location.reload();
        }
      },
    });
  }
}
