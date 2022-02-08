import { HomeComponent } from './../home/home.component';
import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup,FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AngularFireAuth } from './../../../../node_modules/@angular/fire/compat/auth';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';



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
  form: FormGroup;
  usuario: Usuario = new Usuario();

 
  hide = true;
 
  constructor(
    public auth: AngularFireAuth,
    public router: Router,
    private fb: FormBuilder, 
    private snackBar: MatSnackBar
  
    ) { 


    }


  ngOnInit(): void {
    this.auth.authState.subscribe(authState => {
      if (authState) { 
        this.router.navigate(['/home']);
      }
    });
    this.gerarForm();
  }
  gerarForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email,  Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      unidade: ['', [Validators.required]]
    });
  }
  
  logarEmail() {

    const dados = this.form.value;
    
    this.auth
      .signInWithEmailAndPassword(dados.email, dados.senha)
      .then(res  => this.router.navigate(['/home']))
      .catch(err => this.snackBar.open(
              'Usuário/senha inválido(s)', 
        	  'Erro', { duration: 5000 })
    );


      }

  

}
