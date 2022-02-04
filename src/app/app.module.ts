import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PainelComponent } from './pages/painel/painel.component';
import { LoginComponent } from './pages/login/login.component';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';


import {MatStepperModule} from '@angular/material/stepper';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { environment } from './../environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { InicialComponent } from './pages/inicial/inicial.component';
import { HomeModule } from './pages/home/home.module';
import { CadastroModule } from './pages/cadastro/cadastro.module';
import { InserirSenhaModule } from './pages/inserir-senha/inserir-senha.module';
import { FilaModule } from './pages/fila/fila.module';





@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    LoginComponent,
    InicialComponent,
    
  
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    CadastroModule,
    InserirSenhaModule,
    FilaModule,

    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatStepperModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
