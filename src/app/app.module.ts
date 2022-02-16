import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PainelComponent } from './pages/painel/painel.component';
import { LoginComponent } from './pages/login/login.component';
import { InicialComponent } from './pages/inicial/inicial.component';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatToolbarModule} from '@angular/material/toolbar';



import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { NgxMaskModule, IConfig } from 'ngx-mask'

import { environment } from './../environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { HomeModule } from './pages/home/home.module';
import { CadastroModule } from './pages/cadastro/cadastro.module';
import { InserirSenhaModule } from './pages/inserir-senha/inserir-senha.module';
import { FilaModule } from './pages/fila/fila.module';

import { FlexLayoutModule } from '@angular/flex-layout';







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

    FlexLayoutModule,

    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatStepperModule,
    MatSnackBarModule,
    MatCardModule,
    MatRadioModule,
    MatToolbarModule,
    MatCheckboxModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters:false
    }),
    
    

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],

  providers: [
    {provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
