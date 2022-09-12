import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CenarioAtualComponent } from './components/cenario-atual/cenario-atual.component';
import { DadosRecentesComponent } from './components/dados-recentes/dados-recentes.component';
import { SegurancaCorporativaComponent } from './components/seguranca-corporativa/seguranca-corporativa.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'formulario', component:  FormularioComponent},
  {path: 'cenario-atual', component:  CenarioAtualComponent},
  {path: 'seguranca-corporativa', component:  SegurancaCorporativaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
