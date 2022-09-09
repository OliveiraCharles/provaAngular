import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-recentes',
  templateUrl: './dados-recentes.component.html',
  styleUrls: ['./dados-recentes.component.scss']
})
export class DadosRecentesComponent implements OnInit {

  texto01 = {
    textoa:'Custo Médio de um incidente com vazamento de dados em 2020',
    textob:'3,86 USD Global, 1,12USD Brasil',
  }
  texto02 = {
    textoa:'Custo Médio de um incidente com vazamento de dados em 2021',
    textob:'4,24 USD Global, 1,08USD Brasil',
  }
  texto03 = {
    textoa:'Custo Médio de um incidente com vazamento de dados em 2022',
    textob:'4,35 USD Global, 1,38USD Brasil',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
