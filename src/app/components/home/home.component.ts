import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { ApidataService } from 'src/app/shared/service/apidata.service';
import { CartService } from 'src/app/shared/service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _ApidataService: ApidataService,
    private _CartService: CartService,
    private _ToastrService: ToastrService
  ) {}
  // GlobalVairabol
  prodact: any[] = [];
  categorySlider: any[] = [];
  item: string = '';
  // method
  ngOnInit(): void {
    this._ApidataService.data().subscribe({
      next: (respons) => {
        this.prodact = respons.data;
      },
    });

    this._ApidataService.categorySlider().subscribe({
      next: (respons) => {
        // console.log(respons.data);
        this.categorySlider = respons.data;
      },
    });
  }

  // cart
  addCart(id: string) {
    this._CartService.addToCart(id).subscribe({
      next: (respons) => {
        this._ToastrService.success(respons.message);
        // console.log(respons);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  // categorySlider
  caregorySlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['previous', 'Next'],
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 6,
      },
    },
    nav: true,
  };
  // slider
  slider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    items: 1,
    nav: true,
  };
}
