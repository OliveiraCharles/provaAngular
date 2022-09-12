import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

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


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCAt--EYykR6wFqllWyUm3Q0VVQbkL6aPA",
    authDomain: "provaangular-c8575.firebaseapp.com",
    projectId: "provaangular-c8575",
    storageBucket: "provaangular-c8575.appspot.com",
    messagingSenderId: "171037975622",
    appId: "1:171037975622:web:767cb1971d8132d3779647",
    measurementId: "G-EQ6LVXTCR6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

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
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
