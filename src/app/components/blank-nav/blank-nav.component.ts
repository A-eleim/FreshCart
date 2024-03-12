import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blank-nav',
  templateUrl: './blank-nav.component.html',
  styleUrls: ['./blank-nav.component.css']
})
export class BlankNavComponent {
  
  constructor(private _Router:Router){};
  
  
  out():void{
    this._Router.navigate(['/login']);
    localStorage.removeItem('eToken');
    
  };
}
