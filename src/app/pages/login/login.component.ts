import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AngularFireAuth } from './../../../../node_modules/@angular/fire/compat/auth';
import { Usuario } from './usuario';
import { Router } from '@angular/router';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  usuario: Usuario = new Usuario();

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  matcher = new MyErrorStateMatcher();
  constructor(
    public auth: AngularFireAuth,
    public router: Router
  
    ) { 


    }


  ngOnInit(): void {
  }

}
