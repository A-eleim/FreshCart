import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProdactapiService } from 'src/app/shared/service/prodactapi.service';
import { CProdact } from 'src/app/shared/interfaces/c-prodact';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private _ProdactapiService:ProdactapiService){}
  // globalVairabol
    prodactData:any[]=[{}];
  // bealtInFunction
  
  ngOnInit(): void {
    this._ProdactapiService.getAllprodact().subscribe({
      next:(respons)=>{
        // console.log(respons.data);
        
        this.prodactData=respons.data;
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
