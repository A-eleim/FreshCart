import { Component, OnInit } from '@angular/core';
import { CProdact } from 'src/app/shared/interfaces/c-prodact';
import { BrandapiService } from 'src/app/shared/service/brandapi.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
constructor(private _BrandapiService:BrandapiService){}
// globalVairabol
  brandData:CProdact[]=[{} as CProdact];
// bealtInFunction
ngOnInit(): void {
  this._BrandapiService.getBrands().subscribe({
    next:(respons)=>{
      // console.log(respons.data);
      
      this.brandData=respons.data;
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}
}
