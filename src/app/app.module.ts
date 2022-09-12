import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CenarioAtualComponent } from './components/cenario-atual/cenario-atual.component';
import { DadosRecentesComponent } from './components/dados-recentes/dados-recentes.component';
import { SegurancaCorporativaComponent } from './components/seguranca-corporativa/seguranca-corporativa.component';
import { FerramentasDeDefesaComponent } from './components/ferramentas-de-defesa/ferramentas-de-defesa.component';
import { AdversarialMachineLearningComponent } from './components/adversarial-machine-learning/adversarial-machine-learning.component';
import { DadosCardComponent } from './components/dados-recentes/dados-card/dados-card.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CenarioAtualComponent,
    DadosRecentesComponent,
    SegurancaCorporativaComponent,
    FerramentasDeDefesaComponent,
    AdversarialMachineLearningComponent,
    DadosCardComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
