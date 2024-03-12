import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private _ApiService: ApiService ,private _Route:Router) {}
// globalVirapol
  errorMasseg:string='';
  isSpiner:boolean=false;
  // formGroup
  regestarForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/), 
    ]),
    rePassword: new FormControl(''),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  },{validators:[this.confarmpass]} as FormControlOptions);

  // my Method
  confarmpass(group:FormGroup){
    let pass=group.get('password');
    let repass=group.get('rePassword');
    if(pass?.value!=repass?.value){
      repass?.setErrors({confirm:true})
    }
    else if (repass?.value=='')
    repass.setErrors({required:true})
  }
  submitForm() {
    // console.log(this.regestarForm.value);
    if (this.regestarForm.valid) {
      this.isSpiner=true;
      this._ApiService.apiSetData(this.regestarForm.value).subscribe({
        next: (respos) => {
          if(respos.message=='success')
          {
            this._Route.navigate(['/login']);
            this.isSpiner=false;
          } 
        },
        error: (err:HttpErrorResponse) => {
          this.isSpiner= false ;
          this.errorMasseg=err.error.message;

        },
      });
    }
  }
}
