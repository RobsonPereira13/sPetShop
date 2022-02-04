import { RouterModule } from '@angular/router';

import { CadastroComponent } from './../cadastro/cadastro.component';
import { HomeComponent } from './home.component';
import { InserirSenhaComponent } from './../inserir-senha/inserir-senha.component';
import { FilaComponent } from './../fila/fila.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';




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
    SharedModule 
   
  ]
})
export class HomeModule { }
