import { RouterModule } from '@angular/router';

import { CadastroComponent } from './../cadastro/cadastro.component';
import { HomeComponent } from './home.component';
import { InserirSenhaComponent } from './../inserir-senha/inserir-senha.component';
import { FilaComponent } from './../fila/fila.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    HomeComponent,
    CadastroComponent,
    InserirSenhaComponent,
    FilaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule, 
    SharedModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
   
  ]
})
export class HomeModule { }
