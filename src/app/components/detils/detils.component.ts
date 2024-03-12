import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { prodact } from 'src/app/shared/interfaces/prodact';
import { ApidataService } from 'src/app/shared/service/apidata.service';
import { CartService } from 'src/app/shared/service/cart.service';

@Component({
  selector: 'app-detils',
  templateUrl: './detils.component.html',
  styleUrls: ['./detils.component.css'],
})
export class DetilsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ApidataService: ApidataService,
    private _CartService: CartService,
    private _ToastrService: ToastrService
  ) {}
  // GlobalVirabol
  data: prodact = {} as prodact;

  // bealt in method
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (par) => {
        let id: any = par.get('id');
        this._ApidataService.dataOfItem(id).subscribe({
          next: (respons) => {
            this.data = respons.data;
            // console.log(respons.data);
          },
        });
      },
    });
  }
  // my method
  categoryslid: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: false,
  };
  add(id: string) {
    this._CartService.addToCart(id).subscribe({
      next: (respons) => {
        // console.log(respons);
        this._ToastrService.success(respons.message);
      },
    });
  }
}
