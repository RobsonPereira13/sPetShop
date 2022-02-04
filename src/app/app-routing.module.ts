import { InserirSenhaComponent } from './pages/inserir-senha/inserir-senha.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { InicialComponent } from './pages/inicial/inicial.component';
import { LoginComponent } from './pages/login/login.component';
import { PainelComponent } from './pages/painel/painel.component';
import { FilaComponent } from './pages/fila/fila.component';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/login', 
    pathMatch: 'full' 
  },
  { path: 'painel', component: PainelComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inicial', component: InicialComponent },
    {
        path: 'home',
        component: HomeComponent,
        children: [
        { path: 'cadastro', component: CadastroComponent },
        { path: 'inserir', component: InserirSenhaComponent },
        { path: 'fila', component: FilaComponent },
        
        ],
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
