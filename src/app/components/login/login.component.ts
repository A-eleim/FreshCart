import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private _ApiService: ApiService, private _Router: Router , private _ChangeDetectorRef:ChangeDetectorRef ) {}
  isSpiner: boolean = false;

  massage: string = '';

  loginform: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  hndelLogin(): void {
    if (this.loginform.valid) {
      this.isSpiner = true;
      // console.log(this.loginform.value)
      this._ApiService.login(this.loginform.value).subscribe({
        next: (resbos) => {
          if (resbos.message == 'success') {
            this.isSpiner = false;
            localStorage.setItem('eToken', resbos.token);
            this._Router.navigate(['/home']);
          }
        },
        error: (err: HttpErrorResponse) => {
          
          this.massage = err.error.message;
        },
        complete:()=> {
          this.isSpiner = false;
          this._ChangeDetectorRef.detectChanges()
        },
      });
    }
  }
}
